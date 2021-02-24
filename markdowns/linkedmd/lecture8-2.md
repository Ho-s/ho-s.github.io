---
date: "2021-01-08"
title: "알고리즘 공부 기록/강의8-2"
path: "/lecture/8-2"
---

## 크루스칼 알고리즘
- 신장 트리
    - <u>그래프에서 모든 노드를 포함하면서 사이클이 존재하지 않는 부분 그래프</u>를 의미한다.
        - 모든 노드가 포함되어 서로 연결되면서 사이클이 존재하지 않는다는 조건은 **트리**의 조건이기도 하다.
        ![image](https://user-images.githubusercontent.com/71132893/103991583-393bbe80-51d6-11eb-8811-6c99de06e37e.png)
- 최소 신장 트리
    - <u>최소한의 비용으로 구성되는 신장트리를 찾아야 할 때</u> 어떻게 해야 될까?
    - 예를 들어 N개의 도시가 존재하는 상황에서 두 도시 사이에 도로를 놓아 **전체 도시가 서로 연결**될 수 있게 도로를 설치하는 경우를 생각해보자.
        - 두 도시 A,B를 선택했을 때 A에서 B로 이동하는 경로가 반드시 존재하도록 도로를 설치한다.
        ![image](https://user-images.githubusercontent.com/71132893/103991755-799b3c80-51d6-11eb-90ab-d23f5046c2fa.png)
- 크루스칼 알고리즘
    - 대표적인 **최소 신장 트리 알고리즘**이다.
    - 그리디 알고리즘으로 분류된다.
    - 구체적인 동작 과정은 다음과 같다.
        1. 간선 데이터를 비용에 따라 **오름차순으로 정렬**한다.
        1. 간선을 하나씩 확인하며 <u>현재의 간선이 사이클을 발생시키는지 확인</u>한다.
            1) 사이클이 발생하지 않는 경우 최소 신장 트리에 포함시킨다.
            2) 사이클이 발생하는 경우 최소 신장 트리에 포함시키지 않는다.
        1. 모든 간선에 대하여 2번의 과정을 반복한다.

- 동작과정 살펴보기
![image](https://user-images.githubusercontent.com/71132893/103992033-e282b480-51d6-11eb-99cc-76422aeed850.png)
![image](https://user-images.githubusercontent.com/71132893/103992129-034b0a00-51d7-11eb-820a-b3d99afdd5d2.png)
![image](https://user-images.githubusercontent.com/71132893/103992151-09d98180-51d7-11eb-897a-96c7537f2fe3.png)
![image](https://user-images.githubusercontent.com/71132893/103992181-1231bc80-51d7-11eb-8e59-71ab0ad84f63.png)
![image](https://user-images.githubusercontent.com/71132893/103992201-16f67080-51d7-11eb-9670-296fc4a732b7.png)
![image](https://user-images.githubusercontent.com/71132893/103992216-1d84e800-51d7-11eb-952e-de797d81ece7.png)
![image](https://user-images.githubusercontent.com/71132893/103992226-21b10580-51d7-11eb-89ac-547a7caf8df2.png)
![image](https://user-images.githubusercontent.com/71132893/103992243-270e5000-51d7-11eb-9911-f03104840020.png)
![image](https://user-images.githubusercontent.com/71132893/103992253-2a094080-51d7-11eb-8655-36c6fddc8f53.png)
![image](https://user-images.githubusercontent.com/71132893/103992264-2ecdf480-51d7-11eb-966f-c6d71eacbedc.png)
![image](https://user-images.githubusercontent.com/71132893/103992279-342b3f00-51d7-11eb-8545-fdf2dd74d54b.png)

- 구현 예시(python)

```python
# 특정 원소가 속한 집합을 찾기
def find_parent(parent, x):
    # 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

# 두 원소가 속한 집합을 합치기
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

# 노드의 개수와 간선(Union 연산)의 개수 입력 받기
v, e = map(int, input().split())
parent = [0] * (v + 1) # 부모 테이블 초기화하기

# 모든 간선을 담을 리스트와, 최종 비용을 담을 변수
edges = []
result = 0

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

# 모든 간선에 대한 정보를 입력 받기
for _ in range(e):
    a, b, cost = map(int, input().split())
    # 비용순으로 정렬하기 위해서 튜플의 첫 번째 원소를 비용으로 설정
    edges.append((cost, a, b))

# 간선을 비용순으로 정렬
edges.sort()

# 간선을 하나씩 확인하며
for edge in edges:
    cost, a, b = edge
    # 사이클이 발생하지 않는 경우에만 집합에 포함
    if find_parent(parent, a) != find_parent(parent, b):
        union_parent(parent, a, b)
        result += costㅉ

print(result)
```

- 크루스칼 알고리즘 성능 분석
    - 크루스칼 알고리즘은 간선의 개수가*E*개 일 때, __*O*(*ElogE*)__ 의 시간 복잡도를 가진다.
    - 크루스칼 알고리즘에서 가장 많은 시간을 요구하는 곳은 간선을 정렬을 수행하는 부분이다.
        - 표준 라이브러리를 이용해 *E*개의 데이터를 정렬하기 위한 시간 복잡도는 *O*(*ElogE*)이다.