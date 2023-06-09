import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
    return React.createElement(
        Link,
        { className: 'exercise-card', to: `/exercise/${exercise.id}` },
        React.createElement('img', { src: exercise.gifUrl, alt: exercise.name, loading: 'lazy' }),
        React.createElement(
            Stack,
            { direction: 'row' },
            React.createElement(
                Button,
                { sx: { ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' } },
                exercise.bodyPart
            ),
            React.createElement(
                Button,
                { sx: { ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' } },
                exercise.target
            )
        ),
        React.createElement(
            Typography,
            { ml: '20px', color: '#000', fontWeight: 'bold', mt: '11px', pb: '10px', textTransform: 'capitalize', fontSize: '22px' },
            exercise.name
        )
    );
};

export default ExerciseCard;

