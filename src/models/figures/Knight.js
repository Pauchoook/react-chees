import { Figure } from "./FigureClass";
import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';
import { figureNames } from "./figuresNames";

export class Knight extends Figure {
  constructor(color, cell) {
    super(color, cell);

    this.logo = color === 'black' ? blackLogo : whiteLogo;
    this.name = figureNames.knight;
  }

  canMove(target) {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}