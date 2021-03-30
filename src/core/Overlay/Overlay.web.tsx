import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useKeyboardDismissable } from '../../hooks';
import ReactDOM from 'react-dom';
import { FocusScope } from '@react-native-aria/focus';
import { OverlayCloseButton } from './OverlayCloseButton';
import type { IOverlayNewProps } from './types';
import { OverlayTransition } from './OverlayTransition';

export function Overlay(props: IOverlayNewProps): any {
  const { isOpen, children, closeOnBlur = true, animationDuration } = props;

  const handleClose = () => {
    props.onClose && props.onClose();
  };

  useKeyboardDismissable({
    enabled: props.isKeyboardDismissable ?? true,
    onClose: props.onClose ? props.onClose : () => {},
  });

  if (!isOpen) {
    return null;
  }

  const Modal = () => (
    <Animated.View style={[StyleSheet.absoluteFill]}>
      <OverlayCloseButton onPress={handleClose} disabled={!closeOnBlur} />
      <FocusScope contain autoFocus restoreFocus>
        <OverlayTransition animationDuration={animationDuration}>
          {children}
        </OverlayTransition>
      </FocusScope>
    </Animated.View>
  );

  return ReactDOM.createPortal(<Modal />, document.body);
}