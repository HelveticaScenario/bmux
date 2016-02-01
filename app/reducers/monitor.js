import Immutable from 'immutable';
import {DisplayNode, TreeNode} from '../structures/node.js';
import Desktop from '../structures/desktop.js';
import Monitor from '../structures/monitor.js';
import Rect from '../structures/rect.js';
console.log(Desktop, Monitor, Rect);


function makeInitialState() {
  const root = new DisplayNode({parent: null});
  const desktop = new Desktop(root);
  const monitor = new Monitor(Immutable.OrderedSet.of(desktop));
  return monitor;
}
export default function (state = makeInitialState(), action) {
  return state;
}
