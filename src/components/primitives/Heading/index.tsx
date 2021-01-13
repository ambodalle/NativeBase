import React from 'react';
import { Text } from 'react-native';
import type { Text as TextType } from 'react-native';
import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  position,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
  customPosition,
} from '../../../utils/customProps';
import { usePropsConfig } from '../../../hooks';
import type { IHeadingProps } from './props';

const StyledHeading = styled(Text)<IHeadingProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);

const Heading = ({ isTruncated, ...props }: IHeadingProps, ref: any) => {
  const newProps = usePropsConfig('Heading', props);
  return (
    <StyledHeading
      numberOfLines={isTruncated ? 1 : 999999}
      {...newProps}
      ref={ref}
    />
  );
};

export default React.forwardRef<TextType, IHeadingProps>(Heading);
export type { IHeadingProps };