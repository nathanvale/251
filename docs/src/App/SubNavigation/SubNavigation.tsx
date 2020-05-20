/* eslint-disable jsx-a11y/anchor-has-content */
import React, { AnchorHTMLAttributes } from "react";
import map from "lodash/map";
import { Box, Stack, Heading, Text } from "@origin-digital/ods-core";
import { useLocation } from "react-router";
import guides from "../routes/guides";
import foundations from "../routes/foundations";
import {
  getCategorisedComponents,
  getAllComponents,
} from "../navigationHelpers";
import { useConfig } from "../ConfigContext";
import {
  NavLinkRenderer,
  NavLinkRendererProps,
} from "../NavLinkRenderer.tsx/NavLinkRenderer";

interface SubNavigationItem {
  name: string;
  path: string;
  onClick?: () => void;
}

interface SubNavigationGroup {
  title: string;
  items: SubNavigationItem[];
}

interface LinkComponentProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
interface NavLinkProps
  extends Omit<NavLinkRendererProps, "children">,
    Omit<LinkComponentProps, "className" | "style"> {}

const categorisedComponents = getCategorisedComponents();
const allComponents = getAllComponents();

export const NavLink = ({ current, ...props }: NavLinkProps) => (
  <NavLinkRenderer current={current}>
    {({ navLinkStyles }) => (
      <Text>
        <a className={navLinkStyles} {...props} />
      </Text>
    )}
  </NavLinkRenderer>
);

const SubNavigationGroup = ({ title, items }: SubNavigationGroup) => {
  const location = useLocation();
  return (
    <Box component="nav">
      <Stack space="small">
        <Heading variant="h4">{title}</Heading>
        <Box component="ul">
          <Stack space="xxsmall">
            {items.map(({ name, path, onClick }) => {
              return (
                <NavLink
                  current={location.pathname === path}
                  key={name}
                  href={path}
                  onClick={onClick}
                >
                  {name}
                </NavLink>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

interface SubNavigationProps {
  onSelect?: () => void;
}
export const SubNavigation = ({ onSelect }: SubNavigationProps) => {
  const { playroomUrl, sourceUrlPrefix, zeplinUrl } = useConfig();

  return (
    <Stack space="medium">
      <SubNavigationGroup
        title="Tools"
        items={[
          {
            name: "Source",
            path: sourceUrlPrefix,
          },
          {
            name: "Playroom",
            path: playroomUrl,
          },
          {
            name: "Zeplin style guide",
            path: zeplinUrl,
          },
        ]}
      />

      <SubNavigationGroup
        title="Guides"
        items={map(guides, (guide, path) => ({
          name: guide.title,
          path: `#${path}`,
          external: false,
          onClick: onSelect,
        }))}
      />

      <SubNavigationGroup
        title="Foundations"
        items={map(foundations, (foundation, path) => {
          return {
            name: foundation.title,
            path: `#${path}`,
            external: false,
            onClick: onSelect,
          };
        })}
      />

      {["Layout", "Content", "Interaction", "Logic", "Atomic"].map(
        (category) => {
          return (
            <SubNavigationGroup
              key={category}
              title={category}
              items={categorisedComponents[category].map(({ name }) => ({
                name,
                path: `#/components/${name}`,
                external: false,
                onClick: onSelect,
              }))}
            />
          );
        }
      )}

      <SubNavigationGroup
        title="All Components"
        items={allComponents.map((componentName) => ({
          name: componentName,
          path: `#/components/${componentName}`,
          external: false,
          onClick: onSelect,
        }))}
      />
    </Stack>
  );
};
