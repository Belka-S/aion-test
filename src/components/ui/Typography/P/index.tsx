import { FC } from 'react';

import { IHeadingProps } from '../types';
import Typography from '../Typography';

const P: FC<IHeadingProps> = props => {
  const { className = '', fontWeight = 700, children } = props;

  return (
    <Typography className={className} el="p" fontWeight={fontWeight}>
      {children}
    </Typography>
  );
};

export default P;
