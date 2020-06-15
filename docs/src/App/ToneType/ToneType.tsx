import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Stack, Columns, Column, Text } from "@origin-digital/ods-core";
import { Square } from "../Square/Square";

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const ToneType = ({
  tones,
  toneDocs,
}: {
  tones: any[];
  toneDocs: any;
}) => {
  const { palette } = useTheme();
  return (
    <Stack dividers space="small">
      <Columns space="large">
        <Column>
          <Text>Tone</Text>
        </Column>
        <Column>
          <Text>Common use</Text>
        </Column>
      </Columns>
      {tones.map((tone, index) => (
        <Stack space="xxsmall" key={index}>
          <Columns space="large">
            <Column>
              <Columns space="large">
                <Column width="content">
                  <Square backgroundColor={(toneDocs as any)[tone].swatch} />
                </Column>
                <Column>
                  <Stack space="xxsmall">
                    <Text weight="medium">{capitalize(tone)}</Text>
                    <Text variant="caption">
                      {palette.getColorVariantCSSColor(tone)}
                    </Text>
                    <Text> {(toneDocs as any)[tone].description}</Text>
                  </Stack>
                </Column>
              </Columns>
            </Column>
            <Column>
              <Text> {(toneDocs as any)[tone].usage}</Text>
            </Column>
          </Columns>
        </Stack>
      ))}
    </Stack>
  );
};
