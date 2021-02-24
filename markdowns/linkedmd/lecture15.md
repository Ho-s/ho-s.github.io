---
date: "2021-01-18"
title: "알고리즘 공부 기록/강의15"
path: "/lecture/15"
---

## 최소 공통 조상(Lowest Common Ancestor)
- **최소 공통 조상(LCA)** 문제는 <u>두 노드의 공통된 조상 중에서 가장 가까운 조상을 찾는 문제</u>이다.
![image](https://user-images.githubusercontent.com/71132893/104869618-d1c9ff80-5989-11eb-934a-d86ec5ebbe94.png)
![image](https://user-images.githubusercontent.com/71132893/104869630-d7274a00-5989-11eb-85a4-48cc3d3ecc32.png)

### 기초 문제
- **BOJ'LCA'** 문제:[https://www.acmicpc.net/problem/11437](https://www.acmicpc.net/problem/11437)
- N(2 <= N <= 50,000)개의 정점으로 이루어진 트리가 주어진다. 트리의 각 정점은 1번부터 N번까지 번호가 매겨져 있으며, 루트는 1번이다. 두 노드의 쌍 M(1 <= M <= 10,000)개가 주어졌을 때, 두 노드의 가장 가까운 공통 조상이 몇 번인지 출력한다.
- 이 문제를 어떻게 해결할 수 있을까?

### 기본적인 최소 공통 조상(LCA) 알고리즘
- **최소 공통 조상** 찾기 알고리즘은 다음과 같다
1. 모든 노드에 대한 깊이(depth)를 계산한다.
1. 최소 공통 조상을 찾을 두 노드를 확인한다.
    1. 먼저 두 노드의 깊이(depth)가 동일하도록 거슬러 올라간다.
    1. 이후에 부모가 같아질 때까지 반복적으로 두 노드의 부모 방향으로 거슬러 올라간다.
1. 모든 LCA(a, b) 연산에 대하여 2번의 과정을 반복한다.

- 연산과정 살펴보기
![image](https://user-images.githubusercontent.com/71132893/104869783-2ec5b580-598a-11eb-93b9-95723c3b79c1.png)
![image](https://user-images.githubusercontent.com/71132893/104869804-38e7b400-598a-11eb-8e5a-b09b5c806aa6.png)
![image](https://user-images.githubusercontent.com/71132893/104869810-3dac6800-598a-11eb-8a69-7fe219021f16.png)

- 구현 예제(Python)

```python
import sys
sys.setrecursionlimit(int(1e5)) #런타임 오류 피하기
n = int(input())

parent = [0] 8 (n + 1) #부모 노드 정보
d = [0] * (n + 1) #각 노드까지의 깊이
c = [0] * (n + 1) #각 노드의 깊이가 계산되엇는지 여부
graph = [[] for _ in range(n + 1)] #그래프 정보

for _ in range(n - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# 루트 노드부터 시작하여 깊이(depth)를 구하는 함수
def dfs(x, depth):
    c[x] = True
    d[x] = depth
    for y in graph[x]:
        if c[y]:
            continue
        parent[y] = x
        dfx(y, depth + 1)

# A와 B의 최소 공통 조상을 찾는 함수
def lca(a,b):
    #먼저 깊이가 동일하도록
    while d[a] != d[b]:
        if d[a] > d[b]:
            a= parent[a]
        else:
            b=parent[b]
    #노드가 같아지도록
    while a !=b:
        a=parent[a]
        b=parent[b]
    return a

dfs(1,0) #루트 노드는 1번 노드

m = int(input())

for i in range(m):
    a,b = map(int,input().split())
    print(lca(a,b))
```

- 시간 복잡도 분석
    - 매 쿼리마다 부모 방향으로 거슬러 올라가기 위해 최악의 경우 O(N)의 시간 복잡도가 요구된다.
        - 따라서 모든 쿼리를 처리할 때의 시간 복잡도는 O(NM)이다.


### 심화 문제
- **BOJ'LCA 2'** 문제:[https://www.acmicpc.net/problem/11438](https://www.acmicpc.net/problem/11438)
- N(2 <= N <= 100,000)개의 정점으로 이루어진 트리가 주어진다. 트리의 각 정점은 1번부터 N번까지 번호가 매겨져 있으며, 루트는 1번이다. 두 노드의 쌍 M(1 <= M <= 100,000)개가 주어졌을 때, 두 노드의 가장 가까운 공통 조상이 몇 번인지 출력한다.
- 이 문제를 어떻게 해결할 수 있을까?

### 최소 공통 조상(LCA) 알고리즘 개선하기
- 각 노드가 <u>거슬러 올라가는 속도를 빠르게 만드는 방법</u>에 대하여 고민해보자
    - 만약 총 **15칸** 거슬러 올라가야 한다면?
        - 8칸 -> 4칸 -> 2칸 -> 1칸
- 2의 제곱 형태로 거슬러 올라가도록 하면 O(logN)의 시간 복잡도를 보장할 수 있다.
- 메모리를 조금 더 사용하여 각 노드에 대하여 2<sup>*i*</sup>번째 부모에 대한 정보를 기록하자.

- 모든 노드의 깊이와 부모 구하기
![image](https://user-images.githubusercontent.com/71132893/104870342-a0eaca00-598b-11eb-8d6f-070d68746a84.png)

- 연산 과정 살펴보기
![image](https://user-images.githubusercontent.com/71132893/104870386-be1f9880-598b-11eb-8a3f-15a584af72ab.png)
![image](https://user-images.githubusercontent.com/71132893/104870391-c24bb600-598b-11eb-8f85-d24d752e40c5.png)

- 시간 복잡도 분석
    - 다이나믹 프로그래밍을 이용해 시간 복잡도를 개선할 수 있다.
        - 세그먼트 트리를 이용하는 방법도 존재한다.
    - 매 쿼리마다 부모를 거슬러 올라가기 위해 **O(logN)**의 복잡도가 필요하다.
        - 따라서 모든 쿼리를 처리할 때의 시간 복잡도는 **O(logN)**이다.

- 구현 예제(python)

```python
import sys
input = sys.stdin.readline #시간 초과를 피하기 위한 빠른 입력 함수
sys.setrecursionlimit(int(1e5)) #런타임 오류 피하기
LOG = 21 # 2^20=1,000,000

n=int(input())
parent = [[0] * LOG for _ in range(n+1)] #부모 노드 정보
d = [0] * (n + 1) #각 노드까지의 깊이
c = [0] * (n + 1) #각 노드의 깊이가 계산되엇는지 여부
graph = [[] for _ in range(n + 1)] #그래프 정보

for _ in range(n - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# 루트 노드부터 시작하여 깊이(depth)를 구하는 함수
def dfs(x, depth):
    c[x] = True
    d[x] = depth
    for y in graph[x]:
        if c[y]: #이미 깊이를 구했다면 넘기기
            continue
        parent[y][0] = x
        dfx(y, depth + 1)

# 전체 부모 관계를 설정하는 함수
def set_parent():
    dfs(1, 0) # 루트 노드는 1번 노드
    for i in range(1, LOG):
        for j in range(1, n + 1):
            parent[j][i] = parent[parent][j][i - 1][i - 1]

# A와 B의 최소 공통 조상을 찾는 함수
def lca(a,b):
    # b가 더 깊도록 설정
    if d[a] > d[b]:
        a,b=b,a
    #먼저 깊이가 동일하도록
    for i in range(LOG -1, -1, -1):
        if d[b]-d[a] >= (a<< i):
            b=parent[b][i]
    #부모가 같아지도록
    if a==b:
        return a
    for i in range(LOG -1, -1, -1):
        #조상을 향해 거슬러 올라가기
        if parent[a][i] != parent[b][i]:
            a=parent[a][i]
            b=parent[b][i]
    # 이후에 부모가 찾고자 하는 조상
    return parent[a][0]

set_parent()

m = int(input())

for i in range(m):
    a,b = map(int,input().split())
    print(lca(a,b))
```