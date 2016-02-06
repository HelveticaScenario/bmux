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
            return splitPane(state, action);
        break;
        default:
            return state;
    }
}

function splitPane(state, action) {
    let desktop = state.desktops.get(state.active);
    const root = findAndSplitPane(desktop.root, action.path, action.splitType, action.splitRatio);
    desktop = desktop.set('root', root)
    let desktops = state.desktops.set(state.active, desktop)
    return state.set('desktops', desktops)
}

function findAndSplitPane(node, path, splitType, splitRatio) {
    const direction = path.pop();
    if ((direction !== undefined && node instanceof DisplayNode) || (direction === undefined && node instanceof TreeNode)) {
        throw new Error('invalid path');
    } else if (direction === 0) {
        return node.set('firstChild', findAndSplitPane(node.firstChild, path, splitType, splitRatio));
    } else if (direction === 1) {
        return node.set('secondChild', findAndSplitPane(node.secondChild, path, splitType, splitRatio));
    } else {
        if(splitType !== Rect.SPLIT_TYPES.HORIZONTAL && splitType !== Rect.SPLIT_TYPES.VERTICAL) {
            throw new Error('splitType not one of known split types', splitType);
        }
        const newNode = new DisplayNode({uri: ""});
        return new TreeNode({firstChild: node, secondChild: newNode, splitType, splitRatio})
    }
}
