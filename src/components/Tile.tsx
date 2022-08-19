import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { TileType } from '../data/Tiles';
import { renderImage } from '../util/renderImage';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Iprops {
  tile: TileType;
  decreaseTile: (key: number) => void;
  increaseTile: (key: number) => void;
}

const Tile = ({ tile, decreaseTile, increaseTile }: Iprops) => {
  const handleClickBox = () => {
    decreaseTile(tile.key);
  };

  const handleClickDecreaseBtn = () => {
    decreaseTile(tile.key);
  };

  const handleClickIncreaseBtn = () => {
    increaseTile(tile.key);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box
        component='img'
        src={renderImage(tile.key)}
        onClick={handleClickBox}
        sx={{ filter: tile.count === 0 ? 'grayscale(1)' : 'grayscale(0)' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton aria-label='decrease' onClick={handleClickDecreaseBtn}>
          <RemoveIcon />
        </IconButton>
        <Typography variant='inherit' sx={{ mx: 2 }}>
          {tile.count}
        </Typography>
        <IconButton aria-label='increase' onClick={handleClickIncreaseBtn}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Tile;
