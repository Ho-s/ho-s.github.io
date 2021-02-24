---
date: "2020-12-31"
title: "알고리즘 공부 기록/강의4-3"
path: "/lecture/4-1"
---

## 4-3. 퀵 정렬

### 개요

- <u>기준 데이터를 설정</u>하고 그 **기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법**이다.
- 일반적인 상황에서 가장 많이 사용되는 정렬 알고리즘 중 하나이다.
- 병합 정렬과 더불어 대부분의 프로그래밍 언어의 정렬 라이브러리의 근간이 되는 알고리즘이다.
- 가장 기본적인 퀵 정렬은 **첫 번째 데이터를 기준 데이터(Pivot)로 설정**한다.

#### 동작 예시
  ![image](https://user-images.githubusercontent.com/71132893/103400553-e4ba9280-4b88-11eb-80bd-672924947f0c.png)
  ![image](https://user-images.githubusercontent.com/71132893/103400596-07e54200-4b89-11eb-9ed6-1ffb62bfa564.png)
  ![image](https://user-images.githubusercontent.com/71132893/103400582-fe5bda00-4b88-11eb-8608-e5f02b351565.png)
  ![image](https://user-images.githubusercontent.com/71132893/103400620-1af81200-4b89-11eb-811f-07991dd05de6.png)
  ![image](https://user-images.githubusercontent.com/71132893/103400638-28150100-4b89-11eb-83e3-ef684c810256.png)
  ![image](https://user-images.githubusercontent.com/71132893/103400649-37944a00-4b89-11eb-97e2-bef94e9e49b2.png)

#### 퀵 정렬이 빠른 이유 : 직관적인 이해

  - 이상적인 경우 분할이 절반씩 일어난다면 전체 연산 횟수로 O(_NlogN_)를 기대할 수 있다.
    - 너비 x 너비 = N x logN = _NlogN_
      ![image](https://user-images.githubusercontent.com/71132893/103400691-64e0f800-4b89-11eb-96de-dcb01e776f2c.png)

#### 복잡도 분석

  - 퀵 정렬은 평균의 경우 O(_NlogN_)의 시간 복잡도를 가진다.
  - 하지만 최악의 경우 O(N<sup>2</sup>)의 시간 복잡도를 가진다.
    - 첫 번째 원소를 피벗으로 삼을 때, 이미 정렬된 배열에 대해서 퀵 정렬을 수행하면 어떻게 될까?

#### 소스코드: 일반적인 방식(Python)

```python
array=[5,7,9,0,3,1,6,2,4,8]

def quick_sort(array, start, end):
    if start>=end:  #원소가 1개인 경우 종료
        return
    pivot = start #피벗은 첫 번째 원소
    left = start + 1
    right = end
    while(left<=right):
        #피벗보다 큰 데이터를 찾을 때까지 반복
        while(left <= end and array[left] <= array[pivot]):
            left+=1
        #피벗보다 작은 데이터를 찾을 때까지 반복
        while(right > start and array[right]>=array[pivot]):
            right-=1
        if(left>right): #엇갈렸다면 작은 데이터와 피벗을 교체
            array[right], array[pivot]=array[pivot],array[right]
        else: #엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
            array[left], array[right] = array[right], array[left]
    # 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
    quick_sort(array, start, right-1)
    quick_sort(array, right+1,end)

quick_sort(array, 0, len(array)-1)
print(array)
```

#### 소스코드: 파이썬의 장점을 살린 방식

```python
array=[5,7,9,0,3,1,6,2,4,8]

def quick_sort(array):
    #리스트가 하나 이하의 원소만을 담고 있다면 종료
    if len(array)<=1:
        return array
    pivot = array[0] # 피벗은 첫 번째 원소
    tail = array[1:] # 피벗을 제외한 리스트

    left_side=[x for x in tail if x<=pivot] #분할된 왼쪽 부분
    right_side=[x for x in tail if x>pivot] #분할된 오른쪽 부분

    #분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행하고, 전체 리스트 반환
    return quick_sort(left_side) + [pivot] + quick_sort(right_side)

print(quick_sort(array))
#실행 결과[1,2,3,4,5,6,7,8,]
```
