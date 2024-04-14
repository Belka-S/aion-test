import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import s from './Menu.module.scss';

interface IMenyProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const Menu: FC<IMenyProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={classNames(s.menu, isOpen && s['is-open'])}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
};

export default Menu;
