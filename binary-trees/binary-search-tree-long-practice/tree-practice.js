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

  // if (!rootNode) return;

  // let min = rootNode.val;
  // let left = findMinBT(rootNode.left);
  // let right = findMinBT(rootNode.right);

  // if (left < min) min = left;
  // if (right < min) min = right;

  // return min;

  // BFT
  const queue = [rootNode];
  let min = Infinity;

  while (queue.length) {
    let node = queue.shift();

    if (node.val < min) {
      min = node.val;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

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

  // if (!rootNode) return -1;

  // if (!rootNode.left && !rootNode.right) return 0;

  // let left = getHeight(rootNode.left);
  // let right = getHeight(rootNode.right);

  // // return left > right ? left + 1 : right + 1;
  // return Math.max(left, right) + 1;

  // breadth first traversal method
  if (!rootNode) return -1;

  let height = 0;

  const queue = [rootNode];
  queue.push(null);

  while (queue.length) {

    let node = queue.shift();

    if (node === null) {
      height++;
    }

    if (node !== null) {
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    else if (queue.length) {
      queue.push(null);
    }

  }

  return height - 1;
}

// height of right and left +- 1 node
function balancedTree (rootNode) {

  // if (!rootNode) {
  //   return true;
  // }

  // let left = getHeight(rootNode.left);
  // let right = getHeight(rootNode.right);
  // if (Math.abs(left - right) <= 1 && balancedTree(rootNode.left) === true && balancedTree(rootNode.right) === true) {
  //   return true;
  // }

  // return false;

  // BFT
  if (!rootNode) return true;
  const queue = [rootNode]
  while (queue.length) {
    let node = queue.shift()
    if (getHeight(node.left) > getHeight(node.right) + 1
      || getHeight(node.right) > getHeight(node.left) + 1) {
      return false
    }

    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return true
}

function countNodes (rootNode) {
  // if (!rootNode) return 0;

  // return (1 + countNodes(rootNode.left) + countNodes(rootNode.right))

  // BFT

  if (!rootNode) return -1;

  let count = 0;
  const queue = [rootNode];

  while (queue.length) {

    let node = queue.shift();

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }

    count++;
  }

  return count;

}

function getParentNode (rootNode, target) {

  // if (!rootNode || rootNode.val === target) {
  //   return null;
  // }

  // if (rootNode.left && rootNode.left.val === target ||
  //   rootNode.right && rootNode.right.val === target) {
  //     return rootNode;
  // }

  // let left = getParentNode(rootNode.left, target);

  // if (left) {
  //   return left;
  // }

  // let right = getParentNode(rootNode.right, target);

  // if (right) {
  //   return right;
  // }

  // return undefined;

  if (rootNode.val === target) return null;

  let stack = [rootNode];

  while (stack.length > 0) {
    let current = stack.pop();

    if ((current.left && current.left.val === target) ||
        (current.right && current.right.val === target)) {
      return current;
    }

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return undefined;
}

function inOrderPredecessor (rootNode, target) {

  // let pred;

  // while(rootNode) {
  //   if (target < rootNode.val) {
  //     rootNode = rootNode.left;
  //   } else if (target > rootNode.val) {
  //     pred = rootNode;
  //     rootNode = rootNode.right;
  //   } else {
  //     if (rootNode.left) {
  //       pred = findMax(rootNode.left);
  //     }
  //     break;
  //   }

  // }

  // if (pred) {
  //   return pred.val
  // }
  // return null;

  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {

    if (current) {
      stack.push(current);
      current = current.left;

    } else if (!current && stack.length > 0) {
      current = stack.pop();

      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;

    } else {
      break;
    }
  }

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
