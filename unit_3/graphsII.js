// DFS Floodfill (Friend Circles)
const csFriendCircles = friendships => {
    let count = 0;
    for (let i = 0; i < friendships.length; i++) {
        for (let j = 0; j < friendships[i].length; j++) {
            if (friendships[i][j] === 1) {
                floodfill(friendships, i, j);
                count++
            }
        }
    }
    return count;
}

const floodfill = (matrix, row, col) => {
    const dfs = (row, col) => {
        if (row < 0 || row >= matrix.length || 
            col < 0 || col >= matrix.length || 
            matrix[row][col] !== 1) return
        matrix[row][col] = 2;
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }
    dfs(row, col)
}