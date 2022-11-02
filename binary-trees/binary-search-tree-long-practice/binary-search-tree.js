// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
      this.count = 0;

    }

    insert(val, currentNode=this.root) {
      // iterative solution
      // let newNode = new TreeNode(val)
      // if (!this.root) {
      //   this.root = newNode;
      //   return this;
      // }

      // let current = this.root;

      // while (true) {
      //   if (val < current.val) {
      //     if (!current.left) {
      //       current.left = newNode;
      //       return this;
      //     }
      //     current = current.left;
      //   } else if (val > current.val) {
      //     if (!current.right) {
      //       current.right = newNode;
      //       return this;
      //     }
      //     current = current.right;
      //   }
      // }

      // recursive solution
      let newNode = new TreeNode(val);
      if (!this.root) {
        this.root = newNode;
        this.count++;
        return this;
      }

      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          this.count++;
        } else {
          this.insert(val, currentNode.left);
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          this.count++;
        } else {
          this.insert(val, currentNode.right)
        }
      }
    }

    search(val) {
      let current = this.root;

      while (current !== null) {

        if (val === current.val) return true;
        if (val < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            break;
          }
        }

        if (val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            break;
          }
        }

      }

      return false;

    }


    preOrderTraversal(currentNode = this.root) {

      if (currentNode) {
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
      }
    }


    inOrderTraversal(currentNode = this.root) {

      let order = [];
      if (currentNode) {
        this.inOrderTraversal(currentNode.left);
        order.push(currentNode.val);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
      }

      return order;
    }


    postOrderTraversal(currentNode = this.root) {
      if (currentNode) {
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
      }
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let queue = [];
      let currentNode = this.root;
      queue.push(currentNode);

      while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = [];
      let currentNode = this.root;
      stack.push(currentNode);

      while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.val);

        if (node.left) {
          stack.push(node.left);
        }

        if (node.right) {
          stack.push(node.right);
        }

      }
  }
  }

  module.exports = { BinarySearchTree, TreeNode };
