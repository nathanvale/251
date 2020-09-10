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
        APPLITOOLS_API_KEY = credentials('APPLITOOLS_APIKEY')
        APPLITOOLS_BRANCH = "${env.BRANCH_NAME}"
    }
    agent { label 'react-bs' }
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
                    def userInput = true
                    def didTimeout = false
                    try {
                        timeout(time: 20, unit: 'SECONDS') {
                            userInput = input(
                                    id: 'Proceed1', message: 'Publish Canary?', parameters: [
                                    [$class: 'BooleanParameterDefinition', defaultValue: true, description: '', name: 'Publish']
                            ])
                        }
                    } catch (err) { // timeout reached or input false
                        def user = err.getCauses()[0].getUser()
                        if ('SYSTEM' == user.toString()) { // SYSTEM means timeout.
                            didTimeout = true
                            println("timed out,skip publishing canary.")
                        } else {
                            userInput = false
                            echo "Canary Publish skipped by: [${user}]"
                        }
                    }
                    println("userInput: ${userInput}, didTimeout: ${didTimeout}")

                    if (didTimeout) {
                        // do something on timeout
                        echo "Canary Publish request timed out, skipping canary publishing"
                    } else if (userInput == true) {
                        echo "Publish Canary Release ${BUILD_NUMBER}"
                        def gitShortHash = sh([script: "git rev-parse HEAD | cut -c -7", returnStdout: true]).trim()
                        sh "make pr-publish branch=${localBranchName} preid=${gitShortHash}"
                    } else {
                        echo "Canary did not publish"
                    }
                }
            }
        }

        stage("Docs Build") {
            steps {
                script {
                    sh "make docs"
                    archiveArtifacts "origin-ui-docs.tar.gz"
                    stash includes: "origin-ui-docs.tar.gz", name: "docs"
                }
            }
        }
         stage("Visual Tests") {
            agent { label "ec2-docker-host-usw1" }
            steps {
                    script {
                        sh 'docker rm -f $(docker ps -a -q) || true'
                        sh "docker-compose -f docker-compose.yml down --remove-orphans"
                        // This is to make identical to local 
                        sh "mkdir -p docs/build"
                        unstash 'docs'
                        sh "tar -xvzf origin-ui-docs.tar.gz -C docs/build"
                        sh "make test/visuals"
                    }
                }
            post {
                always {
                archiveArtifacts artifacts: 'tests/reports/*, tests/reports/videos/*'
                publishHTML(target: [
                        allowMissing         : true,
                        alwaysLinkToLastBuild: false,
                        keepAll              : true,
                        reportDir            : "tests/reports",
                        reportFiles          : 'testcafe_report.html',
                        reportName           : "Applotools_test_report"
                    ])
                }
                cleanup {
                    cleanWs()
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
