import React, {ReactNode} from 'react';
import {Color} from 'styled-components';
import { Box } from '../Box/Box';
import { Section } from '../Section/Section';

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
