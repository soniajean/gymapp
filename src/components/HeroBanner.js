import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

import HeroBannerImg from '../assets/images/banner.jpg';
const HeroBanner = () => {
  return React.createElement(
    Box,
    { sx: {
        mt: { lg: '210px', xs: '70px' },
        ml: { sm: '50px' }
      }, position: 'relative', p: '20px' },
    
    React.createElement('img', { src: HeroBannerImg, alt: 'hero-banner', className: 'hero-banner-img' })
  );
};

export default HeroBanner;

