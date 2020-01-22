import React, {ReactNode} from 'react';
import styled, {Breakpoint} from 'styled-components';
import {Box, Section, Columns, Column, Stack} from '@origin-digital/ods-core';
import {marginTop, marginBottom} from 'styled-system';

type CardStackSectionVariant = 'widget' | 'card' | 'card-padded';
type CardStackSize = 'small' | 'medium' | 'large';

export interface CardStackSectionProps {
  children: ReactNode;
  'data-id'?: string;
  variant?: CardStackSectionVariant;
  size?: CardStackSize;
}

const defaultSize = 'small';

const cardSizeForVariant: Record<
  CardStackSize,
  Record<keyof Breakpoint, TS_FIXME[]>
> = {
  small: {
    xs: [undefined, '12/12', undefined],
    sm: [undefined, '12/12', undefined],
    md: [undefined, '2/3', undefined],
    lg: [undefined, '1/2', undefined],
    xl: [undefined, '1/2', undefined],
  },
  medium: {
    xs: [undefined, '12/12', undefined],
    sm: [undefined, '12/12', undefined],
    md: [undefined, '5/6', undefined],
    lg: [undefined, '2/3', undefined],
    xl: [undefined, '2/3', undefined],
  },
  large: {
    xs: [undefined, '12/12', undefined],
    sm: [undefined, '12/12', undefined],
    md: [undefined, '5/6', undefined],
    lg: [undefined, '5/6', undefined],
    xl: [undefined, '5/6', undefined],
  },
};

const StyledBox = styled(Box)`
  ${marginTop}
  ${marginBottom}
`;

const ResponsiveGrid = ({
  hideGutter,
  children,
  size = defaultSize,
}: {
  size: CardStackSize;
  hideGutter?: boolean;
  children: ReactNode;
}) => (
  <>
    <Box display={{xs: 'flex', sm: 'none'}} width="full">
      <Section fluidity="full-width" hideGutter={hideGutter}>
        <Columns>
          <Column>{children}</Column>
        </Columns>
      </Section>
    </Box>
    <Box display={{xs: 'none', sm: 'flex', md: 'none'}} width="full">
      <Section fluidity="full-width">
        <Columns>
          <Column>{children}</Column>
        </Columns>
      </Section>
    </Box>
    <Box
      display={{xs: 'none', sm: 'none', md: 'flex', lg: 'none'}}
      width="full"
    >
      <Section>
        <Columns>
          <Column width={cardSizeForVariant[size].md[0]}>&nbsp;</Column>
          <Column width={cardSizeForVariant[size].md[1]}>{children}</Column>
          <Column width={cardSizeForVariant[size].md[2]}>&nbsp;</Column>
        </Columns>
      </Section>
    </Box>
    <Box
      display={{xs: 'none', sm: 'none', md: 'none', lg: 'flex'}}
      width="full"
    >
      <Section>
        <Columns>
          <Column width={cardSizeForVariant[size].lg[0]}>&nbsp;</Column>
          <Column width={cardSizeForVariant[size].lg[1]}>{children}</Column>
          <Column width={cardSizeForVariant[size].lg[2]}>&nbsp;</Column>
        </Columns>
      </Section>
    </Box>
  </>
);

const CardPaddedSection = ({
  children,
  'data-id': dataId,
  size = defaultSize,
}: CardStackSectionProps) => (
  <Box
    display="flex"
    data-id={dataId}
    flexDirection="column"
    paddingY={{xs: 'xsmall', sm: 'xsmall'}}
    justifyContent={{md: 'center'}}
    height="full"
    width="full"
  >
    <ResponsiveGrid size={size} hideGutter>
      {children}
    </ResponsiveGrid>
  </Box>
);

const WidgetSection = ({
  children,
  'data-id': dataId,
  size = defaultSize,
}: CardStackSectionProps) => (
  <Box width="full" data-id={dataId}>
    <Box
      display={{lg: 'none'}}
      style={{height: '120px'}}
      width="full"
      backgroundColor="orange"
    />
    <StyledBox
      display="flex"
      width="full"
      marginTop={
        {xs: '-88px', sm: '-88px', md: '-88px', lg: '48px'} as TS_FIXME
      }
      marginBottom={
        {xs: '32px', sm: '32px', md: '32px', lg: '48px'} as TS_FIXME
      }
    >
      <ResponsiveGrid size={size}>
        <Stack
          space={{
            xs: 'large',
            sm: 'large',
            md: 'large',
            lg: 'xlarge',
          }}
        >
          {children}
        </Stack>
      </ResponsiveGrid>
    </StyledBox>
  </Box>
);

const CardSection = ({
  children,
  'data-id': dataId,
  size = defaultSize,
}: CardStackSectionProps) => (
  <Box data-id={dataId} paddingY={['xsmall', 'xxlarge']} width="full">
    <ResponsiveGrid size={size} hideGutter>
      <Stack
        space={{
          xs: defaultSize,
          sm: defaultSize,
          md: defaultSize,
          lg: 'xlarge',
          xl: 'xxlarge',
        }}
      >
        {children}
      </Stack>
    </ResponsiveGrid>
  </Box>
);

export const CardStackSection = ({
  children,
  'data-id': dataId,
  variant = 'card',
  size = defaultSize,
}: CardStackSectionProps) => {
  if (variant === 'widget') {
    return (
      <WidgetSection data-id={dataId} size={size}>
        {children}
      </WidgetSection>
    );
  } else if (variant === 'card-padded') {
    return (
      <CardPaddedSection data-id={dataId} size={size}>
        {children}
      </CardPaddedSection>
    );
  } else {
    return (
      <CardSection data-id={dataId} size={size}>
        {children}
      </CardSection>
    );
  }
};

CardStackSection.defaultProps = {
  'data-id': 'card-stack-section',
  variant: 'card',
  size: defaultSize,
};

CardStackSection.displayName = 'CardStackSection';
