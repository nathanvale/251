/* eslint-disable */
import minimist from "minimist";
import createTestCafe from "testcafe";

const argv = minimist(process.argv.slice(2));

const __APPLITOOLS__ = argv.a || argv.applitools;
const __BROWSERSTACK__ = argv.bs || argv.browserstack;
const __LIVEMODE__ = argv.l || argv.live;
const __CONCURRENCY__ = argv.c;
const __FIXTURE__ = argv.f;
const __TEST__ = argv.t;

let testcafe: TestCafe;
let totalErrors = 0;

const browserstack = ["browserstack:chrome"];

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
            output: "./reports/testcafe_report.html",
          },
        ])
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
  if (__BROWSERSTACK__) {
    console.log("Using browserstack");
    for (const browser of [browserstack]) {
      await runTest(browser);
    }
  } else if (__APPLITOOLS__) {
    console.log("Snapshot testing using applitools and browserstack");
    for (const browser of [...browserstack]) {
      await runTest(browser);
    }
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
