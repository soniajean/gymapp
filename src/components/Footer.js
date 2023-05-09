import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';
const Footer = () => {
  return React.createElement(
    Box,
    { mt: '80px', bgcolor: '#ffb703' },
    React.createElement(
      Stack,
      { gap: '20px', alignItems: 'center', px: '20px', pt: '24px' },
      React.createElement('img', { src: Logo, alt: 'logo', width: '200px', height: '220px' }),
      React.createElement(
        Typography,
        { variant: 'h5', pb: '40px', mt: '20px' },
        'Made by ',
        React.createElement(
          'span',
          { 'aria-label': 'img' },
          '\uD83D\uDC69\u200D\uD83D\uDCBB'
        ),
        ' ',
        React.createElement(
          'a',
          { href: 'mailto: coleysonia@gmail.com', target: '_blank', rel: 'noopener noreferrer', style: { color: '#fefae0' } },
          ' SONIA'
        )
      )
    )
  );
};

export default Footer;

