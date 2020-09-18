import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { Placeholder } from "../Placeholder";
import { Card } from "../Card";
import {
  CardStackSection,
  CardStackSectionProps,
} from "../CardStackSection/CardStackSection";

export const docs: ComponentDocs<CardStackSectionProps> = {
  category: "Layout",
  componentName: "CardStackSection",
  migrationGuide: false,
  description:
    "CardStackSection is a versatile vertical card stacking component that manages responsive max-widths, distributed space and paddingY. This component should be at your root and not be nested.",
  propDescriptions: {
    variant:
      "Default for majority of cases, widget for dashboards, card-centered for standalone cards in beskpoke flows e.g. onboarding.",
    cardWidth: `Card max-width at various breakpoints with the exception of "xs" of which has a width of "100%".`,
    paddingY: `Padding size at the top and bottom of the card stack. This prop only works with the "default" variant.`,
  },
  examples: {
    default: {
      noCard: true,
      Code: () => (
        <CardStackSection>
          <Card>
            <Placeholder />
          </Card>
          <Card>
            <Placeholder />
          </Card>
        </CardStackSection>
      ),
    },
    additional: [
      {
        label: "Setting the Card Width",
        noCard: true,
        Code: () => (
          <CardStackSection cardWidth="medium">
            <Card>
              <Placeholder />
            </Card>
            <Card>
              <Placeholder />
            </Card>
          </CardStackSection>
        ),
      },
      {
        label: "Widget Card Variant",
        noCard: true,
        Code: () => (
          <CardStackSection variant="widget">
            <Card>
              <Placeholder />
            </Card>
            <Card>
              <Placeholder />
            </Card>
          </CardStackSection>
        ),
      },
      {
        label: "Card Centered Variant",
        description: `Card centered stacks are for standalone cards in beskpoke flows e.g. onboarding. Cards are vertically centered at "md" and above. A good used case is when displaying a login form.`,
        noCard: true,
        Code: () => (
          <CardStackSection variant="card-centered">
            <Card>
              <Placeholder />
            </Card>
          </CardStackSection>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => (
        <CardStackSection>
          <Card>
            <Placeholder />
          </Card>
          <Card>
            <Placeholder />
          </Card>
        </CardStackSection>
      ),
    },
    {
      label: "Default",
      Code: () => (
        <CardStackSection>
          <Card>
            <Placeholder />
          </Card>
          <Card>
            <Placeholder />
          </Card>
        </CardStackSection>
      ),
    },
    {
      label: "Widget",
      Code: () => (
        <CardStackSection variant="widget">
          <Card>
            <Placeholder />
          </Card>
          <Card>
            <Placeholder />
          </Card>
        </CardStackSection>
      ),
    },
    {
      label: "Card Centered",
      Code: () => (
        <CardStackSection variant="card-centered">
          <Card>
            <Placeholder />
          </Card>
        </CardStackSection>
      ),
    },
  ],
};
