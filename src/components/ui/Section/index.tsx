import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import s from './Section.module.scss';

interface ISectionProps {
  className?: string;
  children: ReactNode;
}

const Section: FC<ISectionProps> = ({ className = '', children }) => {
  return (
    <section className={classNames(s.section, className)}>{children}</section>
  );
};

export default Section;
