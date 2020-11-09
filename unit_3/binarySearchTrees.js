// Check to see if it is a balanced BST

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

const checkHeight = root => {
    if (!root) return -1;
    const leftHeight = checkHeight(root.left);
    const rightHeight = checkHeight(root.right);
    const heightDiff = Math.abs(leftHeight - rightHeight);
    return heightDiff > 1 ? -1 : Math.max(leftHeight, rightHeight) + 1;
}

const balancedBinaryTree = root => {
    return checkHeight(root) !== -1;
}

// Minimum Depth Search

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const minimumDepthBinaryTree = root => {
    if (!root) return 0;
    if (!root.left) return minimumDepthBinaryTree(root.right) + 1;
    if (!root.right) return minimumDepthBinaryTree(root.left) + 1;
    return Math.min(minimumDepthBinaryTree(root.left), minimumDepthBinaryTree(root.right)) + 1;
}

