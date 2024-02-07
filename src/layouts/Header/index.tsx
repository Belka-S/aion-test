'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import Logo from '@/components/Logo';
import Button from '@/components/ui/Button';

import s from './Header.module.scss';
import Menu from './Menu';
// import SiteNav from './SiteNav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={s.header}>
        <div className={classNames('container', s.header__wrap)}>
          <Link href={'/'} onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>
          {/* <SiteNav /> */}
          <Button
            className={s.header__btn}
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            variant="outlined"
            label="X"
          />
        </div>
      </header>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
