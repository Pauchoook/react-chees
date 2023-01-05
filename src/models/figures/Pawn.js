import { Figure } from "./FigureClass";
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';
import { figureNames } from "./figuresNames";

export class Pawn extends Figure {
  isFirstStep = true;

  constructor(color, cell) {
    super(color, cell);

    this.logo = color === 'black' ? blackLogo : whiteLogo;
    this.name = figureNames.pawn;
  }

  canMove(target) {
    if (!super.canMove(target)) return false;

    const direction = this.cell.figure?.color === 'black' ? 1 : -1;
    const firstStepDirection = this.cell.figure?.color === 'black' ? 2 : -2;

    if ((target.y === this.cell.y + direction || this.isFirstStep && (target.y === this.cell.y + firstStepDirection)) && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }

    if (target.y === this.cell.y + direction && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) && this.cell.isEnemy(target)) {
      return true;
    }
  }

  moveFigure(target) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}