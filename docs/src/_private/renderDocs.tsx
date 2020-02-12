import React from "react";
import {Stack, StackProps} from "@origin-digital/ods-core";
import {ComponentDocs} from "../types";
import {Example, Page, Props} from ".";

export function renderDocs({
  componentName,
  description,
  propDescriptions,
  examples,
  variant,
}: ComponentDocs): JSX.Element {
  return (
    <Page>
      <Props<StackProps>
        variant={variant}
        componentName={componentName}
        description={description}
        propDescriptions={propDescriptions || {}}
      />
      <Stack>
        {examples.map((props, index) => {
          return <Example key={index} {...props} />;
        })}
      </Stack>
    </Page>
  );
}
