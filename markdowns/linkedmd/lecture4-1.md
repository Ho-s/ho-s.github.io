---
date: "2020-12-31"
title: "알고리즘 공부 기록/강의4-1"
path: "/lecture4-1"
---

## 4-1. 선택 정렬

### 개요

- 선택 정렬 이란 처리되지 않은 데이터 중에서 **가장 작은 데이터를 <span style='color:red'>선택</span>해 맨 앞에 있는 데이터와 바꾸는 것을 반복**하는 것을 일컬음

#### 동작 예시
  ![image](https://user-images.githubusercontent.com/71132893/103398783-84742280-4b81-11eb-9cff-007fad95bf65.png)
  ![image](https://user-images.githubusercontent.com/71132893/103398788-8938d680-4b81-11eb-940b-d4f4f4eb9446.png)
  ![image](https://user-images.githubusercontent.com/71132893/103398795-8e962100-4b81-11eb-8dd1-c8cabe00580c.png)
  ![image](https://user-images.githubusercontent.com/71132893/103398805-9655c580-4b81-11eb-8d2a-111a0a95cfe9.png)
  ![image](https://user-images.githubusercontent.com/71132893/103398812-9ce43d00-4b81-11eb-94a3-887cd75106c2.png)
  ![image](https://user-images.githubusercontent.com/71132893/103398819-a2da1e00-4b81-11eb-9b91-d559c6232cfa.png)

#### 소스코드(python)

```python
array=[7,5,9,0,3,1,6,2,4,8]

for i in range(len(array)):
    min_index=0 #가장 작은 원소의 인덱스
    for j in range(i+1,len(array)):
        if array[min_index]>array[j]:
            min_index=j
    #가장작은 원소와 가장  앞에 원소를 바꿔줘
    array[i], array[min_index]=array[min_index],array[i]


print(array)
#실행 결과 [0,1,2,3,4,5,6,7,8,9]
```

#### 복잡도 분석
  - 선택 정렬은 N번 만큼 가장 작은 수를 찾아서 맨 앞으로 보내야 한다.
  - 구현 방식에 따라서 사소한 오차는 있을 수 있지만 전체 연산 횟수는 다음과 같다.
    - N + (N-1) + (N-2) + ... + 2
  - 이는 (N<sup>2</sup> + N - 2) / 2 로 표현할 수 있는데, 빅오 표기법에 따라서 O(N<sup>2</sup>)이라고 작성한다.
