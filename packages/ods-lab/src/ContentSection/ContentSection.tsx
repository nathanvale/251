import React, {ReactNode} from 'react';
import {Color} from '@origin-digital/ods-themes';
import {Box, Section} from '@origin-digital/ods-core';

export interface ContentSectionProps {
  children?: ReactNode;
  'data-id'?: string;
  backgroundColor?: keyof Pick<Color, 'white' | 'grey' | 'transparent'>;
}

export const ContentSection = ({
  children,
  backgroundColor,
  'data-id': dataId,
}: ContentSectionProps) => (
  <Box
    width="full"
    data-id={dataId}
    backgroundColor={backgroundColor}
    paddingY={['xlarge', 'xxlarge']}
  >
    <Section>{children}</Section>
  </Box>
);

ContentSection.defaultProps = {
  'data-id': 'content-section',
  backgroundColor: 'transparent',
};

ContentSection.displayName = 'ContentSection';
