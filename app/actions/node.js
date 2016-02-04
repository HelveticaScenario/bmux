import Enum from '../utils/enum.js';
import Rect from '../structures/rect.js';

export const NodeActions = Enum({SPLIT_PANE: {}});

export function splitPlane(path, splitType, splitRatio = 0.5) {
  return {
    type: NodeActions.SPLIT_PANE,
    path,
    splitType,
    splitRatio
  };
}
