import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { fetchData, BMIOptions } from '../utils/fetchData';

const BmiCalculator = () => {
    
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    const [BMI, setBMI] = useState("Not Calculated");
    const [health, setHealth] = useState('Not Calculated');
    const [healthyBmiRange, setHealthyBmiRange] = useState('Not Calculated');
    const [loading, setLoading] = useState(false);

    const fetchBMICalData = async () => {
        if (weight > 40 && weight < 160 && height > 130 && height < 230 && age > 0 && age < 80) {
            const BMIData = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`, BMIOptions);
            setLoading(true);
            if (BMIData.status_code === 200) {
                console.log(BMIData);
                setBMI(BMIData.data.bmi);
                setHealth(BMIData.data.health);
                setHealthyBmiRange(BMIData.data.healthy_bmi_range);
            } else {
                alert('Unable to fetch data from API');
            }
            window.scrollTo({ top: 1400, behavior: 'smooth' });
        } else {
            alert('Please enter valid values');
        }
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            Stack,
            { p: '80px', gap: '30px', backgroundColor: '#FFF', width: '90%', margin: 'auto', mt: '100px' },
            React.createElement(TextField, { type: 'number', placeholder: 'Your Weight in inches', onChange: e => setWeight(e.target.value) }),
            React.createElement(TextField, { type: 'number', placeholder: 'Your Height in inches', onChange: e => setHeight(e.target.value) }),
            React.createElement(TextField, { type: 'number', placeholder: 'Your Age', onChange: e => setAge(e.target.value) }),
            React.createElement(
                Button,
                { variant: 'contained', color: 'primary', onClick: fetchBMICalData, disabled: loading },
                'Calculate BMI'
            )
        ),
        BMI === "Not Calculated" ? '' : React.createElement(
            Stack,
            { p: '80px', gap: '30px', backgroundColor: '#FFF', width: '90%', margin: 'auto', mt: '100px' },
            React.createElement(
                Typography,
                { variant: 'h3' },
                'BMI Results'
            ),
            React.createElement(
                Box,
                null,
                React.createElement(
                    Typography,
                    { variant: 'h5' },
                    'BMI: ',
                    React.createElement(
                        'span',
                        { style: { color: '#ffb700', fontWeight: "600", fontSize: "40px" } },
                        BMI
                    )
                ),
                React.createElement(
                    Typography,
                    { variant: 'h5' },
                    'HEALTH: ',
                    React.createElement(
                        'span',
                        { style: { color: '#ffb700', fontWeight: "600", fontSize: "40px" } },
                        health
                    )
                ),
                React.createElement(
                    Typography,
                    { variant: 'h5' },
                    'HEALTH_BMI_RANGE: ',
                    React.createElement(
                        'span',
                        { style: { color: '#ffb700', fontWeight: "600", fontSize: "40px" } },
                        healthyBmiRange
                    )
                )
            )
        )
    );
};

export default BmiCalculator;

