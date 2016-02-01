import Node from './node.js';

export default class Desktop {
  root: Node;
  constructor(root: Node) {
    this.root = root;
    Object.freeze(this);
  }
}
