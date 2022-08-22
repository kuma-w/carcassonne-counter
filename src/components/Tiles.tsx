import React, { memo, useCallback, useState } from 'react';
import { defaultTyles } from '../data/Tiles';
import Tile from './Tile';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { Label } from '@mui/icons-material';

interface TileOption {
  hideZeroTile: boolean;
}

const Tiles = () => {
  const [myTiles, setMyTiles] = useState(defaultTyles);
  const [option, setOption] = useState<TileOption>({ hideZeroTile: false });

  const handleChangeHideZeroTile = () => {
    setOption({ ...option, hideZeroTile: !option.hideZeroTile });
  };

  const decreaseTile = (key: number) => {
    setMyTiles(
      myTiles.map((tile) => (tile.key === key && tile.count > 0 ? { ...tile, count: tile.count - 1 } : tile)),
    );
  };

  const increaseTile = (key: number) => {
    setMyTiles(
      myTiles.map((tile) => {
        const maxCount = defaultTyles[tile.key].count;
        return tile.key === key && tile.count < maxCount ? { ...tile, count: tile.count + 1 } : tile;
      }),
    );
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={option.hideZeroTile} onChange={handleChangeHideZeroTile} />}
        label='0개인 타일 숨기기'
      />
      <Box sx={{ display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap' }}>
        {myTiles.map((tile) => {
          return option.hideZeroTile ? (
            tile.count !== 0 && (
              <Tile key={tile.key} tile={tile} decreaseTile={decreaseTile} increaseTile={increaseTile} />
            )
          ) : (
            <Tile key={tile.key} tile={tile} decreaseTile={decreaseTile} increaseTile={increaseTile} />
          );
        })}
      </Box>
    </>
  );
};

export default memo(Tiles);
