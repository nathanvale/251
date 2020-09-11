/* eslint-disable */
import minimist from "minimist";
import createTestCafe from "testcafe";

const argv = minimist(process.argv.slice(2));

const __APPLITOOLS__ = argv.a || argv.applitools;
const __LIVEMODE__ = argv.l || argv.live;
const __CONCURRENCY__ = argv.c;
const __FIXTURE__ = argv.f;
const __TEST__ = argv.t;
const __DOCKER__ = argv.d || argv.docker;
const __VIDEO__ = argv.v || argv.video;

let testcafe: TestCafe;
let totalErrors = 0;

const reportFolder = "./reports";

const runTest = async (browsers: string | string[]) => {
  console.log(
    `Starting tests on Browser "${browsers}" with live mode ${
      __LIVEMODE__ ? "ON" : "OFF"
    }`
  );
  await createTestCafe("localhost", 1337, 1338)
    .then((tc) => {
      testcafe = tc;
      const runner = __LIVEMODE__
        ? testcafe.createLiveModeRunner()
        : testcafe.createRunner();

      if (__CONCURRENCY__) {
        console.log(`Tests are running with ${__CONCURRENCY__} concurrency`);
        runner.concurrency(__CONCURRENCY__);
      }

      if (__VIDEO__) {
        console.log("Recording videos....");
        runner.video(`${reportFolder}/videos`, {
          pathPattern: "${TEST_ID}.mp4",
        });
      }

      return runner
        .browsers(browsers)
        .filter((testName, fixtureName, _fixturePath, _testMeta) => {
          if (__FIXTURE__ && __TEST__) {
            return testName === __TEST__ && fixtureName === __FIXTURE__;
          }

          if (__TEST__) {
            return testName === __TEST__;
          }

          if (__FIXTURE__) {
            return fixtureName === __FIXTURE__;
          }

          return fixtureName !== "ApplitoolsSpec";
        })
        .src("./src/specs")
        .reporter([
          "spec",
          {
            name: "test-summary",
            output: `${reportFolder}/testcafe_report.html`,
          },
        ])
        .screenshots({
          path: `${reportFolder}/screenshots`,
          fullPage: true,
          pathPattern: "${FIXTURE}_${TEST}.png",
        })
        .run();
    })
    .then(async (failedCount) => {
      console.log(`Tests failed: ${failedCount}`);

      await testcafe.close();
      if (failedCount > 0) {
        if (__APPLITOOLS__) {
          totalErrors += failedCount;
        } else {
          throw new Error(`${failedCount} tests failed`);
        }
      }
    });
};

const runAllBrowsers = async () => {
  if (__DOCKER__) {
    console.log("Snapshot testing using applitools and docker");
    await runTest(["chromium"]);
  } else {
    console.log("Using local chrome browser");
    await runTest(["chrome"]);
  }
};

runAllBrowsers().then(() => {
  if (__APPLITOOLS__ && totalErrors) {
    throw new Error(`${totalErrors} tests failed`);
  }
});
