import classNames from 'classnames';

import SiteNav from '../SiteNav';
import s from './Menu.module.scss';

interface IMenyProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu = ({ isOpen, setIsOpen }: IMenyProps) => {
  return (
    <div
      className={classNames(s.menu, isOpen && s['is-open'])}
      onClick={() => setIsOpen(false)}
    >
      <SiteNav className={s.menu__nav} />
    </div>
  );
};

export default Menu;
