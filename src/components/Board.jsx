import React, { useEffect, useState } from 'react';
import { Cell } from './Cell';

export const Board = ({ board, setBoard, swapPlayer, currentPlayer }) => {
  const [selectedCell, setSelectedCell] = useState({});

  function handlerCell(cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure && cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    hightlightCells();
  }, [selectedCell]);

  function hightlightCells() {
    board.hightlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopy();
    setBoard(newBoard);
  }

  return (
    <div>
      <h3>Текущий игрок: {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <Cell
                cell={cell}
                key={cell.id}
                handler={handlerCell}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
