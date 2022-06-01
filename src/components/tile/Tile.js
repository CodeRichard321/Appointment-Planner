import React from "react";

export const Tile = ({ obj }) => {
  return (
    <div className="tile-container">
      {Object.values(obj).map((value, index) => {
        if (index === 0) {
          return <p className="tile-title" key={index}>{value}</p>
        } else {
          return <p className="tile" key={index}>{value}</p>
        }
      })}
    </div>
  );
};
