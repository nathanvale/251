# @origin-digital/ods-testing-library

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Why do I need this package?](#why-do-i-need-this-package)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

This package enhances the render function of `react-testing-library` so that the `<OriginThemeProvider/>` is wrapped around your rendered component.

All other API features of `react-testing-library` are also included.

## Installation

Install the package in your project directory with:

```sh
yarn add @origin-digital/ods-testing-library
```

This package also has a peer dependency on the following:

```sh
// with yarn
yarn add @origin-digital/ods-core
yarn add -D @testing-library/react
yarn add -D jest-styled-components
```

## Why do I need this package?

**The problem**

When using react-testing-library and ODS with the jest testing framework it is necessary to wrap **all** your components in our `<OriginThemeProvider/>` - otherwise the react component cannot be rendered and tested.

**The solution**

`@origin-digital/ods-testing-library` creates a wrapper around the `react-testing-library` render function. It is here that we wrap the `<OriginThemeProvider/>`. All other API features of `react-testing-library` are also included.

This practice is recommended by the `react-testing-library` documentation itself...

https://testing-library.com/docs/native-testing-library/setup#custom-render

The origin-ui dogfoods this package itself but it can also be used in your own app to test by adding to your jest config:

```
{
...,
setupFilesAfterEnv: [@origin-digital/ods-testing-library/jest-setup],
...
}
```

and usage in your tests:

```
import React from 'react';
import {render} from '@origin-digital/ods-testing-library';
import {Box} from '../Box/Box';
import {Stack} from './Stack';

test('It can stack', () => {
  const {container} = render(
    <Stack>
      <Box backgroundColor="red" padding="medium" />
      <Box backgroundColor="secondary" padding="medium" />
      <Box backgroundColor="informational" padding="medium" />
    </Stack>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
```
