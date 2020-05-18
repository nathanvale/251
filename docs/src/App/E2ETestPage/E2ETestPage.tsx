import React from "react";
import { Section, Stack, Heading, Text, Box } from "@origin-digital/ods-core";
import { slugify } from "@origin-digital/ods-helpers";
import { E2ETests } from "@origin-digital/ods-types";
import { useParams, Route, Switch } from "react-router";

interface E2ETestPageProps {
  componentName: string;
  tests: E2ETests;
}
interface E2ETestProps {
  componentName: string;
  tests: E2ETests;
}

function E2ETest({ componentName, tests }: E2ETestProps) {
  const { id } = useParams();
  const test = tests.find((test) => slugify(test.label) === id);
  if (test) {
    const { Code, label } = test;
    return (
      <Section stretchY backgroundColor="white">
        <Stack space="xlarge" dividers>
          <Stack space={["small", "medium"]}>
            <Heading variant="h2">{componentName} </Heading>
            <Text>{label}</Text>
          </Stack>

          {Code ? (
            <Box data-id="example">
              <Code />
            </Box>
          ) : null}
        </Stack>
      </Section>
    );
  }

  return null;
}

export const E2ETestPage = ({ componentName, tests }: E2ETestPageProps) => {
  return (
    <Switch>
      <Route
        path="/e2e/:componentName/:id"
        children={<E2ETest componentName={componentName} tests={tests} />}
      />
    </Switch>
  );
};
