---
date: "2021-01-08"
title: "알고리즘 공부 기록/강의8-3"
path: "/lecture/8-3"
---

## 위상 정렬
- <span style='color:red'>사이클이 없는 방향 그래프</span>의 모든 노드를 **방향성에 거스르지 않도록 순서대로 나열**하는 것을 의미한다.
- 예시) 선수 과목을 고려한 학습 순서 설정
![image](https://user-images.githubusercontent.com/71132893/103992698-db0fdb00-51d7-11eb-922b-a230228613e7.png)
- 위 세 과목을 모두 듣기 위한 **적절한 학습 순서**는?
    - 자료구조 - 알고리즘 - 고급 알고리즘 <span style='color:blue'>(O)</span>
    - 자료구조 - 고급 알고리즘 - 알고리즘 <span style='color:red'>(X)</span>

- 진입차수와 진출차수
    - **진입차수(Indegree)** : 특정한 노드로 들어오는 간선의 개수
    - **진출차수(Outdegree)** : 특정한 노드에서 나가는 간선의 개수
    ![image](https://user-images.githubusercontent.com/71132893/103993017-49ed3400-51d8-11eb-8b65-9d63e86886b4.png)

- **큐**를 이용하는 **위상 정렬 알고리즘의 동작 과정**은 다음과 같다.
    1. 진입차수가 0인 모든 노드를 큐에 넣는다
    1. 큐가 빌 때까지 다음의 과정을 반복한다.
        1) 큐에서 원소를 꺼내 해당 노드에서 나가는 간선을 그래프에서 제거한다.
        2) 새롭게 진입차수가 0이 된 노드를 큐에 넣는다.
    > 결과적으로 **각 노드가 큐에 들어온 순서가 위상 정렬을 수행한 결과**와 같다.

- 위상 정렬 동작 예시
![image](https://user-images.githubusercontent.com/71132893/103993671-51610d00-51d9-11eb-9459-7b02d19e3b5e.png)
![image](https://user-images.githubusercontent.com/71132893/103993719-5e7dfc00-51d9-11eb-874c-a1bb6c80fb85.png)
![image](https://user-images.githubusercontent.com/71132893/103993735-63db4680-51d9-11eb-8f05-9edb0f1c5093.png)
![image](https://user-images.githubusercontent.com/71132893/103993777-73f32600-51d9-11eb-9c07-011f20a2db2a.png)
![image](https://user-images.githubusercontent.com/71132893/103993807-7e152480-51d9-11eb-9378-d76753052d00.png)
![image](https://user-images.githubusercontent.com/71132893/103993814-82414200-51d9-11eb-9bb2-5ead5f30c825.png)
![image](https://user-images.githubusercontent.com/71132893/103993825-866d5f80-51d9-11eb-8f50-9dc2ef5695ef.png)
![image](https://user-images.githubusercontent.com/71132893/103993833-8a00e680-51d9-11eb-8023-f91cf75a26ff.png)
![image](https://user-images.githubusercontent.com/71132893/103993847-8d946d80-51d9-11eb-9dc8-25f087de2fe2.png)
![image](https://user-images.githubusercontent.com/71132893/103993860-9127f480-51d9-11eb-915a-7e493b36bf5a.png)

- 위상 정렬의 특징
    - 위상 정렬은 DAG에 대해서만 수행할 수 있다.
        - DAG(Direct Acyclic Graph) : 순환하지 않는 방향 그래프
    - 위상 정렬에서는 **여러가지 답이 존재**할 수 있다.
        - 한 단계에서 큐에 새롭게 들어가는 원소가 2개 이상인 경우가 있다면 여러가지 답이 존재한다.
    - **모든 원소를 방문하기 전에 큐가 빈다면 사이클이 존재**한다고 판단할 수 있다.
        - 사이클에 포함된 원소 중에서 어떠한 원소도 큐에 들어가지 못한다.
    - 스택을 이용한 DFS를 이용해 위상 정렬을 수행할 수도 있다.

- 구현 예시(Python)

```python
from collections import deque

# 노드의 개수와 간선의 개수를 입력 받기
v, e = map(int, input().split())
# 모든 노드에 대한 진입차수는 0으로 초기화
indegree = [0] * (v + 1)
# 각 노드에 연결된 간선 정보를 담기 위한 연결 리스트 초기화
graph = [[] for i in range(v + 1)]

# 방향 그래프의 모든 간선 정보를 입력 받기
for _ in range(e):
    a, b = map(int, input().split())
    graph[a].append(b) # 정점 A에서 B로 이동 가능
    # 진입 차수를 1 증가
    indegree[b] += 1

# 위상 정렬 함수
def topology_sort():
    result = [] # 알고리즘 수행 결과를 담을 리스트
    q = deque() # 큐 기능을 위한 deque 라이브러리 사용

    # 처음 시작할 때는 진입차수가 0인 노드를 큐에 삽입
    for i in range(1, v + 1):
        if indegree[i] == 0:
            q.append(i)

    # 큐가 빌 때까지 반복
    while q:
        # 큐에서 원소 꺼내기
        now = q.popleft()
        result.append(now)
        # 해당 원소와 연결된 노드들의 진입차수에서 1 빼기
        for i in graph[now]:
            indegree[i] -= 1
            # 새롭게 진입차수가 0이 되는 노드를 큐에 삽입
            if indegree[i] == 0:
                q.append(i)

    # 위상 정렬을 수행한 결과 출력
    for i in result:
        print(i, end=' ')

topology_sort()
```

- 위상정렬 알고리즘 성능 분석
    - 위상 정렬을 위해 차례대로 모든 노드를 확인하며 각 노드에서 나가는 간선을 차례대로 제거해야 한다.
        - 위상 정렬 알고리즘의 시간 복잡도는 **_O_(_V_ + _E_)**이다.