class Node{
    constructor(x, y, value, weight){ 
        this.x = x;
        this.y = y;
        this.value = value;
        this.weight = weight;

        //used in search every search algorithm
        this.visited = false;

        //maze visited (for maze generation purposes)
        this.mv = false;
        this.parent = null;

        //used for A* algo
        this.dist = Number.MAX_SAFE_INTEGER;
    }

    equals(n){
        if(this.x == n.x && this.y == n.y && this.value == n.value)
            return true;
        return false;
    }

    unvisitedNeighbors(){
        let unvisited = [];
        if(this.y > 0 && !grid[this.y-1][this.x].mazeVisited)
            unvisited.push(grid[this.y-1][this.x]);
        if(this.x > 0 && !grid[this.y][this.x-1].mazeVisited)
            unvisited.push(grid[this.y][this.x-1]);
        if(this.y < rows-1 && !grid[this.y+1][this.x].mazeVisited)
            unvisited.push(grid[this.y+1][this.x]);
        if(this.x < cols-1 && !grid[this.y][this.x+1].mazeVisited)
            unvisited.push(grid[this.y][this.x+1]);
        return unvisited;
    }

    getEdgeWeight(current, neighbor) {
        return Math.abs(current.weight - neighbor.weight);
    }

    getNeighbors() {
        let neighbors = [];
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) {
              continue;
            }
            if (i === 0 || j === 0) { // only include horizontally or vertically adjacent cells
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
