import React, { useState } from 'react';
import { defaultTyles } from '../data/Tyles';
import Tyle from './Tyle';
import { Box } from '@mui/material';

const Tyles = () => {
  const [myTyles, setMyTyles] = useState(defaultTyles);

  const reduceTyle = (key: number) => {
    setMyTyles(
      myTyles.map((tyle) => (tyle.key === key && tyle.count > 0 ? { ...tyle, count: tyle.count - 1 } : tyle)),
    );
  };
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap' }}>
      {myTyles.map((tyle) => {
        return <Tyle tyle={tyle} handleClick={reduceTyle} />;
      })}
    </Box>
  );
};

export default Tyles;
