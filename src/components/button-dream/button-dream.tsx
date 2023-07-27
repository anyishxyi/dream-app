import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ArrowForward';
import './button-dream.css';

const ButtonDream: React.FC = () => {
  const handleClick = async () => {
    try {
      const response = await axios.get('https://api.db-ip.com/v2/free/self');

      const ipAddress = response.data?.ipAddress;
      const ipNumbersSum = ipAddress
        ?.split('.')
        .map(Number)
        .reduce((sum: number, num: number) => sum + num, 0);

      if (ipNumbersSum && ipNumbersSum > 100) {
        alert('OK');
      } else {
        alert('KO');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données.');
    }
  };

  return (
    <div className='button-container'>
      <Button
        variant="contained"
        color="primary"
        endIcon={<ChevronRightIcon />}
        onClick={handleClick}
      >
        Exprimer mes rêves
      </Button>
    </div>
  );
};

export default ButtonDream;
