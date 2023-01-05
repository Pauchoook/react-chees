import React, { useEffect, useState } from 'react';
import './app.css';
import { Board } from './components/Board';
import { LostFigures } from './components/LostFigures';
import { Timer } from './components/Timer';
import { BoardClass } from './models/BoardClass';
import { Player } from './models/Player';

function App() {
  const [board, setBoard] = useState(new BoardClass());
  const [whitePlayer, setWhitePlayer] = useState(new Player('white'));
  const [blackPlayer, setBlackPlayer] = useState(new Player('black'));
  const [currentPlayer, setCurrentlayer] = useState(whitePlayer);

  useEffect(() => {
    setCurrentlayer(whitePlayer);
    game();
  }, []);

  function game() {
    const newBoard = new BoardClass();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentlayer(currentPlayer?.color === 'white' ? blackPlayer : whitePlayer);
  }

  return (
    <div className="app">
      <Timer restart={game} currentPlayer={currentPlayer} />
      <Board currentPlayer={currentPlayer} swapPlayer={swapPlayer} board={board} setBoard={setBoard} />
      <div>
        <LostFigures title="черные фигуры" figures={board.lostBlack} />
        <LostFigures title="белые фигуры" figures={board.lostWhite} />
      </div>
    </div>
  );
}

export default App;
