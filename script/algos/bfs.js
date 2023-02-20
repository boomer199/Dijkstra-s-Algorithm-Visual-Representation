function bfs(instantaneous) {
    let queue = [];
    let startNode = getStartNode();
    startNode.visited = true;
    queue.push(startNode);
    let current = null;
    while (queue.length > 0) {
    current = queue.shift();
    if (current.equals(getFinishNode())) {
    break;
    }
        //north
        if (current.y > 0 && !grid[current.y - 1][current.x].visited && grid[current.y - 1][current.x].value != 3) {
            let neighbor = grid[current.y - 1][current.x];
            visitedRenderQueue.push(neighbor);
            neighbor.visited = true;
            neighbor.parent = current;
            neighbor.distance = current.distance + current.getEdgeWeight(current, neighbor); // add weight of edge
            queue.push(neighbor);
        }
    
        //south
        if (current.y < rows - 1 && !grid[current.y + 1][current.x].visited && grid[current.y + 1][current.x].value != 3) {
            let neighbor = grid[current.y + 1][current.x];
            visitedRenderQueue.push(neighbor);
            neighbor.visited = true;
            neighbor.parent = current;
            neighbor.distance = current.distance + current.getEdgeWeight(current, neighbor); // add weight of edge
            queue.push(neighbor);
        }
    
        //east
        if (current.x < cols - 1 && !grid[current.y][current.x + 1].visited && grid[current.y][current.x + 1].value != 3) {
            let neighbor = grid[current.y][current.x + 1];
            visitedRenderQueue.push(neighbor);
            neighbor.visited = true;
            neighbor.parent = current;
            neighbor.distance = current.distance + current.getEdgeWeight(current, neighbor); // add weight of edge
            queue.push(neighbor);
        }
    
        //west
        if (current.x > 0 && !grid[current.y][current.x - 1].visited && grid[current.y][current.x - 1].value != 3) {
            let neighbor = grid[current.y][current.x - 1];
            visitedRenderQueue.push(neighbor);
            neighbor.visited = true;
            neighbor.parent = current;
            neighbor.distance = current.distance + current.getEdgeWeight(current, neighbor); // add weight of edge
            queue.push(neighbor);
        }
    }
    
    // Here's the part where we handle the weights
    // Instead of just taking the shortest distance, we now take the shortest weighted distance
    if (instantaneous) {
        pathRenderQueue = [];
        visitedRenderQueue = [];
        current = current.parent;
        while (current.parent != null) {
            current.value = 4;
            current = current.parent;
        }
    }
    
    //remove the finish node from the visited list (for rendering purposes)
    for (let i = 0; i < visitedRenderQueue.length; i++) {
        if (visitedRenderQueue[i].value == 2) {
            visitedRenderQueue.splice(i, 1);
        }
    }
    
    // Here's the part where we handle the weights
    // Instead of just taking the shortest distance, we now take the shortest weighted distance
    pathRenderQueue = [];
    if (!current.equals(getFinishNode())) {
        return null;
    }
    current = current.parent;
    while (current.parent != null) {
        pathRenderQueue.push(current);
        current = current.parent;
    }
}    