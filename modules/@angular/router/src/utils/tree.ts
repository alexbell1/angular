/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export class Tree<T> {
  /** @internal */
  _root: TreeNode<T>;

  constructor(root: TreeNode<T>) { this._root = root; }

  get root(): T { return this._root.value; }

  parent(t: T): T {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }

  children(t: T): T[] {
    const n = findNode(t, this._root);
    return n ? n.children.map(t => t.value) : [];
  }

  firstChild(t: T): T {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }

  siblings(t: T): T[] {
    const p = findPath(t, this._root, []);
    if (p.length < 2) return [];

    const c = p[p.length - 2].children.map(c => c.value);
    return c.filter(cc => cc !== t);
  }

  pathFromRoot(t: T): T[] { return findPath(t, this._root, []).map(s => s.value); }

  contains(tree: Tree<T>): boolean { return contains(this._root, tree._root); }
}

function findNode<T>(expected: T, c: TreeNode<T>): TreeNode<T> {
  if (expected === c.value) return c;
  for (let cc of c.children) {
    const r = findNode(expected, cc);
    if (r) return r;
  }
  return null;
}

function findPath<T>(expected: T, c: TreeNode<T>, collected: TreeNode<T>[]): TreeNode<T>[] {
  collected.push(c);
  if (expected === c.value) return collected;

  for (let cc of c.children) {
    const cloned = collected.slice(0);
    const r = findPath(expected, cc, cloned);
    if (r) return r;
  }

  return [];
}

function contains<T>(tree: TreeNode<T>, subtree: TreeNode<T>): boolean {
  if (tree.value !== subtree.value) return false;

  for (let subtreeNode of subtree.children) {
    const s = tree.children.filter(child => child.value === subtreeNode.value);
    if (s.length === 0) return false;
    if (!contains(s[0], subtreeNode)) return false;
  }

  return true;
}

export class TreeNode<T> {
  constructor(public value: T, public children: TreeNode<T>[]) {}

  toString(): string { return `TreeNode(${this.value})`; }
}