import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState('');

  // fetching exercise cateogries
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(exercise => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search));
      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
  };

  return React.createElement(
    Stack,
    { alignItems: 'center', mt: '30px', justifyContent: 'center', p: '20px' },
    
   
    React.createElement(
      Box,
      { sx: { position: 'relative', width: '100%', p: '20px' } },
      React.createElement(HorizontalScrollBar, { data: bodyParts, bodyPart: bodyPart, setBodyPart: setBodyPart, isBodyParts: true })
    )
  );
};

export default SearchExercises;

