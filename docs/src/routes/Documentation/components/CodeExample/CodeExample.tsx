import React, { ReactNode } from "react";
import { Section, Box } from "@origin-digital/ods-core";
import { ExampleDocs } from "@origin-digital/ods-types";
import { DocsContainer } from "../DocsContainer/DocsContainer";

interface CodeExampleProps {
  Container?: ExampleDocs["Container"];
  noSection?: ExampleDocs["noSection"];
  stretch?: ExampleDocs["stretch"];
  Code: () => JSX.Element;
}

interface CodeContainerProps {
  Container?: ExampleDocs["Container"];
  children: ReactNode;
}

const CodeContainer = ({ Container, children }: CodeContainerProps) => {
  if (Container) {
    return <Container>{children}</Container>;
  } else {
    return <>{children}</>;
  }
};

export const CodeExample = ({
  Code,
  Container,
  noSection,
  stretch,
}: CodeExampleProps) => (
  <Box
    style={{ height: stretch ? "600px" : undefined }}
    backgroundColor="grey100"
  >
    <Box height="full" display="flex" paddingY="xlarge" justifyContent="center">
      {noSection ? (
        <CodeContainer Container={Container}>
          <Code />
        </CodeContainer>
      ) : (
        <Section paddingY="none" backgroundColor="transparent">
          {
            <DocsContainer>
              <CodeContainer Container={Container}>
                <Code />
              </CodeContainer>
            </DocsContainer>
          }
        </Section>
      )}
    </Box>
  </Box>
);
