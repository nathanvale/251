def localBranchName = env.BRANCH_NAME.split("/").toList().last();
def getAppVersion(git_branch) {
    def appVersion =  git_branch.split("/").toList().last();
    if (appVersion.indexOf("-") != -1)
        appVersion = appVersion.split("-").toList().subList(0, 2).join("-")

    return appVersion;
}

pipeline {
    environment {
        project_id='shared'
        buildJobName = 'designsystem'
        build_label='node-manage'
        aws_account_id='dev'
        env_id='dev'
        app_id='designsystem'
    }
    agent { label 'node-base' }
    stages {

        stage("Install") {
            steps {
                sh "make install"
            }
        }

        stage("Validate") {
            steps {
                sh "make validate"
            }
        }

        stage("Bump Versions") {
            steps {
                script {
                    if (env.BRANCH_NAME == 'origin/master' || env.BRANCH_NAME == 'master') {
                        echo "Creating RELEASE ${BUILD_NUMBER}"
                        // We check out a real branch so we can push changes to remote.
                        sh "git checkout ${BRANCH_NAME}"

                        // The jenkins CI user has ssh keys set up buy no password. So only ssh remote urls can be used to push.
                        sh "git remote set-url origin git@bitbucket.orgn.io:od/origin-ui.git"

                        sh "make version args=--push"
                    }
                }
            }
        }


        stage("Publish Release") {
            when {
                expression { env.BRANCH_NAME == 'origin/master' || env.BRANCH_NAME == 'master' }
            }
            steps {
                script {
                    echo "Publish RELEASE ${BUILD_NUMBER}"
                    sh "make publish"
                }
            }
        }

        stage("Publish Canary") {
            when {
                expression { env.BRANCH_NAME != 'origin/master' && env.BRANCH_NAME != 'master' }
            }
            steps {
                script {
                    def shouldPublish = true
                    try {
                        timeout(time: 20, unit: 'SECONDS') {
                            shouldPublish = input(
                                    id: 'Publish Canary',
                                    message: 'Publish a canary?',
                                    ok: "Publish")
                        }
                    } catch (err) { // timeout reached or input false
                        def user = err.getCauses()[0].getUser()
                        if ('SYSTEM' == user.toString()) { // SYSTEM means timeout.
                            shouldPublish = false
                            println("timed out,skip publishing canary.")
                        }
                    }
                    println("shouldPublish: ${shouldPublish}")
                    if (shouldPublish) {
                        echo "Publish Canary Release ${BUILD_NUMBER}"
                        def gitShortHash = sh([script: "git rev-parse HEAD | cut -c -7", returnStdout: true]).trim()
                        sh "make pr-publish branch=${localBranchName} preid=${gitShortHash}"
                    }
                }
            }
        }

        stage("Docs Build") {
            steps {
                script {
                    sh "make docs"
                    archiveArtifacts "origin-ui-docs.tar.gz"
                }
            }
        }
        stage("Docs Publish and Deploy") {
            steps {
                script {
                    def appVersion = getAppVersion(env.BRANCH_NAME)

                    echo "env.BRANCH_NAME ${env.BRANCH_NAME}"
                    echo "Starting publish of ${app_id} to ${env_id} sub-folder ${appVersion}"
                    build job: "$project_id-awsmanage-s3site-publish",
                            parameters: [
                                    string(name: "app_id", value: app_id),
                                    string(name: "app_version", value: appVersion),
                                    string(name: 'artifact_build_job', value: env.JOB_NAME),
                                    string(name: "artifact_build_num", value: env.BUILD_NUMBER),
                                    string(name: "artifact_name", value: "origin-ui-docs.tar.gz")
                            ]
                    echo "Starting deployment of ${app_id} to ${env_id} sub-folder ${appVersion}"
                    build job: "$project_id-awsmanage-s3site-deploy",
                            parameters: [
                                    string(name: 'aws_account_id', value: aws_account_id),
                                    string(name: 'app_id', value: app_id),
                                    string(name: 'app_version', value: appVersion),
                                    string(name: 'env_id', value: env_id)
                            ]

                }
            }
        }
    }

    post {
        always {
            script {
                currentBuild.result = currentBuild.result ?: 'SUCCESS'
                notifyBitbucket()
            }
        }
    }
}
