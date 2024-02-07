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
  // page height
  // if (typeof window !== 'undefined') { const bodyEl = document.querySelector('body');
  //   if (bodyEl) { bodyEl.style.height = pathname === '/' ? '100vh' : ''; } }

  const setClassName = (path: string) => {
    return classNames(s.nav__link, pathname === path && s.active);
  };

  return (
    <nav className={classNames(s.nav, className)}>
      <Link className={setClassName('/')} href={'/'}>
        Home
      </Link>
      <Link className={setClassName('/about')} href={'/about'}>
        About
      </Link>
      <Link className={setClassName('/contact')} href={'/contact'}>
        Contact
      </Link>
    </nav>
  );
};

export default SiteNav;
