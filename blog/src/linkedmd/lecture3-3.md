---
date: "2020-12-30"
title: "알고리즘 공부 기록/강의3-3"
path: "/lecture/3-3"
---

## 3-3. BFS(Breadth-First-Search)
- BFS는 __너비 우선 탐색__ 이라고도 부르며, 그래프에서 __가까운 노드부터 우선적으로 탐색하는 알고리즘__
- BFS는 __큐 자료구조__ 를 이용하며, 구체적인 동작과정은 다음과 같음
    1. 탐색 시작 노드를 큐에 삽입하고 방문처리를 함.
    1. 큐에서 노드를 꺼낸 뒤에 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문처리함.
    1. 더 이상 2번의 과정을 수행할 수 없을 때까지 반복함.

- BFS 동작 예시
![image](https://user-images.githubusercontent.com/71132893/103354289-86d96c80-4aee-11eb-89c4-7b7f67c0f21e.png)
![image](https://user-images.githubusercontent.com/71132893/103354299-8ccf4d80-4aee-11eb-9b01-6159043517f7.png)
![image](https://user-images.githubusercontent.com/71132893/103354314-948ef200-4aee-11eb-986a-d34b26632290.png)
![image](https://user-images.githubusercontent.com/71132893/103354328-9f498700-4aee-11eb-8562-da8dd41a4535.png)
![image](https://user-images.githubusercontent.com/71132893/103354333-a2dd0e00-4aee-11eb-9ba6-8fd6b7405a2a.png)
![image](https://user-images.githubusercontent.com/71132893/103354341-a7a1c200-4aee-11eb-8d22-b052ddeff3d1.png)
![image](https://user-images.githubusercontent.com/71132893/103354347-ac667600-4aee-11eb-9ad4-2086648aac43.png)

- BFS 소스코드 예제(Python)

```python
from collections import deque

#BFS 메서드 정의
def bfs(graph,start,visited):
    #큐 구현을 위해 deque 라이브러리 사용
    queue = deque([start])
    #현재 노드를 방문 처리
    visited[start]=True
    #큐가 빌 때까지 반복
    while queue:
        #큐에서 하나의 원소를 뽑아 출력하기
        v = queue.popleft()
        print(v,end=' ')
        #아직 방문하지 않은 인접한 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i]=True

# 각 노드가 연결된 정보를 표현 (2차원 리스트)
graph=[
    [], # 첫번째 노드는 생략함
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
bfs(graph, 1, visited)

#실행 결과 : 1 2 7 6 8 3 4 5
```

### <문제> 미로 탈출
- 문제 설명
    - 캐릭터는 N x M 크기의 직사각형 형태의 미로에 갇혔다. 미로에는 여러 마리의 괴물이 있어 이를 피해 탈출해야 한다.
    - 캐릭터의 위치는(1,1)이며, 미로의 출구는(N,M)의 위치에 존재하며 한 번에 한 칸씩 이동할 수 있다. 이때 괴물이 있는 부분은 0으로, 괴물이 없는 부분은 1로 표시되어 있다. 미로는 반드시 탈출할 수 있는 형태로 제시된다.
    - 이때 캐릭터가 탈출하기 위해 움직여야 하는 최소 칸의 개수를 구하시오. 칸을 셀 때는 시작 칸과 마지막 칸을 모두 포함해서 계산하여야 한다.

- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103364616-94e4b880-4b01-11eb-8d9b-a2cd9ea229c0.png)

- 문제 해결 아이디어
    - BFS는 시작 지점에서 가까운 노드부터 차례대로 그래프의 모든 노드를 탐색한다.
    - 상, 하, 좌, 우로 연결된 모든 노드로의 거리가 1로 동일하다.
        - 따라서 (1,1)지점부터 BFS를 수행하여 모든 노드의 최단 거리 값을 기록하면 해결할 수 있다.
    - 예시로 다음과 같이 3X3 크기의 미로가 있다고 가정해보자.
    ![image](https://user-images.githubusercontent.com/71132893/103366156-2efa3000-4b05-11eb-9fa5-bc91a392befe.png)
![image](https://user-images.githubusercontent.com/71132893/103366173-41746980-4b05-11eb-873b-92dcd81a13cb.png)
![image](https://user-images.githubusercontent.com/71132893/103366187-46d1b400-4b05-11eb-82f9-dcfe8bbccd32.png)
![image](https://user-images.githubusercontent.com/71132893/103366212-594bed80-4b05-11eb-9f9c-43f7717cdc63.png)

- 답안 예시(Python)

```python
from collections import deque
#BFS 소스코드 구현
def bfs(x,y):
    #큐 구현을 위해 deque라이브러리 사용
    queue=deque()
    queue.append((x,y))
    #큐가 빌 때까지 반복하기
    while queue:
        x,y = queue.popleft()
        #현재 위치에서 4가지 방향으로의 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 미로 찾기 공간을 벗어난 경우 무시
            if nx< 0 or nx >=n or ny<0 or ny>=m:
                continue
            #벽인 경우 무시
            if graph[nx][ny]==0:
                continue
            # 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
            if graph[nx][ny]==1:
                graph[nx][ny]==graph[x][y]+1
                queue.append((nx,ny))
    #가장 오른쪽 아래까지의 최단거리 변환
    return graph[n-1][m-1]                

#N,M을 공백을 기준으로 구분하여 입력받기
n,m = map(int,input().split())

#2차원 리스트의 맵 정보 입력 받기
graph=[]
for i in range(n):
    graph.append(list(map(int,input())))

#이동할 네 가지 방향 정의
dx=[-1,1,0,0]
dy=[0,0,-1,1]

#BFS를 수행한 결과 출력
print(bfs(0,0))
```

- 답안 예시(javascript)

```js
const n=prompt('세로 N:')
const m=prompt('가로 M:')
const graph=[]

for(let i=0;i<n;i++){
    const line=prompt(`line No.${i+1} max:${m}`)
    graph.push([])
    
    for(let j=0;j<m;j++){
        graph[i][j]=line[j]
        console.log(line[j])
    }
}

// const n=5
// const m=6
// const graph=[
//     ['1','0','1','0','1','0'],
//     ['1','0','1','1','1','1'],
//     ['1','0','0','1','0','0'],
//     ['1','1','1','1','1','1'],
//     ['1','1','1','1','1','1']
// ]

dx=[-1,1,0,0]
dy=[0,0,-1,1]

queue=[]
function bfs(x,y){
    queue.push(x)
    queue.push(y)
    while(queue.length!==0){
        const x=queue.shift()
        const y=queue.shift()
        for(let i=0;i<dx.length;i++){
            nx = x+dx[i]
            ny = y+dy[i]
            if(nx<0||nx>=n||ny<0||ny>=m){
                continue
            }
            if(graph[nx][ny]==='0'){
                continue
            }
            if(graph[nx][ny]==='1'){
                graph[nx][ny]=graph[x][y]+1
                queue.push(nx)
                queue.push(ny)
            }
        }
    }
    return graph[n-1][m-1].length
}

console.log(bfs(0,0))
```