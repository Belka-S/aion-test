'use client';

import classNames from 'classnames';
import { FC, KeyboardEvent, MouseEvent, ReactNode, useEffect } from 'react';

import s from './Modal.module.scss';
declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent<Document>;
  }
}

interface IModalProps {
  className?: string;
  setIsModal: (isModal: boolean) => void;
  background?: 'default' | 'transparent';
  blur?: 'none';
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({
  className,
  setIsModal,
  background = 'default',
  blur,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent<Document>) => {
      if ((e as KeyboardEvent<Document>).key === 'Escape') setIsModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsModal]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    e.target === e.currentTarget && setIsModal(false);
  };

  return (
    <div
      className={classNames(
        s.backdrop,
        background && s[background],
        blur && s[`blur__${blur}`],
      )}
      onClick={handleBackdropClick}
    >
      <div className={classNames(s.modal, className)}>{children}</div>
    </div>
  );
};

export default Modal;
