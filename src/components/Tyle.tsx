import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { TyleType } from '../data/Tyles';
import { renderImage } from '../utill/renderImage';

interface Iprops {
  tyle: TyleType;
}

const Tyle = ({ tyle }: Iprops) => {
  return (
    <Box sx={{ m: 2 }}>
      <Box
        component='img'
        src={renderImage(tyle.key)}
        onClick={() => {
          console.log('onClick');
        }}
      />
      <Typography variant='inherit'>{tyle.count}</Typography>
    </Box>
  );
};

export default Tyle;
