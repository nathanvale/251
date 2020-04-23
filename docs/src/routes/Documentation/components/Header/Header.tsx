import React from "react";
import styled from "styled-components";
import { maxWidth, MaxWidthProps } from "styled-system";
import {
  Stack,
  Columns,
  Column,
  Section,
  Box,
  Text,
  TextLink,
  TextLinkRenderer,
} from "@origin-digital/ods-core";
import { HashLink as Link } from "react-router-hash-link";
import { DocsText } from "@origin-digital/ods-lab";
import { ComponentDocs } from "@origin-digital/ods-types";
import componentDocs from "../../../../componentDocs.json";

interface HeaderProps {
  componentName: ComponentDocs["componentName"];
  sourceUrl: string;
  description: ComponentDocs["description"];
}

type ComponentName = keyof typeof componentDocs;

const isValidComponentName = (
  componentName: string | number | symbol
): componentName is ComponentName => {
  return componentDocs.hasOwnProperty(componentName);
};

const StyledBox = styled(Box)<MaxWidthProps>`
  ${maxWidth}
`;

export function Header({ description, componentName, sourceUrl }: HeaderProps) {
  if (!isValidComponentName(componentName)) {
    return null;
  }
  return (
    <Section paddingY="none">
      <StyledBox maxWidth={[null, null, "75%", "66%"]}>
        <Stack space={["xxlarge", "xxxlarge"]}>
          <Columns alignY="bottom" space="xsmall" collapseBelow="sm">
            <Column width="content">
              <DocsText color="grey600" size="xlarge">
                {componentName}
              </DocsText>
            </Column>
            <Column>
              <Box />
            </Column>
            <Column>
              <Box />
            </Column>
            <Column width="content">
              <Text variant="overline-text">
                <TextLinkRenderer>
                  {({ textLinkStyles }) => (
                    <Link
                      smooth
                      className={textLinkStyles}
                      to={`/components/${componentName}/#props`}
                    >
                      Props
                    </Link>
                  )}
                </TextLinkRenderer>
              </Text>
            </Column>
            <Column width="content">
              <Text variant="overline-text">
                <TextLink href={sourceUrl}>View source</TextLink>
              </Text>
            </Column>
          </Columns>
          {description && (
            <DocsText
              color="grey600"
              size="xsmall"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </Stack>
      </StyledBox>
    </Section>
  );
}
