import React from "react";
import { Column, Box, Columns, Stack } from "@origin-digital/ods-core";
import { Text } from "@origin-digital/ods-lab";
import { coreMuiTheme } from "@origin-digital/ods-themes";

import styled from "styled-components";

interface RowProps {
  color: string;
  variation: string;
}

export interface SwatchProps {
  "data-id"?: string;
  color: string;
}

const StyledBox = styled(Box)<SwatchProps>`
  height: 48px;
  width: 48px;
  background-color: ${p => p.color};
`;

export const Swatch = ({
  "data-id": dataId = "Swatch",
  color,
}: SwatchProps) => <StyledBox data-id={dataId} color={color} />;

const Row = ({ color, variation }: RowProps) => (
  <Columns alignY="center" space="xsmall">
    <Column width="content">
      <Swatch color={color} />
    </Column>
    <Column width="content">
      <Stack space="xsmall">
        <Text weight="medium">{variation}</Text>
        <Text>{color}</Text>
      </Stack>
    </Column>
  </Columns>
);

export const Palette = () => {
  const colorLabels = [
    "critical",
    "secondaryB",
    "grey",
    "background",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "error",
    "caution",
    "positive",
    "primaryB",
    "promote",
    "promoteB",
  ];

  const palette = coreMuiTheme.palette as any;
  return (
    <>
      <Columns space="large">
        {colorLabels.map((tone, index) => {
          const colors = palette[tone];
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Column key={index} width="content">
              <Stack space="xxlarge">
                <Stack space="large">
                  <Text weight="medium" size="xsmall">
                    {tone}
                  </Text>
                  <Text>{colors["main"]}</Text>
                  <Swatch color={colors["main"]} />
                </Stack>
                <Stack space="large">
                  <Box>
                    {Object.keys(colors).map((color, index) => (
                      <Row
                        key={index}
                        color={colors[color]}
                        variation={color}
                      />
                    ))}
                  </Box>
                </Stack>
              </Stack>
            </Column>
          );
        })}
      </Columns>
    </>
  );
};

Palette.displayName = "Palette";
Palette.defaultProps = {
  "data-id": "palette",
};
