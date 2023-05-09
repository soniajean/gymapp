import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => React.createElement(
  Box,
  { sx: { mt: { lg: '100px', xs: '0px' } } },
  React.createElement(
    Typography,
    { sx: { fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }, fontWeight: 700, color: '#b2becd', mb: '33px' },
    'Similar ',
    React.createElement(
      'span',
      { style: { color: '#FF2625', textTransform: 'capitalize' } },
      'Target Muscle'
    ),
    ' exercises'
  ),
  React.createElement(
    Stack,
    { direction: 'row', sx: { p: 2, position: 'relative' } },
    targetMuscleExercises.length !== 0 ? React.createElement(HorizontalScrollBar, { data: targetMuscleExercises }) : React.createElement(Loader, null)
  ),
  React.createElement(
    Typography,
    { sx: { fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }, fontWeight: 700, color: '#b2becd', mb: '33px' },
    'Similar ',
    React.createElement(
      'span',
      { style: { color: '#FF2625', textTransform: 'capitalize' } },
      'Equipment'
    ),
    ' exercises'
  ),
  React.createElement(
    Stack,
    { direction: 'row', sx: { p: 2, position: 'relative' } },
    equipmentExercises.length !== 0 ? React.createElement(HorizontalScrollBar, { data: equipmentExercises }) : React.createElement(Loader, null)
  )
);

export default SimilarExercises;

