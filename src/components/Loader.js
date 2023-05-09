import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const loader = () => {
  return React.createElement(
    Stack,
    { direction: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' },
    React.createElement(InfinitySpin, { color: 'gray' })
  );
};

export default loader;

