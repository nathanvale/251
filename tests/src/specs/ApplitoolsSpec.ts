import { Selector } from "testcafe";
import Eyes from "@applitools/eyes-testcafe";
import { openEyes, checkElement } from "../utils/ApplitoolsHelper";
import { BasePage } from "../pages/BasePage";
import { ManifestHelper } from "../utils/ManifestHelper";

const basePage = new BasePage();
const manifestData = new ManifestHelper();

/* eslint-disable-next-line no-undef */
fixture("ApplitoolsSpec");

manifestData.manifest.forEach((component) => {
  const { componentName, path } = component;
  test(`${componentName} is rendered`, async (t) => {
    const eyes = new Eyes();
    await t
      .navigateTo(`${basePage.url + path}`)
      .expect(Selector(basePage.componentId).exists)
      .ok();
    await openEyes(eyes, t);
    await checkElement(eyes, t);
    await eyes.close();
    await eyes.waitForResults();
  });
});
