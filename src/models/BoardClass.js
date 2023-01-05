import { CellClass } from "./CellClass";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class BoardClass {
  cells = [];
  lostWhite = [];
  lostBlack = [];

  initCells() {
    for (let i = 0; i < 8; i++) { // i - строка
      const row = [];
      for (let j = 0; j < 8; j++) { // j - колонка
        if ((i + j) % 2 === 0) {
          row.push(new CellClass(j, i, this, 'black', null)); // белые ячейки
        } else {
          row.push(new CellClass(j, i, this, 'white', null)); // черные ячейки
        }
      }
      this.cells.push(row);
    }
  }

  addLostFigure(figure) {
    figure.color === 'black' ? this.lostBlack.push(figure) : this.lostWhite.push(figure);
  }

  getCopy() {
    const newBoard = new BoardClass();
    newBoard.cells = this.cells;
    newBoard.lostWhite = this.lostWhite;
    newBoard.lostBlack = this.lostBlack;
    return newBoard;
  }

  hightlightCells(selectedCell) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        // делаем ход доступным 
        target.move = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  getCell(x, y) {
    return this.cells[y][x];
  }

  #addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn('black', this.getCell(i, 1));
      new Pawn('white', this.getCell(i, 6));
    }
  }

  #addKings() {
    new King('black', this.getCell(4, 0));
    new King('white', this.getCell(4, 7));
  }

  #addQueens() {
    new Queen('black', this.getCell(3, 0));
    new Queen('white', this.getCell(3, 7));
  }

  #addBishops() {
    new Bishop('black', this.getCell(2, 0));
    new Bishop('black', this.getCell(5, 0));
    new Bishop('white', this.getCell(2, 7));
    new Bishop('white', this.getCell(5, 7));
  }

  #addKnights() {
    new Knight('black', this.getCell(1, 0));
    new Knight('black', this.getCell(6, 0));
    new Knight('white', this.getCell(1, 7));
    new Knight('white', this.getCell(6, 7));
  }

  #addRooks() {
    new Rook('black', this.getCell(0, 0));
    new Rook('black', this.getCell(7, 0));
    new Rook('white', this.getCell(0, 7));
    new Rook('white', this.getCell(7, 7));
  }

  addFigures() {
    this.#addPawns();
    this.#addKings();
    this.#addQueens();
    this.#addBishops();
    this.#addKnights();
    this.#addRooks();
  }
}