import * as odsCore from "@origin-digital/ods-core";
import { ComponentDocs, DocsSnippet } from "@origin-digital/ods-types";
import { getCodeAsString } from "@origin-digital/ods-scripts";

const components = Object.keys(odsCore);
const config = components
  .filter(name => !/^(OriginThemeProvider|Box)/.test(name))
  .map(name => {
    let snippets: ComponentDocs["snippets"];
    try {
      snippets = require(`../../packages/ods-core/src/${name}/${name}.docs.tsx`).docs.snippets.map(
        (snippet: DocsSnippet) => ({
          name: snippet.label,
          code: getCodeAsString(snippet.Code),
          group: name,
        }),
      );
    } catch (error) {
      snippets = [];
    }
    return snippets;
  })
  .flatMap(x => x);

export default config;
