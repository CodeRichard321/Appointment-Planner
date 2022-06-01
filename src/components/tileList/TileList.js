import { Tile } from '../tile/Tile';
import React from "react";

export const TileList = ({ list }) => {
  return (
    <div data-testid="tile-list">
      {list.map(item => <Tile obj={item} />)}
    </div>
  );
};
