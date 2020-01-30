<div align="center">
  <h1>origin-ui</h1>
</div>

<hr />

## The problem

We have many libraries at Origin Digital and maintaining their semantic versioning and build systems is a cognitive load on all of us.

## The solution

Employ a software development strategy where code for many projects are stored in the same repository so we can version control a large volume of code and daily changes. `origin-ui` allows us:

- Single lint, build, test and release process.
- Easy to coordinate changes across modules.
- Single place to report issues.
- Easier to setup a development environment.
- Tests across modules are run together which finds bugs that touch multiple modules easier.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Formating](#formating)
  - [Linting](#linting)
  - [Typescript](#typescript)
  - [Testing](#testing)
  - [Husky and commitlint support](#husky-and-commitlint-support)
  - [CI support](#ci-support)
- [FAQS](#faqs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

First, you need to clone the monorepo:

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

## Usage

`origin-ui` leverages `@origin-digital/origin-scripts` to manage it's build system. For in depth `origin-scripts` documentation please refer to:

https://bitbucket.origin.com.au/projects/OD/repos/origin-scripts/browse/README.md

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
yarn test --projects packages/daxi packages/mesh --coverage
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

##### This is dumb! Nobody in open source does this?!?!

Google, Facebook, Microsoft, Uber, Airbnb and Twitter all employ very large monorepos with varying strategies to scale build systems and version control software with a large volume of code and daily changes.

##### Why am I getting the error TS7016: Could not find a declaration file for module '@origin-digital/...'?

The typescript build system uses project references:

https://www.typescriptlang.org/docs/handbook/project-references.html

Please make sure that your package's `@origin-digital/...` dependencies that exist in `origin-ui` have been referenced in their corresponding `tsconfig.json` files:

```
"references": [
  {"path": "../{package}/tsconfig.json"},
]
```
