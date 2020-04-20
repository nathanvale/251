import React from "react";
import { StackProps, Stack, Section } from "@origin-digital/ods-core";
import { DocsText } from "@origin-digital/ods-lab";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Page } from "./components/Page/Page";
import { Props } from "./components/Props/Props";
import { Example } from "./components/Example/Example";
import { CodeBlock } from "./components/CodeBlock/CodeBlock";
import { DocsContainer } from "./components/DocsContainer/DocsContainer";
import { Header } from "./components/Header/Header";

interface ComponentRouteProps {
  componentName: string;
  subfolder?: string;
  sourceUrlPrefix: string;
  playroomUrl: string;
  packageName: string;
}

export const ComponentRoute = ({
  componentName,
  subfolder = "",
  sourceUrlPrefix,
  playroomUrl,
  packageName,
}: ComponentRouteProps) => {
  const componentFolder = `packages/${packageName}/src/${
    subfolder ? `${subfolder}/` : ""
  }${componentName}`;
  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;
  let docs: ComponentDocs;
  try {
    docs = require(`../../../../${componentFolder}/${componentName}.docs.tsx`)
      .docs;
  } catch (error) {
    docs = {
      category: "Unknown",
      componentName,
      examples: [],
      snippets: [],
    };
  }

  const {
    description,
    propDescriptions,
    examples,
    variant,
    specialRequiredProps,
    specialOptionalProps,
  } = docs;
  return (
    <Page>
      <Stack space="xxxlarge">
        <Header
          componentName={componentName}
          sourceUrl={sourceUrl}
          description={description}
        />
        <Stack>
          <Section paddingY="none">
            <Stack space="large">
              <DocsText color="grey600" weight="medium" size="xsmall">
                {`Usage ${
                  packageName === "ods-lab"
                    ? "(Beware experiemental components have an API that is subject to change)"
                    : ""
                }`}
              </DocsText>
              <DocsContainer>
                <CodeBlock
                  codeString={`import {${componentName}} from "@origin-digital/${packageName}"`}
                />
              </DocsContainer>
            </Stack>
          </Section>
          {examples.map((props, index) => (
            <Example key={index} {...props} playroomUrl={playroomUrl} />
          ))}
        </Stack>
        <Props<StackProps>
          variant={variant}
          componentName={componentName}
          propDescriptions={propDescriptions || {}}
          specialRequiredProps={specialRequiredProps || []}
          specialOptionalProps={specialOptionalProps || []}
        />
      </Stack>
    </Page>
  );
};
