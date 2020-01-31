import React from 'react';
import {Box, Stack, BoxProps} from '@origin-digital/ods-core';
import {Props, Example, Page} from './_private';

export const BoxDocument = () => (
  <Page>
    <Props<BoxProps>
      componentName="Box"
      variant="list"
      title="<Box/>"
      description="Box is our design systems most low-level atomic layout component. If you’re unable to satisfy a design using the built-in set of higher level components, ODS also provides consumers with the Box component that provides direct access to the themed atomic styles that ODS uses internally. A nice side-effect of this approach is that your application will be reusing existing CSS rules rather than generating new ones, keeping your bundle size to a minimum."
      propDescriptions={{}}
    />
    <Stack>
      <Example
        Code={() => <Box padding="xxlarge" backgroundColor="lightOrange" />}
      />
      <Example
        Code={() => (
          <Box
            padding="xxlarge"
            backgroundColor="lightOrange"
            textAlign={['center', 'right']}
          >
            Text
          </Box>
        )}
      />
      <Example Code={() => <Box padding="large" backgroundColor="blue" />} />
      <Example
        Code={() => (
          <Box padding="large" margin="xxlarge" backgroundColor="orange" />
        )}
      />
    </Stack>
  </Page>
);
