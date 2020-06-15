import Eyes from "@applitools/eyes-testcafe";
import { openEyes, checkElement } from "../utils/ApplitoolsHelper";
import { BasePage } from "../pages/BasePage";
import { ManifestHelper } from "../utils/ManifestHelper";

const basePage = new BasePage();
const manifestData = new ManifestHelper();

/* eslint-disable-next-line no-undef */
fixture("ApplitoolsSpec");

manifestData.manifest.forEach((component) => {
  const { componentName, paths } = component;
  const componentId = componentName.toLowerCase();
  paths.forEach((path) => {
    const label = path.label;
    test(`${label} is rendered`, async (t) => {
      const eyes = new Eyes();
      await t.navigateTo(`${basePage.url + label}`);
      await openEyes(eyes, t);
      await checkElement(eyes, `[data-id='${componentId}']`, t);
      await eyes.close();
      await eyes.waitForResults();
    });
  });
});
