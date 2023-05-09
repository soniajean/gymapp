import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [{
    icon: BodyPartImage,
    name: bodyPart
  }, {
    icon: TargetImage,
    name: target
  }, {
    icon: EquipmentImage,
    name: equipment
  }];

  return React.createElement(
    Stack,
    { gap: '60px', sx: { flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' } },
    React.createElement('img', { src: gifUrl, alt: name, loading: 'lazy', className: 'detail-image' }),
    React.createElement(
      Stack,
      { sx: { gap: { lg: '35px', xs: '20px' } } },
      React.createElement(
        Typography,
        { sx: { fontSize: { lg: '64px', xs: '30px' } }, fontWeight: 700, textTransform: 'capitalize', color: '#b2becd' },
        name
      ),
      React.createElement(
        Typography,
        { sx: { fontSize: { lg: '24px', xs: '18px' } }, color: '#b2becd' },
        'Exercises keep you strong.',
        ' ',
        React.createElement(
          'span',
          { style: { textTransform: 'capitalize' } },
          name
        ),
        ' is one of the best ',
        React.createElement('br', null),
        ' exercises to target your ',
        target,
        '. It will help you improve your',
        ' ',
        React.createElement('br', null),
        ' mood and gain energy.'
      ),
      extraDetail.map(item => React.createElement(
        Stack,
        { key: item.name, direction: 'row', gap: '24px', alignItems: 'center' },
        React.createElement(
          Button,
          { sx: { background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' } },
          React.createElement('img', { src: item.icon, alt: bodyPart, style: { width: '50px', height: '50px' } })
        ),
        React.createElement(
          Typography,
          { textTransform: 'capitalize', sx: { fontSize: { lg: '30px', xs: '20px' } }, color: '#b2becd' },
          item.name
        )
      ))
    )
  );
};

export default Detail;

