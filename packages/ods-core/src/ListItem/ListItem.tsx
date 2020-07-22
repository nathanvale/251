import React, { ReactNode } from "react";
import styled from "styled-components";
import { OptionalTrackableProps } from "@origin-digital/ods-types";
import { Box } from "../Box/Box";
import { FormHelperText } from "../FormHelperText/FormHelperText";
import { Stack } from "../Stack/Stack";

export interface ListItemProps extends OptionalTrackableProps {
  children: ReactNode;
  icon?: ReactNode;
  helperText?: string | ReactNode;
}

export const CounterContainer = styled(Box)``;
export const Counter = styled(Box)``;
export const CounterLabel = styled.span``;

export const ListItem = ({
  children,
  icon,
  helperText,
  "data-id": dataId,
}: ListItemProps) => {
  return (
    <Box display="flex" data-id={dataId}>
      <CounterContainer>
        {icon ? (
          icon
        ) : (
          <Counter display="flex" alignItems="center">
            <CounterLabel />
          </Counter>
        )}
      </CounterContainer>
      {helperText ? (
        <Stack space="xxsmall">
          <Box>{children}</Box>
          {typeof helperText === "string" ? (
            <FormHelperText id="controlHelperText">{helperText}</FormHelperText>
          ) : helperText ? (
            helperText
          ) : null}
        </Stack>
      ) : (
        <Box>{children}</Box>
      )}
    </Box>
  );
};

ListItem.displayName = "ListItem";

ListItem.defaultProps = {
  "data-id": "list-item",
};
