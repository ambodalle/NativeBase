import type {
  BorderProps,
  ColorProps,
  BackgroundProps,
  OutlineProps,
  ExtraProps,
  PlatformProps,
  ShadowProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from '../../types';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];

export interface ITextProps
  extends ColorProps,
    SpaceProps,
    BorderProps,
    BackgroundProps,
    PositionProps,
    PositionProps,
    LayoutProps,
    OutlineProps,
    ExtraProps,
    PlatformProps,
    ShadowProps,
    FlexboxProps,
    TypographyProps {
  /**
   *  Renders components as Text children. Accepts a JSX.Element or an array of JSX.Element.
   */
  children?: React.ReactNode | string;
  /**
   * The size of font
   */
  fontSize?:
    | typeof sizes[number]
    | number
    | Array<number>
    | Array<string>
    | Record<string, string>;
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: number;
  /**
   * For inline Style
   */
  style?: any;
  /**
   * Make the text bold.
   */
  bold?: boolean;
  /**
   * If true, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set.
   */
  isTruncated?: boolean;
  /**
   * Make the text italic.
   */
  italic?: boolean;
  /**
   * Underline the text.
   */
  underline?: boolean;
  /**
   * A horizontal line through its center.
   */
  strikeThrough?: boolean;
  /**
   * Text will have smaller font size.
   */
  sub?: boolean;
  /**
   * Highlight the text with a yellow background.
   */
  highlight?: boolean;
}