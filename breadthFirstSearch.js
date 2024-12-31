function breadthFirstSearch(graph, start) {
  const visited = [];
  const queue = [start];

  if (!graph[start]) {
    return visited;
  }
  
  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.includes(node)) {
      visited.push(node);

      for (const neighbor of graph[node]) {
        if (!visited.includes(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return visited;
}

module.exports = breadthFirstSearch;