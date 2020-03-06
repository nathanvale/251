import React, { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box } from "@origin-digital/ods-core";
import { Text } from "@origin-digital/ods-lab";
import { Button } from "@origin-digital/style-guide";
import styled from "styled-components";
import { ConfigConsumer } from "../../shared/ConfigContext/ConfigContext";
import { Logo } from "../../shared/Logo/Logo";

const Action = ({ children }: { children: ReactNode }) => (
  <Box
    display="flex"
    width="full"
    marginX={["none", "xxsmall"]}
    paddingBottom={["xsmall", "none"]}
  >
    {children}
  </Box>
);

const Content = styled(Box)`
  height: 100vh;
`;

const Container = styled(Box)`
  height: 320px;
  ${Content} & {
    max-width: 380px;
  }
`;

const ActionsContainer = styled(Box)`
  ${Content} & {
    max-width: 450px;
  }
`;

export const Home = () => {
  return (
    <ConfigConsumer>
      {({ playroomUrl }) => (
        <Fragment>
          <Content
            display="flex"
            backgroundColor="white"
            flexDirection="column"
            paddingX="small"
            alignItems="center"
            justifyContent="center"
          >
            <Container width="full">
              <Logo width="100%" />
            </Container>

            <ActionsContainer
              width="full"
              paddingBottom={["xxxlarge", "xxlarge"]}
            >
              <Text color="grey56" weight="medium" size="medium">
                <Box
                  component="span"
                  display="flex"
                  justifyContent="center"
                  style={{ flexWrap: "wrap" }}
                >
                  <span style={{ whiteSpace: "nowrap" }}>
                    Origin Design System
                  </span>
                </Box>
              </Text>
            </ActionsContainer>

            <ActionsContainer width="full" display={["block", "flex"]}>
              <Action>
                <Link
                  to="/components"
                  tabIndex={-1}
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <Button
                    kind="secondary"
                    text="Documentation"
                    block
                    color="grey"
                  />
                </Link>
              </Action>
              <Action>
                <a
                  href={playroomUrl}
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <Button kind="secondary" text="Playroom" block color="grey" />
                </a>
              </Action>
            </ActionsContainer>
          </Content>
        </Fragment>
      )}
    </ConfigConsumer>
  );
};
