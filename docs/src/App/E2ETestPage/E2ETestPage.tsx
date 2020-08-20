import React from "react";
import { Section, Stack, Heading, Text, Box } from "@origin-digital/ods-core";
import { E2ETests } from "@origin-digital/ods-types";
import { Route, Switch } from "react-router";

interface E2ETestPageProps {
  componentName: string;
  tests: E2ETests;
}
interface E2ETestProps {
  componentName: string;
  tests: E2ETests;
}

function E2ETest({ componentName, tests }: E2ETestProps) {
  return (
    <Section stretchY backgroundColor="white">
      <Stack space="xlarge" dividers data-id="tests">
        <Heading variant="h2">{componentName} </Heading>
        {tests.map((test) => {
          const Code = test.Code;
          return (
            <>
              <Stack space={["small", "medium"]}>
                <Text>{test.label}</Text>
              </Stack>
              {test.Code ? (
                <Box data-id="example">
                  <Code />
                </Box>
              ) : null}
            </>
          );
        })}
      </Stack>
    </Section>
  );
}

export const E2ETestPage = ({ componentName, tests }: E2ETestPageProps) => {
  return (
    <Switch>
      <Route
        path="/e2e/:componentName"
        children={<E2ETest componentName={componentName} tests={tests} />}
      />
    </Switch>
  );
};
