import React from "react";
import { Box, BoxProps, Stack, Text, TextLink } from "@origin-digital/ods-core";
import { DocsPage } from "../../../../types";
import { Page, PageSection } from "../../../Page/Page";
import { AnchorLink } from "../../../AnchorLink/AnchorLink";
import { ToneType } from "../../../ToneType/ToneType";

const brandTones = ["primary", "primaryB", "secondary", "secondaryB"] as const;

type BrandTone = typeof brandTones[number];

interface ColourDoc {
  description: string;
  swatch: BoxProps["backgroundColor"];
  usage: string;
}

const brandToneDocs: Record<BrandTone, ColourDoc> = {
  primary: {
    description: "AA compliant alternative to PrimaryB",
    swatch: "primary",
    usage: "Actions, Interactive elements",
  },
  primaryB: {
    description:
      "Main brand colour outside of digital. Not AA compliant with small text.",
    swatch: "primaryB",
    usage: "Background fill, Data visualisation",
  },
  secondary: {
    description: "Accent tone to support Primary",
    swatch: "secondary",
    usage: "",
  },
  secondaryB: {
    description: "Recessed tone to support Primary",
    swatch: "secondaryB",
    usage: "Recessed actions, icons and data visualisation",
  },
};

const migrationSection: PageSection = {
  title: "Mapping legacy colours",
  children: (
    <Text>
      If you are used to working with colours in a certain way, in our legacy
      component library, then please refer to the colour mapping guide in{" "}
      <TextLink href="https://app.zeplin.io/project/5bd63fe92a346c09fa382ecf/screen/5e7423961f0f53012d12f03d">
        zeplin
      </TextLink>
      .
    </Text>
  ),
};

const BrandColours = () => {
  const sections: PageSection[] = [
    {
      title: "",
      children: (
        <ToneType tones={brandTones as any} toneDocs={{ ...brandToneDocs }} />
      ),
    },
  ];
  sections.push(migrationSection);
  return (
    <Page
      hideAnchorLinks
      title="Brand colours"
      description={
        <Stack>
          <Text>
            Primary and secondary brand colours are derived from the theme.
          </Text>
          <Box display="flex" style={{ flexWrap: "wrap" }}>
            {brandTones.map((tone) => {
              return (
                <>
                  <Box key={tone} marginRight={["small", "medium"]}>
                    <AnchorLink<BrandTone>
                      to={`#${tone}`}
                      tone={tone}
                      backgroundColor={brandToneDocs[tone].swatch}
                    />
                  </Box>
                </>
              );
            })}
          </Box>
        </Stack>
      }
      sections={sections}
    />
  );
};

const page: DocsPage = {
  title: "Brand colours",
  component: BrandColours,
};

export default page;
