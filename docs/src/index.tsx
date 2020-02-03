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

import {ContentSection} from '@origin-digital/ods-lab';

import {DebugProvider} from '@origin-digital/ods-devtools';

import {BoxDocument} from './Box';
import {SectionDocument} from './Section';
import {StackDocument} from './Stack';
import {CheckboxDocument} from './Checkbox';
import {ColumnsDocument} from './Columns';
import {ColumnDocument} from './Column';
import {ContentSectionDocument} from './ContentSection';
import {CardStackSectionDocument} from './CardStackSection';
import {DividerDocument} from './Divider';
import {PlaceholderDocument} from './Placeholder';

ReactDOM.render(
  <OriginThemeProvider>
    <DebugProvider>
      <Router>
        <Stack space="xsmall">
          <ContentSection backgroundColor="white">
            <Stack space="xxlarge">
              <Text size="xxlarge">Origin Design System</Text>
              <Stack space="large">
                <Text color="grey56" weight="medium" size="xsmall">
                  Components
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
                  Experimental Components
                </Text>
                <Box>
                  <Link to="/card-stack-section">
                    <StyledLink>CardStackSection</StyledLink>
                  </Link>
                  <Link to="/content-section">
                    <StyledLink>ContentSection</StyledLink>
                  </Link>
                  <Link to="/checkbox">
                    <StyledLink>Checkbox</StyledLink>
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </ContentSection>
          <Switch>
            <Route path="/checkbox">
              <CheckboxDocument />
            </Route>
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
    </DebugProvider>
  </OriginThemeProvider>,
  document.getElementById('root'),
);
