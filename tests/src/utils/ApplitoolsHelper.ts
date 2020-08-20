import Eyes from "@applitools/eyes-testcafe";

const currentDate = new Date().toLocaleString();

const BrowsersList = [
  { width: 1024, height: 768, name: "firefox" },
  { width: 1024, height: 768, name: "chrome" },
  { width: 1024, height: 768, name: "ie11" },
  { width: 1024, height: 768, name: "safari" },
];

export const checkElement = (eyes: Eyes, t: TestController): Promise<any> => {
  return eyes.checkWindow({
    tag: t["testRun"]["test"]["name"],
    target: "window",
    fully: true,
  });
};

export const openEyes = (eyes: Eyes, t: TestController): Promise<any> => {
  return eyes.open({
    batchId: `${currentDate}`,
    testName: t["testRun"]["test"]["name"],
    browser: [...BrowsersList] as any,
    t,
  } as any);
};
