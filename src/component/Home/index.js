import React, { useState } from 'react';
import styled from 'styled-components';

const Matrix = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: ${({ color }) => color};
`;

const Home = () => {
  const initialColors = Array(9).fill('white');
  const [colors, setColors] = useState(initialColors);

  const handleClick = (index) => {
    if (index !== 8) {
      if (colors[index] !== 'white') return;

      const newColors = [...colors];
      newColors[index] = 'green';

      setColors(newColors);
    } else if (index === 8) {
      changeColorsInSequence();
    }
  };

  const changeColorsInSequence = () => {
    let delay = 0;
    for (let i = 0; i < colors.length; i++) {
      setTimeout(() => {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[i] = 'orange';
          return newColors;
        });
      }, delay);
      delay += 500; 
    }
  };

  return (
    <Matrix>
      {colors.map((color, index) => (
        <Box
          key={index}
          color={color}
          onClick={() => handleClick(index)}
        />
      ))}
    </Matrix>
  );
};

export default Home;
