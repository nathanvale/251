/* eslint-disable */
import { exec, execSync } from "child_process";
import minimist from "minimist";
import { printStage } from "./common";

const argv = minimist(process.argv.slice(2));

const __DOCKER__ = argv.docker;
const __LIVE_MODE__ = argv.l || argv.live;
const __VIDEO__ = argv.v || argv.video;

function run() {
  let appServer;

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

    task.push("--applitools -f ApplitoolsSpec" as never);

    if (__DOCKER__) {
      task.push("--docker" as never);
    }

    if (__VIDEO__) {
      task.push("--video" as never);
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
