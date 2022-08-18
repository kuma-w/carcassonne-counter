import React, { useState } from 'react';
import { defaultTyles } from '../data/Tiles';
import Tile from './Tile';
import { Box } from '@mui/material';

const Tiles = () => {
  const [myTiles, setMyTiles] = useState(defaultTyles);

  const decreaseTile = (key: number) => {
    setMyTiles(
      myTiles.map((tile) => (tile.key === key && tile.count > 0 ? { ...tile, count: tile.count - 1 } : tile)),
    );
  };
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap' }}>
      {myTiles.map((tile) => {
        return <Tile tile={tile} handleClick={decreaseTile} />;
      })}
    </Box>
  );
};

export default Tiles;
