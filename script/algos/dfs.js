function dfs(){

    let finishNode = getFinishNode();
    let current = null;
    let stack = [getStartNode()];

    while(stack.length > 0){
        current = stack.pop();

        if(current.equals(finishNode)){
            current = current.parent;
            while(current.parent != null){
                pathRenderQueue.push(current);
                current = current.parent;
            }
            break;
        }

        if(!current.visited){
            current.visited = true;

            //add to the render queue except for the start node
            if(current.value != 1)
                visitedRenderQueue.push(current);

            //north
            if(current.y > 0 && !grid[current.y-1][current.x].visited && grid[current.y-1][current.x].value != 3){
                let neighbor = grid[current.y-1][current.x];
                neighbor.parent = current;
                stack.push(neighbor);
            }

            //south
            if(current.y < rows-1 && !grid[current.y+1][current.x].visited && grid[current.y+1][current.x].value != 3){
                let neighbor = grid[current.y+1][current.x];
                neighbor.parent = current;
                stack.push(neighbor);
            }

            //east
            if(current.x < cols-1 && !grid[current.y][current.x+1].visited && grid[current.y][current.x+1].value != 3){
                let neighbor = grid[current.y][current.x+1];
                neighbor.parent = current;
                stack.push(neighbor);
            }

            //west
            if(current.x > 0 && !grid[current.y][current.x-1].visited && grid[current.y][current.x-1].value != 3){
                let neighbor = grid[current.y][current.x-1];
                neighbor.parent = current;
                stack.push(neighbor);
            }
        }
    }
    console.log(current)
    return current;
}