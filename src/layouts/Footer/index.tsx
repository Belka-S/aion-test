import classNames from 'classnames';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={classNames('container', s.footer__wrap)}>
        <h2>Footer</h2>
      </div>
    </footer>
  );
};

export default Footer;
