import React, { useState } from "react";
import map from "lodash/map";
import groupBy from "lodash/groupBy";
import { Route, useLocation, Link as ReactRouterLink } from "react-router-dom";
import * as odsCore from "@origin-digital/ods-core";
import { DocsText, Link } from "@origin-digital/ods-lab";
import styled, { css } from "styled-components";
import { media } from "@origin-digital/ods-helpers";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Logo } from "../../shared/Logo/Logo";
import { ConfigConsumer } from "../../shared/ConfigContext/ConfigContext";
import { guides } from "./guides";
import { foundations } from "./foundations";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { ComponentRoute } from "./ComponentRoute";

interface MenuItem {
  name: string;
  path: string;
  external: boolean;
  onClick: () => void;
}

function getDocPaths(module: any, packageName: string) {
  return Object.keys(module).map((name) => ({
    name,
    packageName,
  }));
}
const componentPaths = [
  ...getDocPaths(
    odsCore,
    "ods-core"
  ) /*,
   ...getDocPaths(odsLab, "ods-lab"), */,
];

const componentPathsByCategory = groupBy(
  componentPaths,
  (component) => component.name
);

const { Box, Stack, Hidden } = odsCore;

const responsiveGutter: odsCore.BoxProps["paddingX"] = ["large", "xlarge"];
const headerHeight = "100px";

const HiddenOnPrint = styled(Hidden)`
  @media print {
    display: none !important;
  }
`;

