---
date: "2020-12-01"
title: "알고리즘 공부 기록/강의3-2"
path: "lectureThreebyTwo"
---

## 3-2. DFS(Depth-Frist Search)
- DFS는 __깊이 우선 탐색__ 이라고도 부르며 그래프에서 __깊은 부분을 우선적으로 탐색하는 알고리즘__ 임.
- DFS는 __스택 자료구조(혹은 재귀 함수)를 이용__ 하며, 구체적인 동작 과정은 다음과 같음.
    1. 탐색 시작 노드를 스택에 삽입하고 방문 처리를 함.
    1. 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문 처리를 함. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼냄.
    1. 더 이상 2번의 과정을 수행할 수 없을 때까지 반복

- DFS 동작 예시
![1](https://user-images.githubusercontent.com/71132893/103350934-edf22380-4ae4-11eb-9b51-45c65581c503.png)
![2](https://user-images.githubusercontent.com/71132893/103350935-ee8aba00-4ae4-11eb-9f95-2b9f6fa3e59a.png)
![3](https://user-images.githubusercontent.com/71132893/103350936-ee8aba00-4ae4-11eb-88c6-dffe89b39ced.png)
![4](https://user-images.githubusercontent.com/71132893/103350939-ef235080-4ae4-11eb-95d3-e35fdfc5cbce.png)
![5](https://user-images.githubusercontent.com/71132893/103350940-efbbe700-4ae4-11eb-8fe1-a95e64def7c3.png)
![6](https://user-images.githubusercontent.com/71132893/103350943-efbbe700-4ae4-11eb-8917-b67dc8813982.png)
![7](https://user-images.githubusercontent.com/71132893/103350928-ed598d00-4ae4-11eb-9876-3acbe64c661a.png)

- DFS소스코드 예제(python)

```python
# 각 노드가 연결된 정보를 표현 (2차원 리스트)
graph=[
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

#각 노드가 방문된 정보를 표현 (1차원 리스트)
visited = [False]*9

#정의된 DFS 함수 호출
dfs(graph, 1, visited)

#DFS 메서드 정의
def dfs(graph,v,visited):
    #현재 노드를 방문 처리
    visited[v]=True
    print(v,end=' ')
    #현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for i in graph[v]:
        if not visited[i]:
            dfs(graph,i,visited)

#실행 결과 : 1 2 7 6 8 3 4 5
```

## BFS(Breadth-First-Search)
- BFS는 __너비 우선 탐색__ 이라고도 부르며, 그래프에서 __가까운 노드부터 우선적으로 탐색하는 알고리즘__
- BFS는 __큐 자료구조__ 를 이용하며, 구체적인 동작과정은 다음과 같음
    1. 탐색 시작 노드를 큐에 삽입하고 방문처리를 함.
    1. 큐에서 노드를 꺼낸 뒤에 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문처리함.
    1. 더 이상 2번의 과정을 수행할 수 없을 때까지 반복함.
