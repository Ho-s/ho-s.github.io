---
date: "2020-12-30"
title: "알고리즘 공부 기록/강의3-2"
path: "/lecture/3-2"
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
#DFS 메서드 정의
def dfs(graph,v,visited):
    #현재 노드를 방문 처리
    visited[v]=True
    print(v,end=' ')
    #현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for i in graph[v]:
        if not visited[i]:
            dfs(graph,i,visited)

# 각 노드가 연결된 정보를 표현 (2차원 리스트)
graph=[
    [],# 첫번째 노드는 생략함
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


#실행 결과 : 1 2 7 6 8 3 4 5
```



### <문제>음료수 얼려 먹기
- 문제 설명
    - N x M 크기의 얼음 틀이 있다. 구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시된다. 구멍이 뚫려있는 부분끼리 상, 하, 좌, 우로 붙어있는 경우 서로 연결되어 있는 것으로 간주한다. 이때 <u>얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하는 프로그램을 작성</u>하시오. 다음의 4 x 5 얼음 틀 예시에서는 아이스크림이 총 3개 생성된다.
    ![image](https://user-images.githubusercontent.com/71132893/103355843-affbfc00-4af2-11eb-96bd-a2f9ae4939a3.png)
- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103355858-b7230a00-4af2-11eb-8e6c-c1102a5c7137.png)
- 문제 해결 아이디어
    - 이 문제는 DFS 혹은 BFS로 해결할 수 있다. 일단 앞에서 배운 대로 얼음을 얼릴 수 있는 공간이 상, 하, 좌, 우로 연결되어 있다고 표현할 수 있으므로 그래프 형태로 모델링 할 수 있다. 다음과 같이 3 x 3 크기의 얼음 틀이 있다고 가정해보자.
    ![image](https://user-images.githubusercontent.com/71132893/103356843-23067200-4af5-11eb-8cd6-4dffbe5a3d72.png)
- DFS를 활용한 알고리즘은 다음과 같다.
    1. 특정한 지점의 주변 상, 하, 좌, 우를 살펴본 뒤에 주변 지점 중에서 값이 '0'이면서 아직 방문하지 않은 지점이 있다면 해당지점을 방문한다.
    1. 방문한 지점에서 다시 상, 하, 좌, 우를 살펴보면서 방문을 진행하는 과정을 반복하면, __연결된 모든 지점을 방문__ 할 수 있다.
    1. 모든 노드에 대하여 1~2번 과정을 반복하며, 방문하지 않은 지점의 수를 카운트한다.
- 답안 예시(python)

```python
#DFS로 특정 노드를 방문하고 연결된 모든 노드들도 방문
def dfs(x,y):
    #주어진 범위를 벗어나는 경우에는 즉시 종료
    if x<=-1 or x>=n or y<=-1 or y>=m:
        return False
    #현재 노드를 아직 방문하지 않았다면
    if graph[x][y]==0:
        #해당 노드 방문 처리
        graph[x][y]=1
        #상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return True
    return False

#N,M을 공백을 기준으로 구분하여 입력받기
n,m = map(int,input().split())

#2차원 리스트의 맵 정보 입력 받기
graph=[]
for i in range(n):
    graph.append(list(map(int,input())))

#모든 노드(위치)에 대하여 음료수 채우기
result=0
for i in range(n):
    for j in range(m):
        #현재 위치에서 DFS수행
        if dfs(i,j)==True:
            result+=1

print(result)
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
    }
}

function dfs(x,y){
    if(x<=-1 || x>=n || y<=-1 || y>=m){
        return false
    }
    if(graph[x][y]==='0'){
        graph[x][y]='1'
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return true
    }
    return false
}

let count=0
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(dfs(i,j)===true){
            count++
        }
    }
}

console.log(count)
```