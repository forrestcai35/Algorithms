import Graph 

def DFS_rec(root,visited,val):
  visited[root] = True 
  for x in root.adjacency_list:
      if x not in visited:
         DFS_rec(x,visited,val)

def DFS(root,val):
  """
  Basic Implementation of DFS 
  """
  visited = False * len(root.adjacency_list)

  for i in range(len(root.adjacency_list)):
     if not visited[i]:
        DFS_rec(visited,i,val)


