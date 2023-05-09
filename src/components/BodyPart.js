import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return React.createElement(
        Stack,
        {
            type: 'button',
            alignItems: 'center',
            justifyContent: 'center',
            className: 'bodyPart-card',

            onClick: () => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }
        },
        React.createElement('img', { src: Icon, alt: 'dumbell', style: { width: '40px', height: '40px' } }),
        React.createElement(
            Typography,
            { fontWeight: 'bold', fontSize: '24px', color: '#3A1212', textTransform: 'capitalize' },
            item
        )
    );
};

export default BodyPart;
