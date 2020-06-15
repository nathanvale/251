/* eslint-disable */
import { exec, execSync } from "child_process";
import minimist from "minimist";
import { printStage } from "./common";

const argv = minimist(process.argv.slice(2));

const __APPLITOOLS__ = argv.applitools;
const __BROWSERSTACK__ = argv.browserstack;
const __DOCKER__ = argv.docker;
const __LIVE_MODE__ = argv.l || argv.live;

function run() {
  let appServer;
  const projectName = "Origin UI";
  const buildId = process.env.BRANCH_NAME
    ? process.env.BRANCH_NAME
    : "Adhoc-Build@origin-ui";

  const tearDown = (exitCode) => {
    if (appServer) {
      printStage("⌛️  Stop app server");
      appServer.kill();
    }
    process.exit(exitCode);
  };

  try {
    printStage("🏗 Serve");
    appServer = exec("yarn serve:static");

    printStage("💊  Run testcafe functional tests");

    const task = [];

    if (__BROWSERSTACK__ || __APPLITOOLS__) {
      process.env.BROWSERSTACK_PROJECT_NAME = process.env.LT_TEST_NAME = projectName;
      process.env.BROWSERSTACK_BUILD_ID = process.env.LT_BUILD = buildId;
    }

    if (__BROWSERSTACK__) {
      task.push("--browserstack" as never);
    }

    if (__DOCKER__) {
      task.push("--docker" as never);
    }

    if (__APPLITOOLS__) {
      task.push("--applitools -f ApplitoolsSpec" as never);
    }

    if (__LIVE_MODE__) {
      task.push("--live" as never);
    }

    const options = ["f", "t", "c"];
    options.forEach((option) => {
      if (argv[option]) task.push(`-${option} "${argv[option]}"` as never);
    });

    execSync(`ts-node ./scripts/runner.ts ${task.join(" ")}`, {
      stdio: "inherit",
    });
  } catch (error) {
    tearDown(error.status);
  } finally {
    tearDown(0);
  }
}

run();
