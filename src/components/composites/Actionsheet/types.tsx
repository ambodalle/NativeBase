import type { IButtonProps } from '../../primitives/Button';
import type { IBoxProps } from '../../primitives/Box';

export type IActionsheetProps = IBoxProps & {
  isOpen?: boolean;
  onClose?: any;
  disableOverlay?: boolean;
};
export type IActionsheetContentProps = IBoxProps;
export type IActionsheetFooterProps = IBoxProps;
export type IActionsheetHeaderProps = IBoxProps;
export type IActionsheetItemProps = IButtonProps;

export type IActionsheetComponentType = ((
  props: IActionsheetProps & { ref?: any }
) => JSX.Element) & {
  Content: React.MemoExoticComponent<
    (props: IActionsheetContentProps & { ref?: any }) => JSX.Element
  >;
  Item: React.MemoExoticComponent<
    (props: IActionsheetItemProps & { ref?: any }) => JSX.Element
  >;
};