---
date: "2021-01-12"
title: "알고리즘 공부 기록/강의11"
path: "/lecture/11"
---

### 우선순위 큐(Priority Queue)
- **우선순위 큐**는 <u>우선순위가 가장 높은 데이터를 가장 먼저 삭제하는 자료구조</u>이다.
- 우선순위 큐는 데이터를 **우선순위에 따라** 처리하고 싶을 때 사용한다.
    - 예시) 물건 데이터를 자료구조에 넣었다가 가치가 높은 물건부터 꺼내서 확인해야 하는 경우
    ![image](https://user-images.githubusercontent.com/71132893/104277831-ee2dee00-54ea-11eb-909e-3fe74bc18f53.png)
- 우선순위 큐를 구현하는 방법은 다양하다.
    1. 단순히 <u>리스트를 이용하여 구현</u>할 수 있다.
    1. <u>힙(Heap)을 이용하여 구현</u>할 수있다.
- 데이터의 개수가 N개일 때, 구현 방식에 따라서 시간 복잡도를 비교한 내용은 다음과 같다.
![image](https://user-images.githubusercontent.com/71132893/104278018-449b2c80-54eb-11eb-928e-b89c4fc0e612.png)
- 단순히 N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하다.**(힙 정렬)**
    - 이 경우 시간 복잡도는 **_O_(_NlogN_)**이다.
### 힙(Heap)
- 특징
    - 힙은 완전 이진 트리 자료구조의 일종이다.
    - 힙에서는 항상 **루트 노드(root node)를 제거**한다.
    - **최소 힙(Min Heap)**
        - 루트 노드가 가장 작은 값을 가진다.
        - 따라서 값이 작은 데이터가 우선적으로 제거된다.
    - **최대 힙(Max Heap)**
        - 루트 노드가 가장 큰 값을 가진다.
        - 따라서 값이 큰 데이터가 우선적으로 제거된다.
        ![image](https://user-images.githubusercontent.com/71132893/104278255-a491d300-54eb-11eb-97c9-c546452658ba.png)
### 완전 이진 트리(Complete Binary Tree)
- **완전 이진 트리**란 루트(root) 노드부터 시작하여 왼쪽 자식 노드, 오른쪽 자식 노드 순서대로 데이터가 차례대로 삽입되는 트리(tree)를 의미한다.
![image](https://user-images.githubusercontent.com/71132893/104278441-f76b8a80-54eb-11eb-9fcc-bf6f87149173.png)

### 최소 힙 구성 함수: Min-Heapify()
- (상향식)부모 노드로 거슬러 올라가며, 부모보다 자신의 값이 더 작은 경우에 위치를 교체한다.
![image](https://user-images.githubusercontent.com/71132893/104278548-2124b180-54ec-11eb-8da4-1c4a65e2285d.png)

- 힙에 새로운 원소가 삽입될 때
    - 새로운 원소가 삽입되었을 때 **_O_(_NlogN_)**의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다.
    ![image](https://user-images.githubusercontent.com/71132893/104278722-677a1080-54ec-11eb-8199-eadc866390b2.png)
![image](https://user-images.githubusercontent.com/71132893/104278759-73fe6900-54ec-11eb-989b-d6d6cd7ed13b.png)
![image](https://user-images.githubusercontent.com/71132893/104278794-837db200-54ec-11eb-8022-a03d6f1d8105.png)

- 힙에 원소가 제거될 때
    - 원소가 제거되었을 때 **_O_(_logN_)**의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다.
        - 원소를 제거할 때는 가장 마지막 노드가 루트 노드의 위치에 오도록 한다.
        ![image](https://user-images.githubusercontent.com/71132893/104278867-a314da80-54ec-11eb-8dd5-65ec591af2ef.png)
        - 이후에 루트 노드에서부터 하향식으로(더 작은 자식 노드로) Heapify()를 진행한다.
        ![image](https://user-images.githubusercontent.com/71132893/104278929-c2136c80-54ec-11eb-9ac9-6c661430954d.png)
![image](https://user-images.githubusercontent.com/71132893/104278954-cb9cd480-54ec-11eb-90ff-c0efc3391185.png)

- 우선순위 큐 라이브러리를 활용한 힙 정렬 구현 예제(Python)

```python
import sys
import heapq
input = sys.stdin.readline

def heapsort(iterable):
    h=[]
    result=[]
    # 모든 원소를 차례대로 힙에 삽입
    for value in iterable:
        heapq.heappush(h, value)
    #힙에 삽입된 모든 원소를 차례대로 꺼내어 담기
    for i in range(len(h)):
        result.append(heapq.heappop(h))
    return result

n = int(input())
arr = []

for i in range(n):
    arr.append(int(input()))

res = heapsort(arr)

for i in range(n):
    print(res[i])
```