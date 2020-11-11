// BFS & Level
const BFS = root => {
    const queue = [root];
    let level = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            console.log(node.value, level)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right); 
        }
        level++;
    }
}


// DFS
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const binaryTreeInOrderTraversal = root => {
    const dfs = node => {
        if (!node) return 
        dfs(node.left)
        result.push(node.value);
        dfs(node.right)
    }
    const result = [];
    dfs(root)
    return result;
}



// BFS
const traverseTree = t => {
    if (!t) return []
    const queue = [t];
    const result = [];
    while (queue.length) {
        const node = queue.shift();
        result.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right)
    }
    return result;
}  

// Tree Paths

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const treePaths = t => {
    const dfs = (node, path) => {
        if (!node) return
        
        path.push(node.value)
        
        if (!node.left && !node.right) {
            result.push(path.join("->"))
            path.pop()
            return
        } 

        dfs(node.left, path);
        dfs(node.right, path);
        path.pop();
    }
    if (!t) return []
    const result = [];
    dfs(t, []);
    return result;
}

