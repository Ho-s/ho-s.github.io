---
date: "2020-12-31"
title: "알고리즘 공부 기록/강의4-4"
path: "/lecture/4-1"
---

## 4-4. 계수 정렬

### 개요

- 특정한 조건이 부합할 때만 사용할 수 있지만 <span style='color:red'>매우 빠르게 동작하는</span> 정렬 알고리즘이다.
  - 계수 정렬은 **데이터의 크기 범위가 제한되어 정수 형태로 표현할 수 있을 때**사용 가능하다.
- 데이터의 개수가 N, 데이터(양수) 중 최댓값이 K일 때 최악의 경우에도 수행시간 O(N+K)를 보장한다.

#### 동작 예시
  ![image](https://user-images.githubusercontent.com/71132893/103401336-c4d89e00-4b8b-11eb-9a2a-08bec4d375e8.png)
  ![image](https://user-images.githubusercontent.com/71132893/103401375-e20d6c80-4b8b-11eb-843f-010ecea2c22b.png)
  ![image](https://user-images.githubusercontent.com/71132893/103401379-e5a0f380-4b8b-11eb-9f0d-059dc60d5190.png)
  ![image](https://user-images.githubusercontent.com/71132893/103401384-e9cd1100-4b8b-11eb-899f-7421c7e763ed.png)
  ![image](https://user-images.githubusercontent.com/71132893/103401391-ee91c500-4b8b-11eb-8995-7ba0889d7ef4.png)
  ![image](https://user-images.githubusercontent.com/71132893/103401414-08330c80-4b8c-11eb-97ab-3b822b212daf.png)

#### 소스코드(python)

```python
#모든 원소의 값이 0보다 크거나 같다고 가정
array=[7,5,9,0,3,1,6,2,9,1,4,8,0,5,2]
#모든 범위를 포함하는 리스트 선언(모든 값은 0으로 초기화)
count = [0] * (max(array)+1)

for i in range(len(array)):
    count[array[i]]+=1 #각 데이터에 해당하는 인덱스의 값 증가

for i in range(len(count)):#리스트에 기록된 정렬 정보 확인
    for j in range(count[i]):
        print(i,end='') # 띄어쓰기를 구분으로 등장한 횟수만큼 인덱스 출력

#실행 결과 0 0 1 1 2 2 3 4 5 5 6 7 8 9 9
```

#### 복잡도 분석
  - 계수 정렬의 시간 복잡도와 공간 복잡도는 모두 O(N+K)이다.
  - 계수 정렬은 때에 따라서 심각한 비효율성을 초래할 수 있다.
    - ex)데이터가 0과 999,999로 단 두 개만 존재하는 경우
  - 계수 정렬은 \_\_동일한 값을 가지는 데이터가 여러 개 등장할 때 효과적으로 사용할 수 있다.
    - 성적의 경우 100점을 맞은 학생이 여러 명일 수 있기 때문에 계수 정렬이 효과적이다.

### 정렬 알고리즘 비교하기

- 앞서 다룬 네 가지 정렬 알고리즘을 비교하면 다음과 같다.
- 추가적으로 대부분의 프로그래밍 언어에서 지원하는 <u>표준 정렬 라이브러리는 최악의 경우에도 O(_NlogN_)을 보장</u>하도록 설계되어 있다.
  ![image](https://user-images.githubusercontent.com/71132893/103401736-76c49a00-4b8d-11eb-9bb3-e10343e2bc71.png)
