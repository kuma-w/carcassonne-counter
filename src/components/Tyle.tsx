import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { TyleType } from '../data/Tyles';
import { renderImage } from '../utill/renderImage';

interface Iprops {
  tyle: TyleType;
  handleClick: (key: number) => void;
}

const Tyle = ({ tyle, handleClick }: Iprops) => {
  const clickedTyle = () => {
    handleClick(tyle.key);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box component='img' src={renderImage(tyle.key)} onClick={clickedTyle} />
      <Typography variant='inherit'>{tyle.count}</Typography>
    </Box>
  );
};

export default Tyle;
