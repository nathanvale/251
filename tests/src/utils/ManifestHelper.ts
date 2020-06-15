// https://stackoverflow.com/questions/55478059/typescript-always-errors-when-importing-a-config-json-file
const manifestData = require("../../../docs/public/e2e-manifest.json");

export class ManifestHelper {
  public manifest = manifestData;
}
