---
date: "2020-12-31"
title: "알고리즘 공부 기록/강의4-5"
path: "/lecture/4-1"
---

### 4-5. <문제> 두 배열의 원소 교체

#### 문제 설명

  - 당신은 두 개의 배열 A와 B를 갖고 있다. 두 배열은 N개의 원소로 구성되어 있으며, 배열의 원소는 모두 자연수이다.
  - 당신은 **최대 K번의 바꿔치기**연산을 수행할 수 있는데, 바꿔치기 연산이란 배열 A에 있는 원소 하나와 배열 B에 있는 원소 하나를 골라서 두 원소를 서로 바꾸는 것을 말한다.
  - 당신의 최종 목표는 배열 A의 모든 원소의 합이 최대가 되도록 하는 것이다.
  - N, K 그리고 배열 A와 B의 정보가 주어졌을 때, 최대 K 번의 바꿔치기 연산을 수행하여 만들 수 있는 **배열 A의 모든 원소의 합의 최댓값을 출력**하는 프로그램을 작성하시오
  - 예를 들어 N=5, K=3이고, 배열 A와 B가 다음과 같다고 해보자
    - 배열 A=[1,2,5,4,3]
    - 배열 B=[5,5,6,6,5]
  - 이 경우, 다음과 같이 세 번의 연산을 수행할 수 있다.
    1. 배열 A의 원소 '1'과 배열 B의 원소 '6'을 바꾸기
    1. 배열 A의 원소 '2'와 배열 B의 원소 '6'을 바꾸기
    1. 배열 A의 원소 '3'과 배열 B의 원소 '5'를 바꾸기
  - 세번의 연산 이후 배열 A와 배열 B의 상태는 다음과 같이 구성 될 것이다
    - 배열 A=[6,6,5,4,5]
    - 배열 B=[3,5,1,2,5]
  - 이때 배열 A의 모든 원소의 합은 26이 되며, 이보다 합을 더 크게 만들 수는 없다.

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103402019-9dcf9b80-4b8e-11eb-98c5-3b3db3f6d8fb.png)

#### 문제 해결 아이디어

  - **핵심 아이디어**: <u>매번 배열 A에서 가장 작은 원소를 골라서, 배열 B에서 가장 큰 원소와 교체</u>한다.
  - 가장 먼저 배열 A와 B가 주어지면 A에 대하여 오름차순 정렬하고, B에 대하여 내림차순 정렬한다.
  - 이후에 두 배열의원소를 첫 번째 인덱스 부터 차례로 확인하면서 A의 원소가 B의 원소보다 작을 때에만 교체를 수행한다.
  - 이 문제에서는 두 배열의 원소가 최대 100,000개까지 입력될 수 있으므로, 최악의 경우 O(_NlogN_)을 보장하는 정렬 알고리즘을 이용해야 한다.

#### 답안 예시(Python)

```python
n,k = map(int,input().split()) #N과 K를 입력받기
a = list(map(int,input().split())) #배열 A의 모든 원소를 입력받기
b = list(map(int,input().split())) #배열 A의 모든 원소를 입력받기

a.sort() #배열 A는 오름차순 정렬 수행
b.sort(reverse=True) #배열 B는 내림차순 정렬 수행

#첫 번째 인덱스부터 확인하며, 두 배열의 원소를 최대 K번과 비교
for i in range(k):
    #A의 원소가 B의 원소보다 작은 경우
    if a[i] < b[i]:
        #두 원소를 교체
        a[i],b[i] = b[i],a[i]
    else: #A의 원소가 B의 원소보다 크거나 같을 때, 반복문 탈출
        break

print(sum(a)) #배열 A의 모든 원소의 합을 출력
```

#### 답안 예시(javascipt)

```js
const n = prompt("n:")
const k = prompt("k:")

const a = prompt("a:")
const b = prompt("b:")

const arrayA = []
const arrayB = []
for (let i = 0; i < n; i++) {
  arrayA.push(Number(a[i]))
  arrayB.push(Number(b[i]))
}

arrayA.sort()
arrayB.sort()

for (let i = 0; i < k; i++) {
  if (arrayA[i] < arrayB[arrayB.length - i]) {
    arrayA[i] = arrayB[arrayB.length - i]
  } else {
    break
  }
}

let result = 0
for (let i = 0; i < arrayA.length; i++) {
  result += arrayA[i]
}

console.log(result)
```
