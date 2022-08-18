import React from 'react';
import { Box, Typography } from '@mui/material';
import { TileType } from '../data/Tiles';
import { renderImage } from '../util/renderImage';

interface Iprops {
  tile: TileType;
  handleClick: (key: number) => void;
}

const Tile = ({ tile, handleClick }: Iprops) => {
  const clickedTyle = () => {
    handleClick(tile.key);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box
        component='img'
        src={renderImage(tile.key)}
        onClick={clickedTyle}
        sx={{ filter: tile.count === 0 ? 'grayscale(1)' : 'grayscale(0)' }}
      />
      <Typography variant='inherit'>{tile.count}</Typography>
    </Box>
  );
};

export default Tile;
