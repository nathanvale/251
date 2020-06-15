import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { HashLink as Link } from "react-router-hash-link";
import { useTheme } from "@material-ui/core/styles";
import {
  TextLinkRenderer,
  BoxProps,
  Box,
  Stack,
  Text,
} from "@origin-digital/ods-core";
import { Rectangle } from "../Rectangle/Rectangle";

export function AnchorLink<SemanticTone>({
  backgroundColor,
  tone,
  to,
}: {
  backgroundColor: BoxProps["backgroundColor"];
  tone: SemanticTone;
  to: string;
}) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
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
            <Stack space={["none", "xxsmall"]}>
              <Rectangle
                backgroundColor={backgroundColor}
                width={{
                  sm: "44px",
                  md: "44px",
                  lg: "70px",
                  xl: "80px",
                }}
              />

              {isLgUp ? <Box textAlign="center">{tone}</Box> : null}
            </Stack>
          </Link>
        )}
      </TextLinkRenderer>
    </Text>
  );
}
