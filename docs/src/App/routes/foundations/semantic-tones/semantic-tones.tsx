import React from "react";
import { Box, BoxProps, Text, TextLink } from "@origin-digital/ods-core";

import { TextStack } from "../../../TextStack/TextStack";
import { DocsPage } from "../../../../types";
import { Page, PageSection } from "../../../Page/Page";
import { AnchorLink } from "../../../AnchorLink/AnchorLink";
import { ToneType } from "../../../ToneType/ToneType";

const semanticTones = [
  "critical",
  "caution",
  "positive",
  "info",
  "neutral",
  "promote",
  "promoteB",
] as const;
type SemanticTone = typeof semanticTones[number];

interface ColourDoc {
  description: string;
  swatch: BoxProps["backgroundColor"];
  usage: string;
}
const semanticToneDocs: Record<SemanticTone, ColourDoc> = {
  critical: {
    description: "Important and can’t proceed",
    swatch: "critical",
    usage: "Unfavourable e.g. overdue",
  },
  caution: {
    description: "Important but can proceed",
    swatch: "caution",
    usage: "",
  },
  positive: {
    description: "Success",
    swatch: "positive",
    usage: "Favourable e.g. credit",
  },
  info: {
    description: "Guidance & advice",
    swatch: "info",
    usage: "",
  },
  neutral: {
    description: "Text and recessed elements",
    swatch: "grey500",
    usage: "Borders, background fill",
  },
  promote: {
    description: "Offers and marketing",
    swatch: "promote",
    usage: "",
  },
  promoteB: {
    description:
      "Offers and marketing. Not in the suite of Origin’s brand guidelines.",
    swatch: "promoteB",
    usage: "",
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

const SemanticTones = () => {
  const sections: PageSection[] = [
    {
      title: "",
      children: (
        <ToneType
          tones={semanticTones as any}
          toneDocs={{ ...semanticToneDocs }}
        />
      ),
    },
  ];
  sections.push(migrationSection);
  return (
    <Page
      hideAnchorLinks
      title="Semantic tones"
      description={
        <TextStack>
          <Text>
            The usage of colour in ODS is designed to have a strong correlation
            with the tone of voice being used. ODS makes available a spectrum of
            tones which are leveraged across the entire component suite.
          </Text>
          <Box display="flex" style={{ flexWrap: "wrap" }}>
            {semanticTones.map((tone) => {
              return (
                <>
                  <Box key={tone} marginRight={["small", "medium"]}>
                    <AnchorLink<SemanticTone>
                      to={`#${tone}`}
                      tone={tone}
                      backgroundColor={semanticToneDocs[tone].swatch}
                    />
                  </Box>
                </>
              );
            })}
          </Box>
        </TextStack>
      }
      sections={sections}
    />
  );
};

const page: DocsPage = {
  title: "Semantic tones",
  component: SemanticTones,
};

export default page;
