import classNames from 'classnames';

import Space from '@/components/Space';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={classNames('container', s.footer__wrap)}>
        <h2>Footer</h2>
        <Space />
      </div>
    </footer>
  );
};

export default Footer;
