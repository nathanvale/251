import React from "react";
import {
  Box,
  BoxProps,
  Text,
  Columns,
  Column,
  Stack,
  TextLinkRenderer,
  TextLink,
} from "@origin-digital/ods-core";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { width, WidthProps } from "styled-system";
import { HashLink as Link } from "react-router-hash-link";
import { TextStack } from "../../../TextStack/TextStack";
import { DocsPage } from "../../../../types";
import { Page, PageSection } from "../../../Page/Page";

const semanticTones = [
  "critical",
  "caution",
  "positive",
  "info",
  "neutral",
] as const;
type SemanticTone = typeof semanticTones[number];

const brandTones = [
  "primary",
  "primaryB",
  "secondary",
  "secondaryB",
  "promote",
  "promoteB",
] as const;

type BrandTone = typeof brandTones[number];

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
};

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

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const AnchorLink = ({
  backgroundColor,
  tone,
  to,
}: {
  backgroundColor: BoxProps["backgroundColor"];
  tone: SemanticTone | BrandTone;
  to: string;
}) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
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
                sm: "50px",
                md: "50px",
                lg: "80px",
                xl: "80px",
              }}
            />

            {isLgUp ? <Box textAlign="center">{tone}</Box> : null}
          </Stack>
        </Link>
      )}
    </TextLinkRenderer>
  );
};

const Square = styled(Box)`
  border-radius: 3px;
  width: 24px;
  height: 24px;
`;

const Rectangle = styled<any>(Box)<WidthProps>`
  width: 50px;
  ${width}
  border-radius: 3px;
  height: 50px;
`;

const ToneType = ({ tones }: { tones: any[] }) => {
  const toneDocs = { ...semanticToneDocs, ...brandToneDocs };
  const theme = useTheme();
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
                      {tone === "neutral"
                        ? theme.colors["grey500"]
                        : theme.colors[tone]}
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

const Tones = () => {
  const sections: PageSection[] = [
    { title: "Brand tones", children: <ToneType tones={brandTones as any} /> },
    {
      title: "Semantic tones",
      children: <ToneType tones={semanticTones as any} />,
    },
  ];
  sections.push(migrationSection);
  return (
    <Page
      hideAnchorLinks
      title="Tones"
      description={
        <TextStack>
          <Text>Tones are derived from Origin’s brand guidelines.</Text>
          <Box display="flex" style={{ flexWrap: "wrap" }}>
            {brandTones.map((tone) => {
              return (
                <>
                  <Box key={tone} marginRight={["small", "medium"]}>
                    <AnchorLink
                      to={`#${tone}`}
                      tone={tone}
                      backgroundColor={brandToneDocs[tone].swatch}
                    />
                  </Box>
                </>
              );
            })}
          </Box>
          <Text>Tones are also used semantically.</Text>
          <Box display="flex" style={{ flexWrap: "wrap" }}>
            {semanticTones.map((tone) => {
              return (
                <>
                  <Box key={tone} marginRight={["small", "medium"]}>
                    <AnchorLink
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
  title: "Tones",
  component: Tones,
};

export default page;
