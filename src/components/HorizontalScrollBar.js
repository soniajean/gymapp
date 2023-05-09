import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return React.createElement(
    Typography,
    { onClick: () => scrollPrev(), className: 'right-arrow' },
    React.createElement('img', { src: LeftArrowIcon, alt: 'right-arrow' })
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return React.createElement(
    Typography,
    { onClick: () => scrollNext(), className: 'left-arrow' },
    React.createElement('img', { src: RightArrowIcon, alt: 'right-arrow' })
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return React.createElement(
    ScrollMenu,
    { LeftArrow: LeftArrow, RightArrow: RightArrow },
    data.map(item => React.createElement(
      Box,
      {
        key: item.id || item,
        itemId: item.id || item,
        title: item.id || item,
        m: '0 40px'
      },
      isBodyParts ? React.createElement(BodyPart, { item: item, bodyPart: bodyPart, setBodyPart: setBodyPart }) : React.createElement(ExerciseCard, { exercise: item })
    ))
  );
};

export default HorizontalScrollBar;

