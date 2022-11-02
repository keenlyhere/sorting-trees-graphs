/*
     1
   /   \
  2     3
 / \   / \
4   5 6   7

*/

function linkedListSearch(linkedList, target) {
    // base case: empty list
    if (linkedList.head === null) return false;

    // check if current node's value matches target
    if (linkedList.head.value === target) return true;

    // if not, recursively search rest of linked list
    return linkedListSearch(linkedList.head.next);
}

function binaryTreeSearch(root, target) {
    // base case: if tree is null
    if (root === null) return false;

    // if current node's value matches target
    if (root.value = target) return true;

    // otherwise, search left subtree for target
    if (binaryTreeSearch(root.left, target)) return true;

    // if value isn't in left subtree, try right subtree
    return binaryTreeSearch(root.right, target);
}

function binaryTreeSum(root) {
    // check base case
    if (root === null) return 0;

    // recursively sum up the left and right trees;
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    // return value plus left and right totals;
    return root.value + leftSum + rightSum;
}

