import Rect from './rect.js';

export class Node {
  parent: Node;
  constructor(parent: Node) {
    this.parent = parent;
  }
}

export class TreeNode extends Node {
  firstChild: Node;
  secondChild: Node;
  splitType: Rect.SPLIT_TYPES;
  splitRatio: number;
  constructor({parent, firstChild, secondChild, splitType, splitRatio}: {parent: Node, firstChild: Node, secondChild: Node, splitType: Rect.SPLIT_TYPES, splitRatio: number}) {
    super(parent);
    this.firstChild = firstChild;
    this.secondChild = secondChild;
    this.splitType = splitType;
    this.splitRatio = splitRatio;
    Object.freeze(this);
  }
}

export class DisplayNode extends Node {
  uri: string;
  constructor({parent, uri}: {parent: Node, uri: string}) {
    super(parent);
    this.uri = uri;
    Object.freeze(this);
  }
}
