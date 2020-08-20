const execSync = require("child_process").execSync;

const currentGitBranch =
  process.env.APPLITOOLS_BRANCH ||
  execSync("git rev-parse --abbrev-ref HEAD").toString();

const buildNumber = process.env.BUILD_NUMBER || "local";
const appName = "Origin Design System";

process.env.APPLITOOLS_BRANCH_NAME = `${appName}_${currentGitBranch}`;

module.exports = {
  serverUrl: "https://origineyesapi.applitools.com",
  appName: `${appName}`,
  batchName: `${appName}_${currentGitBranch}_${buildNumber}`,
  parentBranch: `${appName}_master`,
  showLogs: false,
  concurrency: 20,
  saveNewTests: true,
};
