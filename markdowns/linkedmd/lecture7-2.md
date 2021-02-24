---
date: "2021-01-06"
title: "알고리즘 공부 기록/강의7-2"
path: "/lecture/7-2"
---

## 플로이드 워셜 알고리즘
- 개요
    - <u>모든 노드에서 다른 모든 노드까지의 최단 경로를 모두 계산</u>한다.
    - 플로이드 워셜(Floyd-Warshall) 알고리즘은 다익스트라 알고리즘과 마찬가지로 단계별로 **거쳐 가는 노드를 기준으로 알고리즘을 수행**한다.
        - 다만 매 단계마다 방문하지 않은 노드 중에 최단 거리를 갖는 노드를 찾는 과정이 필요하지 않다.
    - 플로이드 워셜은 2차원 테이블에 최단 거리 정보를 저장한다.
    - 플로이드 워셜 알고리즘은 다이나믹 프로그래밍 유형에 속한다.
    - 각 단계마다 **특정한 노드 *k*를 거쳐 가는 경우를 확인**한다.
        - *a*에서 *b*로 가는 최단 거리보다 *a*에서 *k*를 거쳐 *b*로 가는 거리가 더 짧은지 검사한다.
    - 점화식은 다음과 같다.
        > <span style='font-size:30px'> *D<sub>ab</sub>* = *min*(*D<sub>ab</sub>*, *D<sub>ak</sub>* + *D<sub>kb</sub>*)
- 동작 과정 살펴보기
![image](https://user-images.githubusercontent.com/71132893/103747455-0662c080-5046-11eb-899b-1319d52c401b.png)
![image](https://user-images.githubusercontent.com/71132893/103747527-25615280-5046-11eb-9aa5-be828ee46fab.png)
![image](https://user-images.githubusercontent.com/71132893/103747639-4d50b600-5046-11eb-902a-6a3e8e2bf46e.png)
![image](https://user-images.githubusercontent.com/71132893/103747694-635e7680-5046-11eb-84d8-20870b958d7f.png)
![image](https://user-images.githubusercontent.com/71132893/103747719-6b1e1b00-5046-11eb-9021-dcf9aa78b971.png)

- 구현 예시(Python)

```python
INF = int(1e9) # 무한을 의미하는 값으로 10억을 설정

# 노드의 개수 및 간선의 개수를 입력받기
n = int(input())
m = int(input())
# 2차원 리스트(그래프 표현)를 만들고, 모든 값을 무한으로 초기화
graph = [[INF] * (n + 1) for _ in range(n + 1)]

# 자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
for a in range(1, n + 1):
    for b in range(1, n + 1):
        if a == b:
            graph[a][b] = 0

# 각 간선에 대한 정보를 입력 받아, 그 값으로 초기화
for _ in range(m):
    # A에서 B로 가는 비용은 C라고 설정
    a, b, c = map(int, input().split())
    graph[a][b] = c

# 점화식에 따라 플로이드 워셜 알고리즘을 수행
for k in range(1, n + 1):
    for a in range(1, n + 1):
        for b in range(1, n + 1):
            graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

# 수행된 결과를 출력
for a in range(1, n + 1):
    for b in range(1, n + 1):
        # 도달할 수 없는 경우, 무한(INFINITY)이라고 출력
        if graph[a][b] == 1e9:
            print("INFINITY", end=" ")
        # 도달할 수 있는 경우 거리를 출력
        else:
            print(graph[a][b], end=" ")
    print()
```

- 성능 분석
    - 노드의 개수가 *N*개일 때 알고리즘 상으로 *N*번의 단계를 수행한다.
        - 각 단계마다 *O*(*N*<sup>2</sup>)의 연산을 통해 현재 노드를 거쳐 가는 모든 경로를 고려한다.
    - 따라서 플로이드 워셜 알고리즘의 시간 복잡도는 *O*(*N<sup>3</sup>*)이다.