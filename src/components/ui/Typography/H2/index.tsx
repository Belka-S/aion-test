import { FC } from 'react';

import { IHeadingProps } from '../types';
import Typography from '../Typography';

const H2: FC<IHeadingProps> = props => {
  const { className = '', fontWeight = 700, children } = props;

  return (
    <Typography className={className} el="h2" fontWeight={fontWeight}>
      {children}
    </Typography>
  );
};

export default H2;
