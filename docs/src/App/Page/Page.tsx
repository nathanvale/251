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
import { IconWarning } from "@origin-digital/ods-icons";

import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { slugify } from "@origin-digital/ods-helpers";
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
  margin-top: -40px;
`;

const HashLink = styled(Box)`
  opacity: 0;
  /* stylelint-disable selector-type-no-unknown */
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
    <Stack>
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
            <Stack>
              {title && title !== propsTitle ? (
                <LinkableHeading slug={slug}>
                  {isLab ? (
                    <>
                      <IconWarning />
                      <Box paddingRight="xxsmall" />
                    </>
                  ) : null}
                  {title}
                </LinkableHeading>
              ) : null}

              {typeof description === "string" ? (
                <Text>{description}</Text>
              ) : description ? (
                description
              ) : null}
              {children}
            </Stack>
          </div>
        );
      })}
    </Stack>
  );
};
