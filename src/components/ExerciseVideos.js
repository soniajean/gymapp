import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return React.createElement(Loader, null);

  return React.createElement(
    Box,
    { sx: { marginTop: { lg: '203px', xs: '20px' } }, p: '20px' },
    React.createElement(
      Typography,
      { sx: { fontSize: { lg: '44px', xs: '25px' } }, fontWeight: 700, color: '#b2becd', mb: '33px' },
      'Watch ',
      React.createElement(
        'span',
        { style: { color: '#FF2625', textTransform: 'capitalize' } },
        name
      ),
      ' exercise videos'
    ),
    React.createElement(
      Stack,
      { sx: { flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }, justifyContent: 'flex-start', flexWrap: 'wrap', alignItems: 'center' },
      exerciseVideos.slice(0, 6).map((item, index) => React.createElement(
        'a',
        {
          key: index,
          className: 'exercise-video',
          href: `https://www.youtube.com/watch?v=${item.video.videoId}`,
          target: '_blank',
          rel: 'noreferrer'
        },
        React.createElement('img', { style: { borderTopLeftRadius: '20px' }, src: item.video.thumbnails[0].url, alt: item.video.title }),
        React.createElement(
          Box,
          null,
          React.createElement(
            Typography,
            { sx: { fontSize: { lg: '28px', xs: '18px' } }, fontWeight: 600, color: '#b2becd' },
            item.video.title
          ),
          React.createElement(
            Typography,
            { fontSize: '14px', color: '#b2becd' },
            item.video.channelName
          )
        )
      ))
    )
  );
};

export default ExerciseVideos;

