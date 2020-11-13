// BST Range Sum
/*
     10
    /  \
   5   15
  /\    \
3   7    8
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const csBSTRangeSum = (root, lower, upper) => {
    if (root === null) return 0;
    if (root.value < lower) {
        return csBSTRangeSum(root.right, lower, upper)
    }
    if (root.value > upper) {
        return csBSTRangeSum(root.left, lower, upper)
    }
    let result = 0;
    result += root.value;
    result += csBSTRangeSum(root.left, lower, upper)
    result += csBSTRangeSum(root.right, lower, upper)
    return result;
}


// BST Invert
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const csBinaryTreeInvert = root => {
    if (root === null) return 0;
    if (root) {
        invert(root);
        csBinaryTreeInvert(root.left);
        csBinaryTreeInvert(root.right);
    }
    return root;
}

const invert = node => {
    let left = node.left;
    node.left = node.right;
    node.right = left;
}

//Find all Possible Paths
const csFindAllPathsFromAToB = graph => {
    const dfs = (node, path) => {
        path.push(node);
        if (node === n - 1) {
            result.push(path.slice());
            path.pop();
            return
        }
    
        for (const neighbor of graph[node]) {
            dfs(neighbor, path);
        }
        path.pop();
    }
    const result = [];
    const n = graph.length;
    dfs(0, []);
    return result;
}