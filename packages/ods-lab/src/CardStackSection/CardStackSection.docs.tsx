/* eslint-disable react/display-name */
import React from "react";
import {Placeholder} from "@origin-digital/ods-core";
import {ComponentDocs} from "../../../../docs/src/types";
import {CardStackSection, CardStackSectionProps} from "..";

export const docs: ComponentDocs<CardStackSectionProps> = {
  category: "Experimental",
  componentName: "CardStackSection",
  migrationGuide: false,
  description:
    "Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum.",
  propDescriptions: {},
  examples: [
    {
      label: "Default Card",
      description:
        "Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum.",
      noSection: true,
      Code: () => (
        <CardStackSection>
          <Placeholder height="300px">Card 1</Placeholder>
          <Placeholder height="300px">Card 2</Placeholder>
        </CardStackSection>
      ),
    },
    {
      label: "Setting Card Size",
      description:
        "Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum.",
      noSection: true,
      Code: () => (
        <CardStackSection size="large">
          <Placeholder height="300px">Card 1</Placeholder>
          <Placeholder height="300px">Card 2</Placeholder>
        </CardStackSection>
      ),
    },
    {
      label: "Widget Card Variant",
      description:
        "Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum.",
      noSection: true,
      Code: () => (
        <CardStackSection variant="widget">
          <Placeholder height="300px">Card 1</Placeholder>
          <Placeholder height="300px">Card 2</Placeholder>
        </CardStackSection>
      ),
    },
    {
      label: "Card Padded Variant",
      description:
        "Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum.",
      noSection: true,
      Code: () => (
        <CardStackSection variant="card-padded">
          <Placeholder height="300px">Card 1</Placeholder>
        </CardStackSection>
      ),
    },
  ],
};
