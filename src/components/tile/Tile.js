import React from "react";

export const Tile = (obj) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{obj[0]}</p>
      {obj.values().forEach(prop => <p className="tile">{prop}</p>)}
    </div>
  );
};
