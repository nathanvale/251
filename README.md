<div align="center">
  <h1>Origin Design System</h1>
</div>

<hr />

Thanks to modern component-oriented architectures, the front-end community has been naturally gravitating towards design systems as a way of standardising our respective design languages into reusable components. When done successfully, it suddenly becomes trivial to translate standard designs into code.

The Origin Design System is an implementation of this industry trend.

**Docs**

https://docs.origindigital-dac.com.au/designsystem/#/

**Playroom**

https://docs.origindigital-dac.com.au/designsystem/playroom/

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
- [Support](#support)
- [Using ODS in your own app](#using-ods-in-your-own-app)
- [Contribution Usage](#contribution-usage)
  - [Documentation](#documentation)
  - [Playroom](#playroom)
  - [Formating](#formating)
  - [Linting](#linting)
  - [Typescript](#typescript)
  - [Testing](#testing)
  - [Husky and commitlint support](#husky-and-commitlint-support)
  - [CI support](#ci-support)
- [FAQS](#faqs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

To contribute to this project, first you need to clone the monorepo:

```bash
git clone ssh://git@bitbucket.origin.com.au/od/origin-ui.git
```

> **Note:** Ensure correct node version as per `.nvmrc`. If using `nvm`, run `nvm use`.

Let's get the party started with...

```
yarn install
```

Secondly you need to bootstrap the monorepo

```
yarn bootstrap
```

Why do we do this?

- So you only need to run yarn install once to install all of our packages in a single pass

- Your dependencies can be linked together, which means that your workspaces can depend on one another while always using the most up-to-date code available. This is also a better mechanism than yarn link since it only affects your workspace tree rather than your whole system.

- All your package dependencies will be installed together, giving Yarn more latitude to better optimize them.

- Yarn will use a single lockfile rather than a different one for each package, which means fewer conflicts and easier reviews.

> **Note:** `yarn bootstrap` internally runs `yarn install` before it's bootstrapping so the above `yarn install` command only needs to be run once (to install lerna to be able to run `yarn bootstrap` in the first place).

Finally to start developing or to just view the docs:

```
yarn start
```

## Support

If you have any questions please post a slack message at #design-system-support

## Using ODS in your own app

Install ODS core in your project directory with:

```sh
yarn add @origin-digital/ods-core
```

This package also has a peer dependency on the following:

```sh
// with yarn
yarn add react@^16.9.0
yarn add styled-components@3.4.5
```

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Stack,
  Placeholder,
  OriginThemeProviders,
} from '@origin-digital/ods-core';

function App() {
  return (
    <OriginThemeProvider>
      <Stack>
        <Placeholder backgroundColor="red" />
        <Placeholder backgroundColor="orange" />
        <Placeholder backgroundColor="blue" />
      </Stack>
    </OriginThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

> **Note:** For testing your app with ODS components please refer to the `ods-testing-library` https://bitbucket.origin.com.au/projects/OD/repos/origin-ui/browse/packages/ods-testing-library

## Contribution Usage

### Documentation

To view or edit the docs in a create react app with hot reloading:

```
yarn start
```

Whenever `yarn start` is called a componentsDocs.json file is generated in `./docs/src/componentDocs.json`. This is used to automatically generate prop types tables in the docs based on typescript interfaces for each component.

At anytime while developing docs, `componentDocs.json` can be regenerated and hot reloaded by calling:

```
yarn generate-component-docs
```

### Playroom

Simultaneously design across a variety of themes and screen sizes, powered by JSX and your own component library.

Playroom allows you to create a zero-install code-oriented design environment, built into a standalone bundle that can be deployed alongside your existing design system documentation.

- Iterate on your designs in the final medium.
- Create quick mock-ups and interactive prototypes with real code.
- Exercise and evaluate the flexibility of your design system.
- Share your work with others by simply copying the URL.

To start playroom in a local development server:

```
yarn playroom
```

### Formating

Given that `origin-ui` is a shared asset it is critical that a consistent code style is enforced. We use prettier to take care of this.

Formatting your code isn't something you need to think about that much, a pre commit hook is in place to take care of this for you.

However, at any time you can format the whole monorepo with:

```
yarn format
```

> **Note:** A helpful practice is to setup a prettier plugin in your IDE to format your code on file save.

### Linting

`origin-ui` have clear and consistent coding conventions, with automated enforcement. They will help

- You find bugs and errors before they happen
- You spend less time testing new features
- Your code (and your team’s code) be more consistent

Besides checking style, linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time.

At any time you can lint the whole monorepo with:

`yarn lint`

If your code has a lot of fixable linting errors then you can also run:

`yarn lint --fix`

`origin-ui` leverages `@origin-digital/eslint-config-origin` to enforce default industry recommended eslint rules. For in depth `eslint-config-origin` documentation please refer to:

https://bitbucket.origin.com.au/projects/OD/repos/eslint-config-origin/browse/README.md

> **Note:** A helpful practice is to setup a eslint plugin in your IDE to identify linting issues as you code.

### Typescript

`origin-ui` uses project references, a new feature in TypeScript 3.0 that allows you to structure your TypeScript programs into smaller pieces.

https://www.typescriptlang.org/docs/handbook/project-references.html

By doing this, build times are greatly improved. A new mode for tsc, the --build flag, works hand in hand with project references to enable faster TypeScript builds.

Your IDE should provide the type checking support that you need, however at any time you can type check the whole monorepo with:

`yarn tsc`

You can also type check in real time with:

`yarn tsc --watch`

### Testing

Every developer is expected to provide comprehensive unit tests that give confidence your code performs the way the user expects it to.

In most case you will only be interested in running tests on code that you have added or changed. For that reason the default test command will run tests in watch mode and only on code you have been working on:

```
yarn test
```

If you would like to run tests on all the entire monorepo with code coverage then the following command will do the job for you:

```
yarn test --coverage
```

Jest has been setup to use a mult-package test runner. This means many projects can run at the same time within a single instance of jest. This also gives you the benefit of granular control, you can run tests and coverage on just the packages you want to:

```
yarn test --projects packages/core packages/lab --coverage
```

### Husky and commitlint support

Love them or hate them, pre hook commits are essential when managing a large volume of code. With lengthy build times involved in validating the health of an entire monorepo it can be argued that a few quick and simple pre commit scripts, on only code that you have added or changed, can save you hours in the long run.

It is also mandatory to lint commit messages on pre commit hooks. They must follow the conventional commits specification in order for package publishing to be an automated process.

To be guided through the process of providing a conventional commit please use the following command:

`yarn cz`

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

https://www.conventionalcommits.org/en/v1.0.0-beta.4/

### CI support

One single command using origin scripts will validate the health of the entire monorepo.

`yarn validate`

This command will:

- Build and bundle all packages to a dist folder using rollup (as esm and cjs)
- Generate type declarations to a dist folder for all bundles
- Run eslint on all js,ts and tsx files
- Run jest on all packages along with a complete test coverage report

If at anytime any of these processes fail the process will exit, which is why it is run in CI.

## FAQS

##### Why am I getting the error TS7016: Could not find a declaration file for module '@origin-digital/...'?

The typescript build system uses project references:

https://www.typescriptlang.org/docs/handbook/project-references.html

Please make sure that your package's `@origin-digital/...` dependencies that exist in `origin-ui` have been referenced in their corresponding `tsconfig.json` files:

```
"references": [
  {"path": "../{package}/tsconfig.json"},
]
```