const MenuSectionList = ({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) => (
  <Stack space={["medium", "large"]}>
    <DocsText weight="medium" component="h2">
      {title}
    </DocsText>

    <Stack space={["xsmall", "small"]}>
      {items.map(({ name, path, onClick, external }) => (
        <DocsText key={name}>
          {external ? (
            <Box display="flex">
              <Link component="a" href={path}>
                {name}
              </Link>
            </Box>
          ) : (
            <ReactRouterLink to={path} onClick={onClick}>
              <Link>{name}</Link>
            </ReactRouterLink>
          )}
        </DocsText>
      ))}
    </Stack>
  </Stack>
);

const Header = styled(Box)<{ isOpen: boolean }>`
  background: white;
  z-index: 3;
  ${(p) => (p.isOpen ? "position: fixed;" : undefined)}
  ${media.lg`
    position: fixed;
    width:  284px;
  `}
`;

const LogoContainer = styled(Box)`
  width: 64px;
  overflow: hidden;
  margin-left: -16px;
`;

const Container = styled(Box)`
  padding-top: ${headerHeight};
`;

const Menu = styled(Box)<{ isOpen: boolean }>`
    z-index: 2;
    top: ${headerHeight};
    left: 0;
    bottom: 0;
    right: 0;
    transition: opacity .2s ease, transform .2s ease;
    @media screen and (max-width: 991px) {
      background: white;
      opacity: 0;
      transform: translateY(-5px);
      pointer-events: none;
      ${(p) =>
        p.isOpen
          ? css`
              opacity: 1;
              transform: none;
              pointer-events: auto;
            `
          : undefined}
    }
    @media screen and (min-width: 992px) {
          width: 284px;
    }
  }
`;

const Content = styled(Box)`
  min-width: 0;
  flex-grow: 1;
  padding-bottom: 80px;
  @media screen and (max-width: 991px) {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.1s ease, transform 0.3s ease;
  }
  @media screen and (min-width: 992px) {
    padding-left: 284px !important;
  }
`;

export const Documentation = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(
    !/^\/(guides|components|foundations|icons)\/(.*)/.test(location.pathname)
  );

  const isComponentsHome = location.pathname === "/components";
  const showMenuButton = /(\/(guides|components|foundations)\/).*/.test(
    location.pathname
  );

  const componentsByCategory = groupBy(
    componentPaths
      .filter(({ name }) => !/^(OriginThemeProvider)/.test(name))
      .map(({ name, packageName }) => {
        let docs: ComponentDocs;
        try {
          docs = require(`../../../../packages/${packageName}/src/${name}/${name}.docs.tsx`)
            .docs;
        } catch (error) {
          docs = {
            category: "Unknown",
            componentName: name,
            examples: [],
            snippets: [],
          };
        }

        return { name, ...docs };
      }),
    (component) => component.category
  );
  return (
    <ConfigConsumer>
      {({ playroomUrl, sourceUrlPrefix, zeplinUrl }) => (
        <>
          <Header
            isOpen={isMenuOpen}
            paddingY="large"
            paddingX={responsiveGutter}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="full"
          >
            <DocsText baseline={false}>
              <ReactRouterLink to="/">
                <LogoContainer>
                  <Logo width="100%" />
                </LogoContainer>
              </ReactRouterLink>
            </DocsText>
            {showMenuButton && (
              <Hidden above="md">
                <MenuButton
                  open={isMenuOpen}
                  onClick={() => setMenuOpen(!isMenuOpen)}
                />
              </Hidden>
            )}
          </Header>

          <Container
            backgroundColor="white"
            display="flex"
            flexDirection={["column", "row"]}
          >
            <HiddenOnPrint>
              <Menu
                backgroundColor="white"
                isOpen={isMenuOpen}
                position="fixed"
                paddingTop="small"
                paddingBottom="xlarge"
                paddingX={responsiveGutter}
                overflow="auto"
              >
                <Stack space="large">
                  <MenuSectionList
                    title="Tools"
                    items={[
                      {
                        name: "Bitbucket",
                        path: sourceUrlPrefix,
                        external: true,
                        onClick: () => setMenuOpen(isComponentsHome),
                      },
                      {
                        name: "Playroom",
                        path: playroomUrl,
                        external: true,
                        onClick: () => setMenuOpen(isComponentsHome),
                      },
                      {
                        name: "Zeplin style guide",
                        path: zeplinUrl,
                        external: true,
                        onClick: () => setMenuOpen(isComponentsHome),
                      },
                    ]}
                  />

                  <MenuSectionList
                    title="Guides"
                    items={map(guides, (guide, path) => ({
                      name: guide.title,
                      path,
                      external: false,
                      onClick: () => setMenuOpen(false),
                    }))}
                  />

                  <MenuSectionList
                    title="Foundations"
                    items={map(foundations, (guide, path) => ({
                      name: guide.title,
                      path,
                      external: false,
                      onClick: () => setMenuOpen(false),
                    }))}
                  />

                  {["Layout", "Content", "Interaction"].map((category) => (
                    <MenuSectionList
                      key={category}
                      title={`${category} Components`}
                      items={componentsByCategory[category].map(({ name }) => ({
                        name,
                        path: `/components/${name}`,
                        external: false,
                        onClick: () => setMenuOpen(false),
                      }))}
                    />
                  ))}

                  <MenuSectionList
                    title="All Components"
                    items={Object.keys(odsCore)
                      .filter((x) => !/^(Icon|use|OriginThemeProvider)/.test(x))
                      .sort()
                      .map((componentName) => ({
                        name: componentName,
                        path: `/components/${componentName}`,
                        external: false,
                        onClick: () => setMenuOpen(false),
                      }))}
                  />
                </Stack>
              </Menu>
            </HiddenOnPrint>
            <Content>
              <Box paddingY="small" paddingX={responsiveGutter}>
                {map({ ...guides, ...foundations }, ({ Component }, path) => (
                  <Route key={path} path={path} component={Component} />
                ))}

                <Route
                  path="/components/:componentName"
                  render={({ match }) => (
                    <ComponentRoute
                      key={match.params.componentName} // Force remount per page to fix hooks errors when generating code snippets
                      packageName={
                        componentPathsByCategory[match.params.componentName][0]
                          .packageName
                      }
                      subfolder={
                        /^Icon/.test(match.params.componentName)
                          ? "icons"
                          : undefined
                      }
                      componentName={match.params.componentName}
                      sourceUrlPrefix={sourceUrlPrefix}
                      playroomUrl={playroomUrl}
                    />
                  )}
                />
              </Box>
            </Content>
          </Container>
        </>
      )}
    </ConfigConsumer>
  );
};
