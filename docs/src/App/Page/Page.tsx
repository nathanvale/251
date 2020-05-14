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

import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { TextStack } from "../TextStack/TextStack";
import { MaxWidthBox } from "../MaxWidthBox/MaxWidthBox";
import { propsTitle } from "../ComponentDoc/ComponentDoc";

export interface PageSection {
  title: string;
  description?: React.ReactNode;
  id?: string;
  children?: React.ReactNode;
}
export interface PageProps {
  title: string;
  description?: React.ReactNode;
  sections?: PageSection[];
  isHomePage?: boolean;
  hideAnchorLinks?: boolean;
}

const slugify = (str: string) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};

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

const LinkableHeadingContainer = styled(Box)``;
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
  children: string;
  slug: string;
}

const LinkableHeading = ({
  children,
  variant = "h4",
  slug,
}: LinkableHeadingProps) => {
  return (
    <LinkableHeadingContainer>
      <HashAnchor position="absolute" />
      <Heading variant={variant}>
        {children}{" "}
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
      </Heading>
    </LinkableHeadingContainer>
  );
};

export const Page = ({
  description,
  title,
  sections = [],
  isHomePage,
  hideAnchorLinks,
}: PageProps) => {
  return (
    <MaxWidthBox>
      <Stack space={["xlarge", "xxlarge"]}>
        <Stack space="xlarge">
          <Heading variant="h3">{title}</Heading>
          {description ? <Text variant="body">{description}</Text> : null}
          {!hideAnchorLinks ? (
            <Stack space="small">
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
        </Stack>
        <Stack space={["xlarge", "xxlarge"]}>
          {sections.map((section, index) => {
            const { title, description, children } = section;
            const slug = slugify(title);
            return (
              <div id={slug} key={index}>
                <TextStack>
                  {title && title !== propsTitle ? (
                    <LinkableHeading
                      slug={slug}
                      variant={isHomePage ? "h4" : "h4"}
                    >
                      {title}
                    </LinkableHeading>
                  ) : null}
                  {description ? <Text>{description}</Text> : null}
                  {children}
                </TextStack>
              </div>
            );
          })}
        </Stack>
      </Stack>
    </MaxWidthBox>
  );
};
