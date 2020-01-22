import React from 'react';
import lzString from 'lz-string';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {ContentSection} from '@origin-digital/ods-patterns';
import {Stack, Box, Text, Section, Link} from '@origin-digital/ods-core';
import {IconPlay} from '@origin-digital/ods-icons';
import styled from 'styled-components';
import {maxWidth, MaxWidthProps} from 'styled-system';

type Code = () => JSX.Element;
export interface ExampleProps {
  stretch?: boolean;
  space?: TS_FIXME;
  showHeaderFooter?: boolean;
  description?: string;
  noSection?: boolean;
  title?: string;
  Code: Code;
}

interface CreateUrlOptions {
  baseUrl?: string;
  code: string;
}

const createUrl = ({baseUrl, code}: CreateUrlOptions) => {
  const data = JSON.stringify({code});
  const compressedData = lzString.compressToEncodedURIComponent(data);
  const path = `#?code=${compressedData}`;
  if (baseUrl) {
    if (window.location.hostname === 'localhost') {
      baseUrl = 'localhost:9999';
    }
    const trimmedBaseUrl = baseUrl.replace(/\/$/, '');
    return `http://${trimmedBaseUrl}/${path}`;
  }
  return path;
};

const StyledBox = styled(Box)<MaxWidthProps>`
  ${maxWidth}
`;

const getCodeAsString = (Example: ExampleProps['Code']) => {
  const codeAsString = reactElementToJSXString(Example(), {
    useBooleanShorthandSyntax: false,
    showDefaultProps: false,
    showFunctions: false,
    filterProps: ['onChange', 'onBlur', 'onFocus'],
  });

  return codeAsString;
};

export const Example = ({
  title,
  description,
  showHeaderFooter,
  space = 'medium',
  stretch,
  noSection,
  Code: Example,
}: ExampleProps) => (
  <Stack space="none">
    <ContentSection backgroundColor="white">
      <StyledBox maxWidth={[null, null, '75%', '66%']}>
        <Stack space="large">
          {title && (
            <Text color="grey56" weight="medium" size="xsmall">
              {title}
            </Text>
          )}
          {description && <Text color="grey56">{description}</Text>}
          <Box style={{marginBottom: -20}}>
            <Stack space="xxsmall">
              <Box backgroundColor="grey56" paddingY="xlarge" paddingX="medium">
                <Box component="pre">
                  <Text color="grey16" component="code">
                    {getCodeAsString(Example)}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Link
                  target="_blank"
                  component="a"
                  href={createUrl({
                    baseUrl:
                      'docs.origindigital-dac.com.au/designsystem/playroom',
                    code: getCodeAsString(Example),
                  })}
                  Icon={<IconPlay />}
                >
                  Open in Playroom
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </StyledBox>
    </ContentSection>
    <Stack space={space}>
      <Box style={{height: stretch ? '600px' : undefined}}>
        <Box
          height="full"
          display="flex"
          paddingY="xlarge"
          justifyContent="center"
        >
          {noSection ? (
            <Example />
          ) : (
            <Section>
              {
                <StyledBox id="???" maxWidth={[null, null, '75%', '66%']}>
                  <Example />
                </StyledBox>
              }
            </Section>
          )}
        </Box>
      </Box>
    </Stack>
  </Stack>
);
