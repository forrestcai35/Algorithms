from collections import deque
import Graph
  
def BFS(graph,root,val):
    """
    Basic implementation of Bredth First Search on a graph.
    """
    q = deque()
    visited = [False] * len(root.adjacency_list)

    visited[root] = True
    q.append(root)

    while q:
        #we get the current value from the queue
        curr = q.popleft()
        #we look through its neighbors
        for x in curr.adjacency_list:
            visited[x] = True
            #add each value to the queue
            q.append(x)





