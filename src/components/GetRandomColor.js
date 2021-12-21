import React from 'react';

const colors = [  
    '#f72585',
    '#b5179e',
    '#7209b7',
    '#560bad',
    '#480ca8',
    '#3a0ca3',
    '#F3f37c9',
    '#4361ee',
    '#4895ef',
    '#4cc9f0',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9'
    ];
    
const getRandomColor = () => {
    
    return (
        colors[Math.floor(Math.random() * colors.length )]   
    );
};



export {getRandomColor};