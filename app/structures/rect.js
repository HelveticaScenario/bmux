import Enum from '../utils/enum.js';
import Immutable from 'immutable';

const SPLIT_TYPES = new Enum({VERTICAL: {}, HORIZONTAL: {}});

export default class Rect extends Immutable.Record({x: 0, y: 0, width: 0, height: 0}){
  split() {

  }
}
Rect.SPLIT_TYPES = SPLIT_TYPES;
