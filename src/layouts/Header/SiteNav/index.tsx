'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import s from './SiteNav.module.scss';

interface ISiteNavProps {
  className?: string;
}

const SiteNav: FC<ISiteNavProps> = ({ className }) => {
  const pathname = usePathname();

  const setClassName = (path: string) => {
    return classNames(s.nav__link, pathname === path && s.active);
  };

  return (
    <nav className={classNames(s.nav, className)}>
      <Link className={setClassName('/')} href={'/'}>
        Galaxy
      </Link>
      <Link className={setClassName('/planet')} href={'/planet'}>
        Planet
      </Link>
    </nav>
  );
};

export default SiteNav;
