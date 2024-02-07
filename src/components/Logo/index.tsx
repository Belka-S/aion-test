import classNames from 'classnames';
import { FC } from 'react';

import s from './Logo.module.scss';

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return <span className={classNames(s.logo, className)}>Logo</span>;
};

export default Logo;
