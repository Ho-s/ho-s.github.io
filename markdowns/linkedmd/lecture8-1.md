---
date: "2021-01-08"
title: "알고리즘 공부 기록/강의8-1"
path: "/lecture/8-1"
---

## 서로소 집합
-서로소 집합(Disjoint Sets)란 <u>공통 원소가 없는 두 집합</u>을 의미한다.
![image](https://user-images.githubusercontent.com/71132893/103986515-39d05700-51ce-11eb-9b98-f639007b553e.png)

- 서로소 집합 자료구조란 <u>서로소 부분 집합들로 나누어진 원소들의 데이터를 처리하기 위한 자료구조</u>이다.
- 서로소 집합 자료구조는 두 종류의 연산을 지원한다.
    - **합집합(Union)** : 두 개의 원소가 포함된 집합을 하나의 집합으로 합치는 연산이다.
    - **찾기(Find)** : 특정한 원소가 속한 집합이 어떤 집합인지 알려주는 연산이다.
- 서로소 집합 자료구조는 **합치기 찾기(Union FInd) 자료구조**라고 불리기도 한다.
- 여러 개의 합치기 연산이 주어졌을 때 서로소 집합 자료구조의 동작 가정은 다음과 같다.
    1. 합집합 연산을 확인하여, 서로 연결된 두 노드 A,B를 확인한다 
        1) A와 B의 루트 노드 A', B'를 각각 찾는다.
        2) A'를 B'의 부모 노드로 설정한다.
    1. 모든 합집합 연산을 처리할 때까지 1번의 과정을 반복한다.
