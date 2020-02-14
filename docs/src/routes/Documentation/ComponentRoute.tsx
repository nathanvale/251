import React from "react";
import {StackProps, Stack, Section} from "@origin-digital/ods-core";
import {Text} from "@origin-digital/ods-lab";
import {ComponentDocs} from "../../types";
import {Page} from "./components/Page/Page";
import {Props} from "./components/Props/Props";
import {Example} from "./components/Example/Example";
import {CodeBlock} from "./components/CodeBlock/CodeBlock";
import {DocsContainer} from "./components/DocsContainer/DocsContainer";

interface ComponentRouteProps {
  componentName: string;
  subfolder?: string;
  sourceUrlPrefix: string;
  packageName: string;
}

export const ComponentRoute = ({
  componentName,
  subfolder = "",
  packageName,
}: ComponentRouteProps) => {
  const componentFolder = `packages/${packageName}/src/${
    subfolder ? `${subfolder}/` : ""
  }${componentName}`;
  const docs: ComponentDocs = require(`../../../../${componentFolder}/${componentName}.docs.tsx`)
    .docs;

  const {description, propDescriptions, examples, variant} = docs;
  return (
    <Page>
      <Stack space="xxlarge">
        <Props<StackProps>
          variant={variant}
          componentName={componentName}
          description={description}
          propDescriptions={propDescriptions || {}}
        />
        <Stack>
          <Section backgroundColor="white">
            <Stack space="large">
              <Text color="grey56" weight="medium" size="xsmall">
                Usage
              </Text>
              <DocsContainer>
                <CodeBlock
                  Code={`import {${componentName}} from "@origin-digital/${packageName}"`}
                />
              </DocsContainer>
            </Stack>
          </Section>
          {examples.map((props, index) => {
            return <Example key={index} {...props} />;
          })}
        </Stack>
      </Stack>
    </Page>
  );
};
