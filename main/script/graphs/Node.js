class Node{
  constructor(x, y, value, weight){ 
      this.x = x;
      this.y = y;
      this.value = value;
      this.weight = weight;
      this.neighbors = [];
      this.visited = false;
      this.dist = Number.MAX_SAFE_INTEGER;
  }

  equals(n){
      if(this.x == n.x && this.y == n.y && this.value == n.value)
          return true;
      return false;
  }

  getEdgeWeight(neighbor) {
    return neighbor.weight
}


  getNeighbors() {
      let neighbors = [];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          if (i === 0 || j === 0) {
            let x = this.x + i;
            let y = this.y + j;
            if (x >= 0 && x < cols && y >= 0 && y < rows) {
              neighbors.push(grid[y][x]);
            }
          }
        }
      }
      return neighbors;
    }
}
