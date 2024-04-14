'use client';

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { MouseEvent, useState } from 'react';

import Button from '@/components/ui/Button';
import H4 from '@/components/ui/Typography/H4';

import Menu from '../../components/Menu';
import s from './Header.module.scss';
import SiteNav from './SiteNav';

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
    e.currentTarget.blur();
  };

  return (
    <>
      <header className={s.header}>
        <div className={classNames('container', s.header__wrap)}>
          <H4 className={s.header__title}>
            {pathname === '/' ? 'galaxy' : `${pathname?.replace('/', '')}`}
          </H4>

          <Button
            className={s.header__btn}
            onClick={handleClick}
            type="button"
            variant="outlined"
            label="Get some space"
          />
        </div>
      </header>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
        <SiteNav className={s.menu__nav} />
      </Menu>
    </>
  );
};

export default Header;
