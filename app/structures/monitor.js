import Desktop from './desktop.js';
import Immutable from 'immutable';


export default class Monitor {
  desktops: Immutable.OrderedSet<Desktop>;
  constructor(desktops: Immutable.OrderedSet<Desktop>) {
    this.desktops = desktops;
    Object.freeze(this);
  }
}
