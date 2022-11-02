function searchBST(root, target) {
    if (root === null) return false;

    if (target === root.value) return true;

    if (target < root.value) return searchBST(root.left, target);

    if (target > root.value) return searchBST(root.right, target);
}

function searchBSTIterative(root, target) {
    let currentNode = root;

    while (currentNode !== null) {
        if (target === currentNode.value) return true;

        if (target < currentNode.value) currentNode = currentNode.left;

        if (target > currentNode.value) currentNode = currentNode.right;
    }

    return false;
}
