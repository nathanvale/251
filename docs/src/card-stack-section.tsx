import React from 'react';
import {Placeholder} from '@origin-digital/ods-core';
import {
  CardStackSection,
  CardStackSectionProps,
} from '@origin-digital/ods-patterns';
import {Props, Example, Page} from './_private';

export const CardStackSectionDocument = () => (
  <Page>
    <Props<CardStackSectionProps>
      componentName="CardStackSection"
      title="<CardStackSection/>"
      description="Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum."
      propDescriptions={{}}
    />
    <Example
      title="Default Card"
      description="Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum."
      noSection
      Code={() => (
        <CardStackSection>
          <Placeholder height="300px">Card 1</Placeholder>
          <Placeholder height="300px">Card 2</Placeholder>
        </CardStackSection>
      )}
    />
    <Example
      title="Setting Card Size"
      description="Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum."
      noSection
      Code={() => (
        <CardStackSection size="large">
          <Placeholder height="300px">Card 1</Placeholder>
          <Placeholder height="300px">Card 2</Placeholder>
        </CardStackSection>
      )}
    />
    <Example
      title="Widget Card Variant"
      description="Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum."
      noSection
      Code={() => (
        <CardStackSection variant="widget">
          <Placeholder height="300px">Card 1</Placeholder>
          <Placeholder height="300px">Card 2</Placeholder>
        </CardStackSection>
      )}
    />
    <Example
      title="Card Padded Variant"
      description="Lorem ipsum dolor sit amet, facer postulant nam te, id ridens graeci nam, vel omnium epicuri forensibus ut. No per amet iusto, commodo oblique te vis, fabulas fastidii nam at. Id vix ludus perfecto mandamus, minim virtute nostrum mei ea. Adipiscing contentiones at qui, malis quodsi quaerendum eu nec. Mei an graece lucilius pertinacia, sed justo recteque id. Nam eu graeci accumsan pericula, facer intellegat intellegam ei his, ad nam dicant deterruisset. Cu vis vide essent bonorum."
      noSection
      Code={() => (
        <CardStackSection variant="card-padded">
          <Placeholder height="300px">Card 1</Placeholder>
        </CardStackSection>
      )}
    />
  </Page>
);
