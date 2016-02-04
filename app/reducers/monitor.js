import Immutable from 'immutable';
import {DisplayNode, TreeNode} from '../structures/node.js';
import Desktop from '../structures/desktop.js';
import Monitor from '../structures/monitor.js';
import Rect from '../structures/rect.js';
import { NodeActions } from '../actions/node.js';


function makeInitialState() {
  const root = new DisplayNode({parent: null});
  const desktop = new Desktop({root});
  const monitor = new Monitor({desktops: Immutable.List.of(desktop), active: 0});
  return monitor;
}
export default function (state = makeInitialState(), action) {
  switch (action.type) {
    case NodeActions.SPLIT_PANE:
      return splitPlane(state, action);
      break;
    default:
      return state;
  }
}

function splitPlane(state, action) {
  const desktop = state.desktops.get(state.active);
  const root = findAndSplitPlane(desktop.root);

}

function findAndSplitPlane(node, path, splitType, splitRatio) {
  const direction = path.pop();
  if (direction === 0) {
    return node.set('firstChild', findAndSplitPlane(node.firstChild, path, splitType, splitRatio));
  } else if (direction === 1) {
    return node.set('secondChild', findAndSplitPlane(node.secondChild, path, splitType, splitRatio));
  } else {
    if (node instanceof DisplayNode) {
      if (splitType === Rect.SPLIT_TYPES.HORIZONTAL) {
        
      } else if (splitType === Rect.SPLIT_TYPES.VERTICAL) {

      } else {
        throw new Error('splitType not one of known split types', splitType);
      }
    } else if(node instanceof TreeNode) {

    } else {
      throw new Error('node not of node type', node);
    }
  }
}
