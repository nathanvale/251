# Contribution Guideline

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Introduction](#introduction)
    -   [Contribution process](#contribution-process)
    -   [Getting Started](#getting-started)
    -   [Developing](#developing)
        -   [Folder structure](#folder-structure)
        -   [Documentation](#documentation)
            -   [How to write docs for a component](#how-to-write-docs-for-a-component)
        -   [Playroom](#playroom)
        -   [Formating](#formating)
        -   [Linting](#linting)
        -   [Typescript](#typescript)
        -   [Testing](#testing)
        -   [Husky and commitlint support](#husky-and-commitlint-support)
        -   [CI support](#ci-support)
        -   [Committing the code](#committing-the-code)
    -   [Submitting a pull request](#submitting-a-pull-request)
        -   [Adding a new component](#adding-a-new-component)
            -   [Bringing a new MUI component to ODS](#bringing-a-new-mui-component-to-ods)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Introduction

If you're reading this, you're awesome!

Contributions are welcome and are greatly appreciated! Every little bit helps,
and credit will always be given. By contributing, you agree to abide by the
[code of conduct](https://bitbucket.orgn.io/projects/OD/repos/origin-ui/browse/CODE_OF_CONDUCT.md).

This is a quick crash course on:

-   What is Origin Design System (ODS)?
-   How does one contribute?
-   Who are the core team?
-   What is the PR process?
-   Tips and tricks when building a new component based on Material UI

Thank you for helping us make ODS great and being a contributor.

As a component library is one of the core assets shared across all the apps and all squads, it is very important
that we have a set of clear rules on how everyone contributes. This is both to limit and reduce technical debt
and to ensure any changes we make do not introduce bugs or adversely affect the look and/or functionality of
production code that relies on the component library.

The subsequent sections are a few guidelines that will help you along the way.

## Contribution process

The contribution could be either a new feature / component or a bug fix. In either case it is important that ODS core team
is on board with the discussion since the inception and approves it to be added.

Broadly speaking, the process is as follows:

1. A new need is identified. This needs to be discussed via the ODS core team via #design-system-support channel on Slack.
2. Once the feature is approved by the core team a JIRA card with appropriate description
   is added to `ODS` project to be prioritised.
3. If it involves adding a new component or changing the API / behaviour of a component, it must be first approved
   by the core team. Usually the core team runs a meeting to discuss the proposed API (or design one if there is no proposals).
   The outcome of the design / discussion is captured in a Wiki page and when the core team approves it, the green
   light is given for the development of the feature to commence.
4. The contributor then picks up a JIRA card from ODS (via consultation with the core team),
   builds, tests the feature/bugfix and raises a PR.
5. **At least 2 members** of the core team must review and approve the PR. It also has to walk through with the designer
   of the core team. Once ready the changes are released.
6. After changes are released, contributor(s) are responsible for supporting any issues related to their changes
   for the following 2 weeks.

## ODS core team

The current team that is the guardian of ODS consists of these people:

-   Alex Mordue
-   Ali Motevallian
-   Bryce Larson
-   Eugen Kozynin
-   Jake Bayer
-   John Sung
-   Nathan Vale

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

-   So you only need to run yarn install once to install all of our packages in a single pass

-   Your dependencies can be linked together, which means that your workspaces can depend on one another while always
    using the most up-to-date code available. This is also a better mechanism than yarn link since it only affects your
    workspace tree rather than your whole system.

-   All your package dependencies will be installed together, giving Yarn more latitude to better optimize them.

-   Yarn will use a single lockfile rather than a different one for each package, which means fewer conflicts and
    easier reviews.

> **Note:** `yarn bootstrap` internally runs `yarn install` before it's bootstrapping so the above `yarn install`
> command only needs to be run once (to install lerna to be able to run `yarn bootstrap` in the first place).

Finally to start developing or to just view the docs:

```
yarn start
```

## Developing

To start developing a component we use our Docs app and Playroom together.
They both support hot reloading, although playroom performs better and supports development in our 5
responsive breakpoints simultaneously.

For the Docs app the component must have a `.doc.tsx` file in its folder containing the documentation of that component.

For Playroom however, one only needs to make sure it is imported in playroom components
(all components exported by `ods-core` are automatically imported into Playroom).

### Folder structure

In this section we briefly explain the folder structure of `ods-core` package. Other packages also follow similar patterns
when it is relevant.

-   We have a flat structure for components exported from `ods-core`. This is to simplify our build and also allows us to keep
    docs next to each component. If a component does not have a folder in the root of `src` folder, its docs won't be generated.
-   There is a `_private` folder for components, helpers or any files that is internal to the package and should not be
    exported.
-   Each component folder consist of at least 3 files:
    -   `Component.tsx`: This is the main file containing the code for the component.
    -   `Component.test.tsx`: Contains unit tests for the component.
    -   `Comonent.docs.tsx`: Contains the documentation for the component. The name of this files must always end with `.docs.tsx`.
-   Any types specific to the component are kept in the component folder.
-   If there are any global types or types that might be share across multiple packages, they should be put in `ods-types` package.
-   Every public components MUST be exported from the root `index.ts` in addition to its `[ComponentName]Props`. This is specially
    necessary for the component to work in Playroom and for its auto-complete to work in there.

### Documentation

To view or edit the docs in a create react app with hot reloading:

```
yarn start
```

This will make the docs app available at [localhost:3000](http://localhost:3000).

Whenever `yarn start` is called a `componentsDocs.json` file is generated in `./docs/src/componentDocs.json`.
This is used to automatically generate prop types tables in the docs based on typescript interfaces for each component.

At anytime while developing docs, `componentDocs.json` can be regenerated and hot reloaded by calling:

```
yarn generate-component-docs
```

Every component is expected to have documentation. So if you are building/modifying a new component always make sure you
add/update the relevant docs as well.

For each PR the docs are also published from the branch. Given the PR branch follows the branch naming convention,
i.e. it starts with a JIRA card number `ODS-XXX`, it will publish its documentation under this pattern:

> `https://docs.origindigital-dac.com.au/designsystem/ODS-XXX/`

For example the documentation for branch `ODS-62-contrib-guideline` will be published under below
URL after the PR is created:

[https://docs.origindigital-dac.com.au/designsystem/ODS-62/]()

#### How to write docs for a component

We heavily use TypeScript to auto-generate as many parts of the docs as possible and also to make sure the docs are kept
sound and consistent.

Each component should have a docs object of type `ComponentDocs<ComponentProps>`. Here is the fields that need to be provided
in the docs object:

-   `category`: It is used to categorise components in the docs navigation. It is typed and you should choose the
    most relevant one.
-   `componentName`: The name of the component to be shown on the docs.
-   `description`: The overall description of the component, should include the overall purpose of the component and things
    to consider when using it.
-   `propDescriptions`: This is a key value object where the key must be the name of one of the component's props. The value
    is the description we would like to show in the Props Table for the component.
-   `migrationGuide`: Is `false` for now. Intended for future use when we migrated components from style-guide to `ods-core`.
-   `examples`: An array of objects each will be a code snippet to explain a specific variation of the component. Here is the
    structure of the objects in the array:
    -   `label`: The label to be shown at the top of the example, much like a heading.
    -   `description`: Detailed explanation of what this example intends to explain.
    -   `Code`: A function, the example code to be shown in the docs. This is not a string, this is actual `jsx` code which
        ensures there is no syntax error in the example.
    -   `codeString`: There are cases that the example needs state and cannot be simply just `jsx`. In such cases use
        `codeString` to present the code properly in the docs.
    -   `playroom`: It is `true` by default, if (for an exceptional reason) you don't want the **Open in Playroom** button
        to be displayed along side your code exmaple, set this flag to `false`.
-   `snippets`: An array of snippet objects each will show in Playroom as an `snippet`. Here is the structure of the object:

    -   `label`: The short description of this snippet, briefly explaning its purpose.
    -   `Code`: Similar to `Code` prop for `examples` and is the snippet that will be added to Playroom code section.

### Playroom

Simultaneously design across a variety of themes and screen sizes, powered by JSX and your own component library.

Playroom allows you to create a zero-install code-oriented design environment, built into a standalone bundle that can
be deployed alongside your existing design system documentation.

-   Iterate on your designs in the final medium.
-   Create quick mock-ups and interactive prototypes with real code.
-   Exercise and evaluate the flexibility of your design system.
-   Share your work with others by simply copying the URL.

To start playroom in a local development server:

```
yarn playroom
```

This will make the Playroom available at [localhost:9999](http://localhost:9999).

Playroom has a faster hot reloading compared to the docs app and hence we recommend you use the Playroom for development
purposes whenever possible. The docs app has to load `componentDocs.json` which makes reloading slower.

To export a new component to Playroom it is enough to re-export it from `playroom/src/playroom-components.tsx`.

### Formating

Given that `origin-ui` is a shared asset it is critical that a consistent code style is enforced. We use prettier to
take care of this.

Formatting your code isn't something you need to think about that much, a pre commit hook is in place to take care of
this for you.

However, at any time you can format the whole monorepo with:

```bash
yarn format
```

> **Note:** A helpful practice is to setup a prettier plugin in your IDE to format your code on file save.

### Linting

`origin-ui` have clear and consistent coding conventions, with automated enforcement. They will help

-   You find bugs and errors before they happen
-   You spend less time testing new features
-   Your code (and your team’s code) be more consistent

Besides checking style, linters are also excellent tools for finding certain classes of bugs, such as those related to
variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly
causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time.

At any time you can lint the whole monorepo with:

`yarn lint`

If your code has a lot of fixable linting errors then you can also run:

`yarn lint --fix`

`origin-ui` leverages `@origin-digital/eslint-config-origin` to enforce default industry recommended eslint rules.
For in depth `eslint-config-origin` documentation please refer to:

https://bitbucket.origin.com.au/projects/OD/repos/eslint-config-origin/browse/README.md

> **Note:** A helpful practice is to setup a eslint plugin in your IDE to identify linting issues as you code.

### Typescript

`origin-ui` uses project references, a new feature in TypeScript 3.0 that allows you to structure your TypeScript
programs into smaller pieces.

https://www.typescriptlang.org/docs/handbook/project-references.html

By doing this, build times are greatly improved. A new mode for tsc, the --build flag, works hand in hand with project
references to enable faster TypeScript builds.

Your IDE should provide the type checking support that you need, however at any time you can type check the whole
monorepo with:

`yarn tsc`

You can also type check in real time with:

`yarn tsc --watch`

### Testing

Every developer is expected to provide comprehensive unit tests that give confidence your code performs the way the
user expects it to.

In most case you will only be interested in running tests on code that you have added or changed. For that reason the
default test command will run tests in watch mode and only on code you have been working on:

```
yarn test
```

If you would like to run tests on all the entire monorepo with code coverage then the following command will do the
job for you:

```
yarn test --coverage
```

Jest has been setup to use a mult-package test runner. This means many projects can run at the same time within a single
instance of jest. This also gives you the benefit of granular control, you can run tests and coverage on just the
packages you want to:

```
yarn test --projects packages/core packages/lab --coverage
```

### Husky and commitlint support

Love them or hate them, pre hook commits are essential when managing a large volume of code. With lengthy build times
involved in validating the health of an entire monorepo it can be argued that a few quick and simple pre commit
scripts, on only code that you have added or changed, can save you hours in the long run.

It is also mandatory to lint commit messages on pre commit hooks. They must follow the conventional commits
specification in order for package publishing to be an automated process.

To be guided through the process of providing a conventional commit please use the following command:

`yarn cz`

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set
of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.
This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

[https://www.conventionalcommits.org/en/v1.0.0-beta.4/](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

### CI support

One single command using origin scripts will validate the health of the entire monorepo.

`yarn validate`

This command will:

-   Build and bundle all packages to a dist folder using rollup (as esm and cjs)
-   Generate type declarations to a dist folder for all bundles
-   Run eslint on all js,ts and tsx files
-   Run jest on all packages along with a complete test coverage report

If at anytime any of these processes fail the process will exit, which is why it is run in CI.

### Committing the code

Once your work is ready to be reviewed, you need to

1. squash the commit
2. the commit should follow our strict convention.

There is multiple ways of squashing your commits, one way is to reset branch head softly.

First, you need to fetch the latest changes and merge them into your branch

```bash
git fetch
git merge origin/master
```

Then commit the changes:

```bash
git commit -m "commit message does not matter at this time"
```

Once done, rest the branch to the head remote master branch:

```bash
git reset --soft origin/master
```

This will remove all your branch commits so far and adds all your changes to staging.

As we follow the semantic versioning (`semantic releasing`) the content of the commit messages
are very important. So, we use `commitizen` to create commits with structured and meaningful comments.

Once you have all your code added to staging run below command (as mentioend earlier):

```bash
yarn cz
```

This will run an interactive commit prompt where you can choose the type of your
commit and add descriptions.

According to SemVer, the commit type `feat` (feature) will cause a minor update and `fix` (bugfix)
will cause the patch number to bump up.

If in the interactive commit you answer yes to **any breaking changes** it will
bump up the major version of the package. So, please be extremely cautious about
your commits.

## Submitting a pull request

When you are submitting a PR please make sure you follow this checklist beforehand:
[PR_CHECKLIST.md](https://bitbucket.orgn.io/projects/OD/repos/origin-react/browse/PR_CHECKLIST.md)

### Adding a new component

As mentioned before your component API should have dirst been discussed and approved by the ODS core team and documented
in Wiki.

We take accessibility (a11y) as a first-class requirement for all components in ODS. Hence, make sure you make yourself familiar
with the requirements of a11y before contributing.

#### Bringing a new Material UI component to ODS

We use MUI under the hood for several components in `ODS`. This allows us to enforce high levels of accessibility support
and flexibility in features.

If you are bringing a new component from MUI to `ODS` notice the following:

-   We build our own API around every Material UI component. This is what we call API design.
-   Every wrapping component should have at least two props:
    -   `data-id`: Our conventional prop that is used for tracking and end to end testing purposes.
    -   `muiProps`: This is a scape hatch that allows the consumer of the component to bypass our API (the wrapper props) and
        directly pass down the props to the underlying MUI component.
-   Keep types DRY: When defining the Props interface of the component, make sure you extend from as many types in
    `ods-types/src/indext.ts` as possible. This allows us to be consistent in props names and types.
    -   For example an input component should extend from `BaseInputProps`
    -   If the component has visual states it should extend `BaseFormStateProps`.
-   Sometimes our components compose a number of Material UI components under the hood. For example, our `Checkbox` consists
    of a `FormControlLabel`, a MUI `Checkbox`, 2 icons and a `ForHelperText` component. In such case:
    -   the `muiProps` must be an object with several entries each corresponding to one of the underlying components.
        For example our Checkbox `muiProps` has `formControlLabelProps, componentProps and formHelperTextProps` entries.
    -   The `data-id`, `id`, `disabled`, `error`, aria-describedby`,`aria-labelledby`and`aria-label` (if needed for a11y) props are properly
        hooked together.
    -   Always wrap and expose the atomic `MUI` counter part as well as the component we intend to have in ODS.
        The naming convention for the wrapper around the atomic MUI component is to use the same name as the ODS component and
        suffix it with `Base`.
        -   For example to build the ODS `Checkbox` (that has a label and a helperText) we created a component called
            `CheckboxBase` which is just a simple wrapper around MUI `Checkbox` component (that does not have label or helperText).

Thank you for contributing!
