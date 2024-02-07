import { FC } from 'react';

import { IHeadingProps } from '../types';
import Typography from '../Typography';

const H1: FC<IHeadingProps> = props => {
  const { className = '', fontWeight = 700, children } = props;

  return (
    <Typography className={className} el="h1" fontWeight={fontWeight}>
      {children}
    </Typography>
  );
};

export default H1;
