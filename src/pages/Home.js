import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return React.createElement(
    Box,
    null,
    React.createElement(Exercises, {
      exercises: exercises,
      setExercises: setExercises,
      bodyPart: bodyPart
    })
  );
};

export default Home;

