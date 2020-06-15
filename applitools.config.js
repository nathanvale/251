const execSync = require("child_process").execSync;

const currentGitBranch =
  process.env.APPLITOOLS_BRANCH ||
  execSync("git rev-parse --abbrev-ref HEAD").toString();
const buildNumber = process.env.BUILD_NUMBER || "local";
const appName = "Origin Design System";

module.exports = {
  serverUrl: "https://origineyesapi.applitools.com",
  appName: `${appName}`,
  batchName: `${appName}_${currentGitBranch}_${buildNumber}`,
  branch: `${appName}_${currentGitBranch}`,
  parentBranch: `${appName}_master`,
  showLogs: false,
  concurrency: 10,
  saveNewTests: true,
};
