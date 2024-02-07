import classNames from 'classnames';
import { createElement, FC } from 'react';

import { ITypographyProps, weightNames } from './types';
import styles from './Typography.module.scss';

const Typography: FC<ITypographyProps> = props => {
  const { className = '', el, fontWeight = 700, children } = props;

  return createElement(
    el,
    {
      className: classNames(
        styles[el],
        styles[weightNames[fontWeight]],
        className,
      ),
    },
    children,
  );
};

export default Typography;
