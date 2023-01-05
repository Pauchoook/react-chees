import { Figure } from "./FigureClass";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';
import { figureNames } from "./figuresNames";

export class King extends Figure {
  constructor(color, cell) {
    super(color, cell);

    this.logo = color === 'black' ? blackLogo : whiteLogo;
    this.name = figureNames.king;
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    return true;
  }
}