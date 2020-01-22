import React from 'react';
import * as ReactDOM from 'react-dom';

import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {
  OriginThemeProvider,
  Stack,
  Box,
  Text,
  Link as StyledLink,
} from '@origin-digital/ods-core';
import {ContentSection} from '@origin-digital/ods-patterns';
import {BoxDocument} from './box';
import {SectionDocument} from './section';
import {StackDocument} from './stack';
import {ColumnsDocument} from './columns';
import {ColumnDocument} from './column';
import {ContentSectionDocument} from './content-section';
import {CardStackSectionDocument} from './card-stack-section';
import {DividerDocument} from './divider';
import {PlaceholderDocument} from './placeholder';

ReactDOM.render(
  <OriginThemeProvider gridGutterWidth={32}>
    <Router>
      <Stack space="xsmall">
        <ContentSection backgroundColor="white">
          <Stack space="xxlarge">
            <Text size="xxlarge">Origin Design System</Text>
            <Stack space="large">
              <Text color="grey56" weight="medium" size="xsmall">
                Core Components
              </Text>
              <Box display="flex">
                <Link to="/box">
                  <StyledLink>Box</StyledLink>
                </Link>
                <Link to="/section">
                  <StyledLink>Section</StyledLink>
                </Link>
                <Link to="/stack">
                  <StyledLink>Stack</StyledLink>
                </Link>
                <Link to="/columns">
                  <StyledLink>Columns</StyledLink>
                </Link>
                <Link to="/column">
                  <StyledLink>Column</StyledLink>
                </Link>
                <Link to="/divider">
                  <StyledLink>Divider</StyledLink>
                </Link>
                <Link to="/placeholder">
                  <StyledLink>Placeholder</StyledLink>
                </Link>
              </Box>
              <Text color="grey56" weight="medium" size="xsmall">
                Pattern Components
              </Text>
              <Box>
                <Link to="/content-section">
                  <StyledLink>ContentSection</StyledLink>
                </Link>
                <Link to="/card-stack-section">
                  <StyledLink>CardStackSection</StyledLink>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </ContentSection>
        <Switch>
          <Route path="/card-stack-section">
            <CardStackSectionDocument />
          </Route>
          <Route path="/content-section">
            <ContentSectionDocument />
          </Route>
          <Route path="/box">
            <BoxDocument />
          </Route>
          <Route path="/section">
            <SectionDocument />
          </Route>
          <Route path="/columns">
            <ColumnsDocument />
          </Route>
          <Route path="/column">
            <ColumnDocument />
          </Route>
          <Route path="/stack">
            <StackDocument />
          </Route>
          <Route path="/divider">
            <DividerDocument />
          </Route>
          <Route path="/placeholder">
            <PlaceholderDocument />
          </Route>
          <Route path="/">
            <StackDocument />
          </Route>
        </Switch>
      </Stack>
    </Router>
  </OriginThemeProvider>,
  document.getElementById('root'),
);
