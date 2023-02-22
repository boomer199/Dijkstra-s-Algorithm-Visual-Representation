function aStar() {
    // initialize the distance and visited arrays
    let distance = [];
    let visited = [];
    for (let i = 0; i < rows; i++) {
      distance[i] = [];
      visited[i] = [];
      for (let j = 0; j < cols; j++) {
        distance[i][j] = Infinity;
        visited[i][j] = false;
      }
    }
  
    distance[getStartNode().y][getStartNode().x] = 0;
    // initialize priority queue with start node
    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(getStartNode(), 0);
  
    while (!priorityQueue.isEmpty()) {
      algoIterations++;
      // dequeue the node with the lowest distance value
      let current = priorityQueue.dequeue();
  
      // if the current node is the finish node, we can exit the loop
      if (current.equals(getFinishNode())) {
        break;
      }
  
      // mark the current node as visited
      visited[current.y][current.x] = true;
      if(current.value != 1 && current.value != 2 && current.value != 3){
        visitedRenderQueue.push(current)
      }
  
      // loop through all the neighbors of the current node
      for (let i = 0; i < current.getNeighbors().length; i++) {
  
        let neighbor = current.getNeighbors()[i];
  
        // skip wall nodes
        if (neighbor.value == 3) {
          continue;
        }
  
        // calculate the tentative distance to the neighbor through the current node
        let weight = current.getEdgeWeight(current, neighbor);
        let tentativeDistance = distance[current.y][current.x] + weight;
  
        // calculate the heuristic function for the neighbor
        let heuristic = euclideanDistance(neighbor, getFinishNode());
  
        // if the neighbor has not been visited and the tentative distance to the neighbor plus the heuristic is less than its current distance, update its distance and add it to the priority queue
        if (!visited[neighbor.y][neighbor.x] && tentativeDistance + heuristic < distance[neighbor.y][neighbor.x]) {
          distance[neighbor.y][neighbor.x] = tentativeDistance + heuristic;
          neighbor.parent = current;
          priorityQueue.enqueue(neighbor, tentativeDistance + heuristic);
        }
      }
    }
  
    // if there is no path to the finish node, return null
    if (!getFinishNode()) {
      return null;
    }
  
    // backtrack from the finish node to get the shortest path
    let path = [];
    let current = getFinishNode();
    while (current.parent != null) {
      path.unshift(current);
      current = current.parent;
    }
    path.unshift(current);
  
    let rowInput = Math.round(document.getElementById('rows').value);
    rows = rowInput >= 5 ? rowInput : defaultRows;
    let colInput = Math.round(document.getElementById('cols').value);
    cols = colInput >= 5 ? colInput : defaultCols;
  
    visitedRenderQueue.push(current)
  
    // mark the nodes on the shortest path as visited (for rendering purposes)
    path.reverse()
  for (let i = 0; i < path.length; i++) {
    if (path[i] != getStartNode() && path[i] != getFinishNode()) {
      algoCost += path[i].weight;
      pathRenderQueue.push(path[i])
    }
  }

  // return the shortest path
  return path;
}



function euclideanDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  