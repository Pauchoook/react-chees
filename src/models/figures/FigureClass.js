import { figureNames } from "./figuresNames";

export class Figure {
  color = '';
  logo = null;
  cell = null;
  name = '';
  id = null;

  constructor(color, cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = '';
    this.id = Math.random();
  }

  canMove(target) {
    if (target.figure?.color === this.color) {
      return false;
    }
    if (target.figure?.name === figureNames.king) {
      return false;
    }
    return true;
  }

  moveFigure(target) {
  }
}
