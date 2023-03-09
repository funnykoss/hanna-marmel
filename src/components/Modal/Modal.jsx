/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CiCircleRemove } from 'react-icons/ci';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      props.onClose();
    }
  };
  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      props.onClose();
    }
  }

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <CiCircleRemove className={s.icon} onClick={handleBackdropClick} />
        <img className={s.modalImg} src={props.src} alt={props.alt}></img>
      </div>
    </div>,
    modalRoot
  );
}
