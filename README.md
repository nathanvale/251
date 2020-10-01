<div align="center">
  <h1>Origin Design System</h1>
</div>

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Introduction](#introduction)
-   [Using ODS in your own app](#using-ods-in-your-own-app)
-   [Documentation](#documentation)
-   [Playroom](#playroom)
-   [Questions](#questions)
-   [Structure of component library](#structure-of-component-library)
    -   [ods-core](#ods-core)
    -   [ods-lab](#ods-lab)
    -   [ods-themes](#ods-themes)
    -   [ods-testing-library](#ods-testing-library)
    -   [ods-types](#ods-types)
    -   [other packages](#other-packages)
-   [Contributing](#contributing)
-   [ODS core team](#ods-core-team)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Thanks to modern component-oriented architectures, the front-end community has been naturally
gravitating towards design systems as a way of standardising our respective design languages
into reusable components.
When done successfully, it suddenly becomes trivial to translate standard designs into code.

The Origin Design System (also known ans **ODS**) is an implementation of this industry trend.

As our design system is based on **Material Design** language, we use [Material UI](https://material-ui.com/)
as the backbone of our ODS components. This gives us several benefits :

-   We benefit from all the effort and support the open source community has put into building those components
-   Time to build new components will massively reduce as the heavy lifting is delegated to MUI components
-   Less code for us means fewer errors and less maintenance
-   As Material UI components are all accessible, we can easily make our complex components accessible

This being said we have our own design language and conventions serving our own needs. Hence, whenever we create
components we still design its API the way it works best for us. The corresponding Material UI components
are only used under the hood to provide the functionality we designed according to our API.

## Using ODS in your own app

Install ODS core in your project directory with:

```sh
yarn add @origin-digital/ods-core
```

Make sure your .npmrc has this flag set:

```.env
registry=https://artifactory.origindigital-dac.com.au/artifactory/api/npm/npm-all
```

This package also has a peer dependency on the following:

```sh
// with yarn
yarn add react@^16.9.0
yarn add styled-components@3.4.5
```

Here is a quick example to get you started, **it's all you need**:

```typescript jsx
import React from "react";
import ReactDOM from "react-dom";
import {
    OriginThemeProvider,
    Section,
    CheckboxGroup,
    Checkbox,
} from "@origin-digital/ods-core";
import { coreMuiTheme } from "@origin-digital/ods-themes";

const App = () => (
    <OriginThemeProvider muiTheme={coreMuiTheme}>
        <Section>
            <Card>
                <CheckboxGroup>
                    <Checkbox
                        id="mlb"
                        label="Melbourne"
                        helperText="Great city"
                    />
                    <Checkbox
                        id="syd"
                        label="Sydney"
                        helperText="Heart of Australia"
                    />
                    <Checkbox id="prt" label="Perth" helperText="Beautiful" />
                </CheckboxGroup>
            </Card>
        </Section>
    </OriginThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#app"));
```

> **Note:** For testing your app with ODS components please refer to the
> [`ods-testing-library` package](https://bitbucket.origin.com.au/projects/OD/repos/origin-ui/browse/packages/ods-testing-library).

## Documentation

The documentation of the design system is published in
[https://docs.origindigital-dac.com.au/designsystem/master/](https://docs.origindigital-dac.com.au/designsystem/master/)

For the API documentation of each component as well as guidelines and examples of how to use the
components from ODS, please visit that link.

## Playroom

Playroom is a tool that helps you build the visuals of your page using the actual components
from ODS. We highly recommend every one (including designers, UX and developers) to start
building their designs via this tool. It will help shorten the feedback loop between design
and development.

The pages built in Playroom could be easily shared via its link. As part of supporting the ODS
(in terms of bug fixes, feature requestst, etc.) the core ODS team expects Playroom links to share
the code for detailed explanations.

You can access the playroom via

[https://docs.origindigital-dac.com.au/designsystem/playroom/](https://docs.origindigital-dac.com.au/designsystem/playroom/).

## Questions

Always check out the [docs](https://docs.origindigital-dac.com.au/designsystem/master/) first.
In addition to that we have the channel #design-system-support on Slack which is dedicated to
provide support by ODS core team. The fastest way to get answer for your question is to use the
Slack channel.

## Structure of component library

This mono-repo (`origin-ui`) contains several packages which all together form the Origin Design System.
Below we will briefly review the most important packages in ODS.

If you have been using one of the packages, please do not forget to checkout its changelog prior to upgrading.

### ods-core

This is the core and the most important package which contains all the atomic (core) components
our design system includes. As we progress, we add more and more components to this package. These components are
assumed to be production ready and their API are derived after thorough discussions.
This package has several benefits over our old style-guide:

-   It is fully accessible: We take accessibility serious in building any components for ODS.
    Due to regulations we must be AA compliant regarding accessibility.
-   The terminology and the API is consistent: Contrary to the style-guide where every body could
    design and contribute a component (i.e. distributed design and ownership) and that would often
    lead to inconsistent API (e.g. props with similar roles had different names in different components),
    in ODS only components could be contributed via PR which have already had their API discussed
    and approved by the ODS core team. We capture, compare and improve API of all components
    holistically to make sure the consistency is always provided.

This package should export almost everything you need to get your app running, Layout components,
Typography components, core interactive (input) components, etc.

The changelog is available at this [CHANGELOG.md](https://bitbucket.origin.com.au/projects/OD/repos/origin-ui/browse/packages/ods-core/CHANGELOG.md).

### ods-lab

This is an experimental package where we start building and experimenting new components in.
You can still use components that are exported from this package, but they are not assumed
production ready and their API might change at any time.
For most cases once a components reaches a stable (production ready) state, we move it from
`ods-lab` to either `ods-core` or other production ready packages.

### ods-themes

Our new design system is now built with theming as a first class citizen. This allows us to
flexibly change the look and feel in the apps while avoiding inconsistent custom CSS implemenetations.

This package is low-level and unless you need to access theme definitions or specific themes
directly, you sould not need to use this package.
For accessing the `ThemeProvider` please import it from `@origin-digital/ods-core`.

### ods-testing-library

This is a simple package containing some utilities for unit testing your app. The main feature
you get from this package is a `render` function which provide our default `theme` under the hood
so that you do not repeat the `OriginThemeProvider` in every test.
It also re-exports all the utilities you need to use from `@testing-library/react`.
If you need `@testing-library/dom` you still have to install it in your app manually as it is not
provided by `ods-testing-library`.

### ods-types

Everything in ODS is built via TypeScript, as as result all the public types are provided
via this package.

### other packages

There are still other packages that are either experimental or for internal use in ODS.

## Contributing

If you would like to makes changes to any code in this repo please read
[CONTRIBUTING.md](https://bitbucket.origin.com.au/projects/OD/repos/origin-ui/browse/CONTRIBUTING.md).

## ODS core team

The current team that is the guardian of ODS consists of these people:

-   Alex Mordue
-   Ali Motevallian
-   Bryce Larson
-   Eugen Kozynin
-   Jake Bayer
-   John Sung
-   Nathan Vale
