'use client';

import classNames from 'classnames';
import { FC, MouseEvent, ReactElement } from 'react';

import styles from './Button.module.scss';

type Size = 's' | 'm' | 'l';

interface IButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  size?: Size;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'outlined' | 'transparent' | 'disabled';
  label?: string;
  children?: ReactElement;
}

const Button: FC<IButtonProps> = props => {
  const {
    onClick,
    className,
    size = 's',
    type = 'button',
    variant = 'default',
    label,
    children,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        styles.button,
        styles[size],
        styles[variant],
        className,
      )}
    >
      {label && label}
      {children}
    </button>
  );
};

export default Button;
