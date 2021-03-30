import React from 'react';
import { Modal } from 'react-native';
import { OverlayCloseButton } from './OverlayCloseButton';
import { OverlayTransition } from './OverlayTransition';
import type { IOverlayNewProps } from './types';

export function Overlay(props: IOverlayNewProps) {
  const { isOpen, children, closeOnBlur = true, animationDuration } = props;
  const handleClose = () => {
    props.onClose && props.onClose();
  };

  return (
    <Modal visible={!!isOpen} transparent>
      <OverlayCloseButton onPress={handleClose} disabled={!closeOnBlur} />
      <OverlayTransition animationDuration={animationDuration}>
        {children}
      </OverlayTransition>
    </Modal>
  );
}