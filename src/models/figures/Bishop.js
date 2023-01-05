import { Figure } from "./FigureClass";
import blackLogo from '../../assets/black-bishop.png';
import whiteLogo from '../../assets/white-bishop.png';
import { figureNames } from "./figuresNames";

export class Bishop extends Figure {
  constructor(color, cell) {
    super(color, cell);

    this.logo = color === 'black' ? blackLogo : whiteLogo;
    this.name = figureNames.bishop;
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}