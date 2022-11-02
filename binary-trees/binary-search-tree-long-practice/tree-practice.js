const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {

  while (rootNode.left) {
    rootNode = rootNode.left;
  }

  return rootNode.val
}

function findMaxBST (rootNode) {

  while (rootNode.right) {
    rootNode = rootNode.right;
  }

  return rootNode.val;
}

function findMinBT (rootNode) {

  if (!rootNode) return;

  let min = rootNode.val;
  let left = findMinBT(rootNode.left);
  let right = findMinBT(rootNode.right);

  if (left < min) min = left;
  if (right < min) min = right;

  return min;
}

function findMaxBT (rootNode) {

  if (!rootNode) return;

  let max = rootNode.val;
  let left = findMaxBT(rootNode.left);
  let right = findMaxBT(rootNode.right);

  if (left > max) max = left;
  if (right > max) max = right;

  return max;
}

function getHeight (rootNode) {

  if (!rootNode) return -1;

  if (!rootNode.left && !rootNode.right) return 0;

  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);

  // return left > right ? left + 1 : right + 1;
  return Math.max(left, right) + 1;

  // breadth first traversal method



}

let btRootBig;
btRootBig = new TreeNode(13);
    btRootBig.left = new TreeNode(2);
    btRootBig.right = new TreeNode(3);
    btRootBig.left.left = new TreeNode(4);
    btRootBig.left.right = new TreeNode(5);
    btRootBig.right.right = new TreeNode(6);
    btRootBig.left.left.left = new TreeNode(7);
    btRootBig.left.right.left = new TreeNode(8);
    btRootBig.left.right.right = new TreeNode(9);
    btRootBig.right.right.right = new TreeNode(10);
    btRootBig.left.right.right.left = new TreeNode(11);
    btRootBig.right.right.right.right = new TreeNode(12);
    btRootBig.right.right.right.right.left = new TreeNode(1);
    getHeight(btRootBig.left)  // 3
    getHeight(btRootBig.right)  // 4

function balancedTree (rootNode) {

  if (!rootNode) {
    return true;
  }

  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);
  if (Math.abs(left - right) <= 1 && balancedTree(rootNode.left) === true && balancedTree(rootNode.right) === true) {
    return true;
  }

  return false;
}

function countNodes (rootNode) {
  if (!rootNode) return 0;

  return (1 + countNodes(rootNode.left) + countNodes(rootNode.right))

}

function getParentNode (rootNode, target) {

  if (!rootNode || rootNode.val === target) {
    return null;
  }

  if (rootNode.left && rootNode.left.val === target ||
    rootNode.right && rootNode.right.val === target) {
      return rootNode;
  }

  let left = getParentNode(rootNode.left, target);

  if (left) {
    return left;
  }

  let right = getParentNode(rootNode.right, target);

  if (right) {
    return right;
  }

  return undefined;
}

function inOrderPredecessor (rootNode, target) {

  // if (rootNode === target) {
  //   if (rootNode.left) {
  //     let left = rootNode.left;
  //     while (left.right) {
  //       left = left.right;
  //     }

  //     return left.val;
  //   }
  // }

  // if (rootNode.left) {
  //   let left = rootNode.left;

  //   while (left.right) {
  //     left = left.right;
  //   }

  //   return left.val;
  // }

  // attempt #2: fail
  // if (balancedTree(rootNode) === false) {
  //   if (rootNode.val === target) {
  //     predecessor = rootNode.right;
  //     while (predecessor.right) {
  //       predecessor = predecessor.right;
  //     }

  //     return predecessor.val;
  //   }
  // }

  // if (!rootNode) {
  //   return null;
  // }

  // let predecessor = null;

  // if (rootNode.val === target) {
  //   predecessor = rootNode.left;
  //   while (predecessor.left) {
  //     predecessor = predecessor.right;
  //   }

  //   return predecessor.val;
  // }


  // return predecessor;

  let pred;

  // if (!rootNode) return null;

  while(rootNode) {
    if (target < rootNode.val) {
      rootNode = rootNode.left;
    } else if (target > rootNode.val) {
      pred = rootNode;
      rootNode = rootNode.right;
    } else {
      if (rootNode.left) {
        pred = findMax(rootNode.left);
      }
      break;
    }

  }

  if (pred) {
    return pred.val
  }
  return null;

}

function findMax(rootNode) {
  while (rootNode.right) {
    rootNode = rootNode.right;
  }

  return rootNode;
}

function deleteNodeBST(rootNode, target) {

  let parent = null;
  let current = rootNode;

  while (current && current.val !== target) {
    parent = current;

    if (target < current.val) {
      current = current.left
    } else {
      current = current.right;
    }
  }

  if (!current) {
    return undefined;
  }


  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null
  if (!current.left && !current.right) {
    if (current !== rootNode) {
      if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else {
      rootNode = null;
    }
  }

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  else if (current.left && current.right) {
    let predecessor = inOrderPredecessor(rootNode, current.val);

    current.left = deleteNodeBST(current.left, predecessor);

    current.val = predecessor;
  }

  // Case 3: One child:
  //   Make the parent point to the child
  else {
    let child;
    if (current.left) {
      child = current.left;
    } else {
      child = current.right;
    }

    if (current !== rootNode) {
      if (current === parent.left) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    } else {
      rootNode = child;
    }
  }

  return rootNode;

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
