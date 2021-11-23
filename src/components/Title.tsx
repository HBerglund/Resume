import { Typography } from '@material-ui/core';
import React from 'react';

interface TitleProps {
  title: string;
  subTitle?: boolean;
}

function Title({ title, subTitle }: TitleProps) {
  if (subTitle) {
    return (
      <Typography
        variant='h5'
        style={{ color: '#bd93f9', marginBottom: '1rem' }}
      >
        {title}
      </Typography>
    );
  }
  return (
    <Typography variant='h4' component='h2' style={{ marginBottom: '1rem' }}>
      {title}
    </Typography>
  );
}

export default Title;
