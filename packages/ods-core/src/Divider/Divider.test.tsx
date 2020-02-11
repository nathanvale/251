import React from 'react';
import {render} from '@origin-digital/ods-testing-library';
import {Divider} from './Divider';

test('it renders a divider', () => {
  const {container} = render(<Divider />);
  expect(container.firstChild).toMatchSnapshot();
});

test('it renders a divider with custom data-id', () => {
  const {container} = render(<Divider data-id="myId" />);

  expect(container.firstChild).toHaveAttribute('data-id', 'myId');
});
