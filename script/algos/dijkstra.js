function dijkstra(instantaneous) {
    // Initialize distance and visited arrays
    let distance = [];
    let visited = [];
    for (let y = 0; y < rows; y++) {
        distance[y] = [];
        visited[y] = [];
        for (let x = 0; x < cols; x++) {
            distance[y][x] = Infinity;
            visited[y][x] = false;
        }
    }
    // Set distance of start node to 0 and add it to the priority queue
    let startNode = getStartNode();
    console.log(startNode)
    distance[startNode.y][startNode.x] = 0;
    let queue = new PriorityQueue();
    queue.enqueue(startNode, 0);

    while (!queue.isEmpty()) {
        // Get the node with the lowest priority (distance)
        let current = queue.dequeue();
    
        // Mark current node as visited
        visited[current.y][current.x] = true;
    
        // Check if we've reached the finish node
        if (current.equals(getFinishNode())) {
            break;
        }
    
        // Check neighbors and update their distances if needed
        let neighbors = current.getNeighbors();
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!visited[neighbor.y][neighbor.x] && neighbor.value != 3) {
                let tentativeDistance = distance[current.y][current.x] + current.getEdgeWeight(current, neighbor);
                if (tentativeDistance < distance[neighbor.y][neighbor.x]) {
                    distance[neighbor.y][neighbor.x] = tentativeDistance;
                    neighbor.distance = tentativeDistance;
                    neighbor.parent = current;
                    if (!instantaneous) {
                        // Add neighbor to the priority queue with its new distance
                        queue.enqueue(neighbor, tentativeDistance);
                    }
                }
            }
        }
    
        // Update the pathRenderQueue with the new shortest path
        if (!instantaneous) {
            pathRenderQueue = [];
            let current = getFinishNode();
            while (current.parent != null && current.parent != 2 && current.parent != 3) {
                current.value = 4;
                pathRenderQueue.push(current);
                current = current.parent;
            }
            pathRenderQueue.reverse();
            pathRenderQueue.push(getFinishNode());
        }
    }    
}



class PriorityQueue {
    constructor() {
      this.elements = [];
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  
    enqueue(item, priority) {
      let added = false;
      for (let i = 0; i < this.elements.length; i++) {
        if (priority < this.elements[i].priority) {
          this.elements.splice(i, 0, { item, priority });
          added = true;
          break;
        }
      }
      if (!added) {
        this.elements.push({ item, priority });
      }
    }
  
    dequeue() {
      return this.elements.shift().item;
    }
  }
  