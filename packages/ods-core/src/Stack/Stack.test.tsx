import React from 'react';
import {render} from '@origin-digital/ods-test-utils';
import {Box} from '../Box/Box';
import {Stack} from './Stack';

test('It can stack', () => {
  const {container} = render(
    <Stack>
      <Box backgroundColor="red" padding="medium" />
      <Box backgroundColor="orange" padding="medium" />
      <Box backgroundColor="blue" padding="medium" />
    </Stack>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('It can distribute space', () => {
  const {container} = render(
    <Stack space="xxlarge">
      <Box backgroundColor="red" padding="medium" />
      <Box backgroundColor="orange" padding="medium" />
      <Box backgroundColor="blue" padding="medium" />
    </Stack>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
