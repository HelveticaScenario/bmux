import Enum from '../utils/enum.js';

const SPLIT_TYPES = new Enum({VERTICAL: {}, HORIZONTAL: {}});

export default class Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor({x, y, width, height}: {x: number, y: number, width: number, height: number}) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    Object.freeze(this);
  }

  split() {

  }

  static SPLIT_TYPES: Class<SPLIT_TYPES>;
}
Rect.SPLIT_TYPES = SPLIT_TYPES;

Object.freeze(Rect);
