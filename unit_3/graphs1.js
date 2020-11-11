// BFS

const BFS = root => {
    const queue = [root];
    const visited = new Set();
    let level = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            console.log(node.value, level)
            for (const neighbor of graph[node]) {
                if (visited.has(neighbor)) continue
                visited.add(neighbor);
                queue.push(neighbor)
            }
        }
        level++;
    }
}

// DFS

const binaryTreeInOrderTraversal = root => {
    const dfs = node => {
        for (const neighbor of graph[node]) {
            if (visited.has(neighbor)) continue
            visited.add(neighbor)
            dfs(neighbor)
        }
    }
    const visited = new Set();
    dfs(root)
    return result;
}

// Find All Paths to n - 1 in a DAG
const csFindAllPathsFromAToB = graph => {
    const dfs = (node, path) => {        
        path.push(node)
        
        if (node === n - 1) {
            result.push(path.slice())
            path.pop()
            return
        } 

        for (const neighbor of graph[node]) {
            dfs(neighbor, path)
        }
        path.pop();
    }
    const result = [];
    const n = graph.length;
    dfs(0, []);
    return result;
}
