import React from 'react';

export const Cell = ({ cell, selected, handler }) => {
  return (
    <div
      onClick={() => handler(cell)}
      className={['cell', cell.color, selected ? 'selected' : '', cell.move && cell.figure ? 'green' : ''].join(' ')}
    >
      {cell.move && !cell.figure && <div className="move" />}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};
