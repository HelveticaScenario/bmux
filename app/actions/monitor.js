import Enum from '../utils/enum.js';
import Rect from '../structures/rect.js';

export const MonitorActions = Enum({MAKE_MONITOR: {}});

export function makeMonitor(rect: Rect): {type: MonitorActions, rect: Rect} {
  return {
    type: MonitorActions.MAKE_MONITOR,
    rect
  }
}
