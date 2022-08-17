import React from 'react';
import { defaultTyles } from '../data/Tyles';
import Tyle from './Tyle';
import { Box } from '@mui/material';

const Tyles = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap' }}>
      {defaultTyles.map((tyle) => {
        return <Tyle tyle={tyle} />;
      })}
    </Box>
  );
};

export default Tyles;
