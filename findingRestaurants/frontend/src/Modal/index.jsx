import React, { useEffect } from 'react';
import Portal from './Portal';
import propTypes from 'prop-types';
import { Overlay, Dialog } from './styles';

const Modal = ({ children, opened, onClose }) => {
  useEffect(() => {
    function onEsq(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }

    window.addEventListener('keydown', onEsq);

    return () => {
      window.removeEventListener('keydown', onEsq);
    };
  }, [onClose]);

  if (!opened) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

Modal.propTypes = {
  children: propTypes.any,
  opened: propTypes.bool.isRequired,
  onClose: propTypes.func,
};

export default Modal;
