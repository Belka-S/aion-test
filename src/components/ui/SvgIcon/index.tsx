import classNames from 'classnames';

import s from './SvgIcon.module.scss';

type SvgIconProps = {
  id: string;
  width?: number;
  height?: number;
  className?: string;
};

const SvgIcon = ({
  id,
  width = 20,
  height = 20,
  className = '',
}: SvgIconProps) => {
  return (
    <svg
      className={classNames(s.SvgIcon, className)}
      width={width}
      height={height}
    >
      <use href={`./sprite.svg#${id}`} />
    </svg>
  );
};

export default SvgIcon;
