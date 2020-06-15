/* eslint-disable no-undef */
import React from "react";
import {
  Stack,
  Box,
  Heading,
  Text,
  HeadingProps,
  TextLinkRenderer,
} from "@origin-digital/ods-core";
import WarningSharpIcon from "@material-ui/icons/WarningSharp";

import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { slugify } from "@origin-digital/ods-helpers";
import { TextStack } from "../TextStack/TextStack";
import { propsTitle } from "../ComponentDoc/ComponentDoc";

export interface PageSection {
  title: string;
  description?: React.ReactNode;
  id?: string;
  children?: React.ReactNode;
  isLab?: boolean;
}
export interface PageProps {
  title: string;
  description?: React.ReactNode;
  sections?: PageSection[];
  hideAnchorLinks?: boolean;
}

const AnchorLink = ({ children, to }: any) => {
  return (
    <Text>
      <TextLinkRenderer>
        {({ textLinkStyles }) => (
          <Link
            smooth
            to={to}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className={textLinkStyles}
          >
            {children}
          </Link>
        )}
      </TextLinkRenderer>
    </Text>
  );
};

const LinkableHeadingContainer = styled(Box)`
  cursor: pointer;
`;
const HashAnchor = styled(Box)`
  margintop: -40px;
`;
const HashLink = styled(Box)`
  opacity: 0;
  ${LinkableHeadingContainer}:hover & {
    opacity: 1;
  }
`;

interface LinkableHeadingProps {
  variant?: HeadingProps["variant"];
  children: React.ReactNode;
  slug: string;
}

const LinkableHeading = ({
  children,
  variant = "h4",
  slug,
}: LinkableHeadingProps) => {
  return (
    <LinkableHeadingContainer display="flex">
      <HashAnchor position="absolute" />
      <Heading variant={variant}>
        <Box display="flex">
          {children}
          <Box paddingRight="xxsmall" />
          <HashLink component="span" transition="fast">
            <TextLinkRenderer>
              {({ textLinkStyles }) => (
                <Link
                  smooth
                  to={`#${slug}`}
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  className={textLinkStyles}
                >
                  #
                </Link>
              )}
            </TextLinkRenderer>
          </HashLink>
        </Box>
      </Heading>
    </LinkableHeadingContainer>
  );
};

export const Page = ({
  description,
  title,
  sections = [],
  hideAnchorLinks,
}: PageProps) => {
  return (
    <TextStack space={["medium", "large"]}>
      <Heading variant="h3">{title}</Heading>
      {typeof description === "string" ? (
        <Text variant="body">{description}</Text>
      ) : description ? (
        description
      ) : null}
      {!hideAnchorLinks ? (
        <Stack space="xxsmall">
          {sections.map((section, index) => {
            const { title, id } = section;
            const to = id ? `#${id}` : `#${slugify(title)}`;
            return (
              <AnchorLink key={index} to={to}>
                {title}
              </AnchorLink>
            );
          })}
        </Stack>
      ) : null}

      {sections.map((section, index) => {
        const { title, description, children, isLab } = section;
        const slug = slugify(title);
        return (
          <div id={slug} key={index}>
            <TextStack>
              {title && title !== propsTitle ? (
                <LinkableHeading slug={slug}>
                  {isLab ? (
                    <>
                      <WarningSharpIcon style={{ color: "#ffb432" }} />
                      <Box paddingRight="xxsmall" />
                    </>
                  ) : null}
                  {title}
                </LinkableHeading>
              ) : null}

              {description ? <Text>{description}</Text> : null}
              {children}
            </TextStack>
          </div>
        );
      })}
    </TextStack>
  );
};
