"""
Basic Implementation of Dijstras Algorithm 
Author: Forrest Cai
"""

import Graph 
import heapq

def Dijkstras(graph,src,dest):
  """
  Impementation of Dijstras Algorithm.

  Parameter graph: 

  Parameter s:
  
  Parameter d:
  """
  #Priority Queue
  pq = []
  heapq.heappush(pq, (0,src))

  distances = {}
  for vertex in graph.vertices:
    distances[vertex] = float('infinity')
  distances[src] = 0

  parents = {}
  for vertex in graph.vertices:
    parents[vertex] = None 

  while pq:
    current_distance,current_vertex = heapq.heappop(pq)
    if current_vertex == dest:
      path = []
      while current_vertex is not None:
        path.insert(0,current_vertex)
        current_vertex = parents[current_vertex]

      return current_distance,path
    if current_distance > distances[current_vertex]:
      continue

    for edge in graph.vertices[current_vertex].adjacency_list:
      neighbor = edge.dest
      weight = edge.weight 
      distance = current_distance + weight 
      if distance < distances[neighbor.id]:
        distances[neighbor.id] = distance
        parents[neighbor.id] = current_vertex
        heapq.heappush(pq,(distance,neighbor.id))
      
  return float('infinity'), None

dg = Graph.DG()

vertices = [0, 1, 2, 3, 4, 5]
for v in vertices:
    dg.add_vertex(v)

edges = [(0, 4,2), (0, 5,3), (1, 2,2), (1, 3,6), (2, 1,3), (2,3,4), (2, 5,3), (3, 1,2), (3, 4,1), (4, 2,6), (4, 0,2), (5, 3,1), (5, 4,5)]
for edge in edges:
    dg.add_edge(edge[0], edge[1],edge[2])

distance,path = Dijkstras(dg,0,1)
print(distance)
print(path)

distance,path = Dijkstras(dg,0,2)
print(distance)
print(path)
distance,path = Dijkstras(dg,0,3)
print(distance)
print(path)
distance,path = Dijkstras(dg,0,4)
print(distance)
print(path)
distance,path = Dijkstras(dg,0,5)
print(distance)
print(path)
def Dijkstras_Neg(graph,s,d):
  """
  Implementation of Dijkstas that accounts for negative edges
  """