- 동작 과정 살펴보기
![image](https://user-images.githubusercontent.com/71132893/103987325-a4ce5d80-51cf-11eb-91b4-917f7f91e53f.png)
![image](https://user-images.githubusercontent.com/71132893/103987350-aef05c00-51cf-11eb-98a7-0614eb76b012.png)
![image](https://user-images.githubusercontent.com/71132893/103987382-bfa0d200-51cf-11eb-9a83-507daea14f49.png)
![image](https://user-images.githubusercontent.com/71132893/103987424-cd565780-51cf-11eb-9d5e-a77ff005a332.png)
![image](https://user-images.githubusercontent.com/71132893/103987518-ef4fda00-51cf-11eb-85a7-25e2f26e3a9d.png)

- 연결성
    - 서로소 집합 자료구조에서는 **연결성**을 통해 손쉽게 집합의 형태를 확인할 수 있다.
    ![image](https://user-images.githubusercontent.com/71132893/103987568-0989b800-51d0-11eb-8abc-033a868938e1.png)
    - 기본적인 형태의 서로소 집합 자료구조에서는 루트 노드에 즉시 접근할 수 없다.
        - 루트 노드를 찾기 위해 <u>부모 테이블을 계속해서 확인</u>하며 거슬러 올라가야 한다.
    - 다음 예시에서 노드 3의 루트를 찾기 위해서는 노드 2를 거쳐 노드 1에 접근해야 한다.
    ![image](https://user-images.githubusercontent.com/71132893/103987725-481f7280-51d0-11eb-99da-22dadb7fde53.png)

- 기본적인 구현 방법(Python)

```python
# 특정 원소가 속한 집합을 찾기
def find_parent(parent, x):
    # 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if parent[x] != x:
        return find_parent(parent, parent[x])
    return x

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

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

# Union 연산을 각각 수행
for i in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

# 각 원소가 속한 집합 출력하기
print('각 원소가 속한 집합: ', end='')
for i in range(1, v + 1):
    print(find_parent(parent, i), end=' ')

print()

# 부모 테이블 내용 출력하기
print('부모 테이블: ', end='')
for i in range(1, v + 1):
    print(parent[i], end=' ')
```

- 기본적인 구현 방법의 문제점
    - 합집합 연산이 편향되게 이루어지는 경우 찾기함수가 비효율적으로 동작한다.
    - 최악의 경우에는 찾기 함수가 모든 노드를 다 확인하게 되어 시간 복잡도가 O(V)이다.
        - 다음과 같이 {1,2,3,4,5}의 총 5개의 원소가 존재하는 상황을 확인해보자
        ![image](https://user-images.githubusercontent.com/71132893/103990237-3b048280-51d4-11eb-9ca2-19d28fd6c44c.png)

- 경로 압축
    - 찾기 함수를 최적화 하기 위한 방법으로 경로 압축(Path Compression)을 이용할 수 있다.
        - 찾기 함수를 재귀적으로 호출한 뒤에 <u>부모 테이블 값을 바로 갱신</u>한다.

        ```python
        #특정 원소가 속한 집합을 찾기
        def find_parent(parent, x):
            #루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
            if parent[x] != x:
                parent[x] = find_parent(parent, parent[x])
            return parent[x]
        ```
    - 경로 압축 기법을 적용하면 각 노드에 대하여 <u>찾기 함수를 호출한 이후에</u> 해당 노드의 루트 노드가 바로 부모노드가 된다.
    - 동일한 예시에 대해서 **모든 합집합 함수를 처리한 후 각 원소에 대하여 찾기 함수를 수행하면 다음과 같이 부모 테이블이 갱신**된다.
    - 기본적인 방법에 비하여 시간 복잡도가 개선된다.
    ![image](https://user-images.githubusercontent.com/71132893/103990650-ed3c4a00-51d4-11eb-8d59-cb26f897e56d.png)
    - 구현 방법(python)
    
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

    # 부모 테이블상에서, 부모를 자기 자신으로 초기화
    for i in range(1, v + 1):
        parent[i] = i

    # Union 연산을 각각 수행
    for i in range(e):
        a, b = map(int, input().split())
        union_parent(parent, a, b)

    # 각 원소가 속한 집합 출력하기
    print('각 원소가 속한 집합: ', end='')
    for i in range(1, v + 1):
        print(find_parent(parent, i), end=' ')

    print()

    # 부모 테이블 내용 출력하기
    print('부모 테이블: ', end='')
    for i in range(1, v + 1):
        print(parent[i], end=' ')
    ```

### 서로소 집합을 활용한 사이클 판별
- 서로소 집합은 **무방햘 그래프 내에서의 사이클을 판별**할 때 사용할 수 있다.
    - 참고로 방향 그래프에서의 사이클 여부는 DFS를 이용하여 판별할 수 있다.
- **사이클 판별 알고리즘**은 다음과 같다.
    1. 각 간선을 하나씩 확인하며 두 노드의 루트 노드를 확인한다.
        1) 루트 노드가 서로 다르다면 두 노드에 대하여 합집합 연산을 수행한다.
        2) 루트 노드가 서로 같다면 사이클(Cycle)이 발생한 것이다.
    1. 그래프에 포함되어 있는 모든 간선에 대하여 1번 과정을 반복한다.

- 동작과정 살펴보기
![image](https://user-images.githubusercontent.com/71132893/103991297-d0ecdd00-51d5-11eb-9fe4-e4fd603272e6.png)
![image](https://user-images.githubusercontent.com/71132893/103991323-d8ac8180-51d5-11eb-9240-d07e33c12348.png)
![image](https://user-images.githubusercontent.com/71132893/103991345-dea26280-51d5-11eb-94f9-dd1e9ad70d9c.png)
![image](https://user-images.githubusercontent.com/71132893/103991399-ecf07e80-51d5-11eb-9a01-cb9237ccb69a.png)

- 동작 예시(python)

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

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(1, v + 1):
    parent[i] = i

cycle = False # 사이클 발생 여부

for i in range(e):
    a, b = map(int, input().split())
    # 사이클이 발생한 경우 종료
    if find_parent(parent, a) == find_parent(parent, b):
        cycle = True
        break
    # 사이클이 발생하지 않았다면 합집합(Union) 연산 수행
    else:
        union_parent(parent, a, b)

if cycle:
    print("사이클이 발생했습니다.")
else:
    print("사이클이 발생하지 않았습니다.")
```