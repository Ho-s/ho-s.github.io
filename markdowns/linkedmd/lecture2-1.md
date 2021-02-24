---
date: "2020-12-29"
title: "알고리즘 공부 기록/강의2-1"
path: "/lecture/2-1"
---

## 2-1. 그리디

### 그리디알고리즘
  - 그리디 알고리즘(탐욕법)은 현재 상황에서 지금 당장 좋은 것만 고르는 방법임
  - 일반적인 그리디 알고리즘은 문제를 풀기 위한 최소한의 아이디어를 떠올릴 수 있는 능력을 요구함.
  - 그리디 해법은 정당선 분석이 중요하며, 단순히 가장 좋아 보이는 것을 반복적으로 선택해도 최적의 해를 구할 수 있는지 검토함.
  - 일반적인 상황에서 그리디 알고리즘은 최적의 해를 보장할 수 없을 때가 많음. 하지만 코딩 테스트에서의 대부분의 그리디 문제는 탐욕법으로 얻은 해가 최적의 해가 되는 상황에서, 이를 추론할 수 있어야 풀리도록 출제가 됨.  
    <img src='https://user-images.githubusercontent.com/71132893/103215106-c587ef00-4955-11eb-8be7-2af3976702b9.png'>
    <img src='https://user-images.githubusercontent.com/71132893/103215110-c6208580-4955-11eb-9efe-750b04bba51e.png'>
    > 위의 사진은 구할 수 있는 최고의 경우이지만, 헤아려야 하는 수가 많기때문에, 아래의 사진처럼 각 상황에서의 최고의 조건을 선택함으로서, 최적의 해의 가깝게 되는 값을 구하는 것이 `그리디 알고리즘`임

### <문제> 거스름돈

#### 문제 제시
  <img src='https://user-images.githubusercontent.com/71132893/103215636-4a273d00-4957-11eb-8e1c-ea4cf6ed216b.png'>  
   최적의 해를 빠르게 구하기 위해서는 가장 큰 화폐 단위부터 돈을 거슬러 주면 됨.

#### 정당성 분석

  - 가장 큰 화폐 단위부터 돈을 거슬러 주는 것이 최적의 해를 보장하는 이유는 무엇일까?
    - 가지고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이므로 작은 단위의 동전들을 종합해 다른 해가 나올 수 없기 때문
  - 그리디 알고리즘 문제에서는 이처럼 문제 풀이를 위한 최소한의 아이디어를 떠올리고 이것이 정당한지 검토할 수 있어야함.

#### 답안 예시(Python)

```Python
n=1260
count=0
array=[500,100,50,10]
for coin in array:
    count+=n //coin
    n%=coin

print(count)
```

#### 답안 예시(Javascript) _직접 작성_

```js
let n = 1260
let count = 0

const array = [500, 100, 50, 10]

for (let i = 0; i < 4; i++) {
  count += parseInt(n / array[i])
  n -= parseInt(n / array[i]) * array[i]
}
console.log(count)
```

### <문제> 1이 될 때까지

#### 문제 제시

  - 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 함 단, 두 번째 연산은 N이 K로 나누어 떨어질 때만 선택할 수 있음
    1. N에서 1을 뺌.
    2. N을 K로 나눔.
  - 예를 들어 N이 17, K가 4라고 가정합시다. 이때 1번의 과정을 한 번 수행하면 N은 16이 됨. 이후에 2번의 과정을 두 번 수행하면 N은 1이 됨. 결과적으로 이 경우 전체 과정을 실행항 횐수는 3이 돰. 이는 N을 1로 만드는 최소 횟수임.
  - N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하는 프로그램을 작성하시오.

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103262918-ac308280-49e9-11eb-91f8-db597d0b7ef0.png)

#### <문제> 1이 될 때까지: 문제 해결 아이디어
  ![image](https://user-images.githubusercontent.com/71132893/103264778-fc5e1380-49ee-11eb-9dd4-9a9e77c0b8c1.png)
  
#### <문제> 1이 될 때까지: 정당성 분석
  - 가능하면 최대한 많이 나누는 작업이 최적의 해를 항상 보장할 수 있을까?
  - N이 아무리 큰 수여도, K로 계속 나눈다면 기하급수적으로 빠르게 줄일 수 있음
  - 다시말해 K가 2이상이기만 하면 , K로 나누는 것이 1을 빼는 것보다 항상 빠르게 N을 줄일 수 있음
    - 또한 N은 항상 1에 도달하게 됨(최적의 해 성립)

#### <문제> 1이 될 때까지: 답안 예시(Python)

```python
#N, K을 공백을 기준으로 구분하여 입력받기
n,k=map(int,input().split())

result=0

while True:
    #N이 K로 나누어 떨어지는 수가 될 때까지 빼기
    target=(n//k) *k
    result+=(n-target)
    n=target
    #N이 K보다 작을 때 (더 이상 나눌 수 없을 때 반복문 탈출)
    if n<k:
        break
    #K로 나누기
    result+=1
    n//=k

#마지막으로 남은 수에 대하여 1씩 뺴기
result+=(n-1)
print(result)
```

#### 답안 예시(javascript) _직접 작성_

```js
const firstInput = prompt("N : ")
const secondInput = prompt("K : ")

let n = Number(firstInput)
let k = Number(secondInput)
let count = 0

for (let i = 0; i < 100000; i++) {
  if (n / k === parseInt(n / k)) {
    n /= k
  } else {
    n -= 1
  }

  count += 1
  if (n === 1) {
    console.log("break")
    break
  }
}

console.log(count)
```

### <문제>곱하기 혹은 더하기

#### 문제 설명
  - 각 자리가 숫자(0부터9)로만 이루어진 문자열 S가 주어졌을 때, 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자 사이에 'x' 혹은 '+'연산자를 넣어 결과적으로 만들어질 수 있는 가장 큰 수를 구하는 프로그램을 작성하시오. 단, +보다 x를 먼저 계산하는 일반적인 방식과는 달리, 모든 연산은 왼쪽에서부터 순서대로 이루어진다고 가정함.
  - 예를 들어 02984라는 문자열로 만들 수 있는 가장 큰 수는 ((((0+2)x9)x8)x4)임. 또한 만들어질 수 있는 가장 큰 수는 항상 20억 이하의 정수가 되도록 입력이 주어짐.

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103265561-3cbe9100-49f1-11eb-9a2b-af71ea55c497.png)

#### 문제 해결 아이디어
  - 대부분의 경우 +보다는 x가 값을 더 크게 만듦.
    - 예를 들어 5+6=11이고, 5X6=30임.
  - 다만 두 수 중에서 하나라도 '0'혹은 '1'인 경우, 곱하기 보다는 더하기를 수행하는 것이 효율적임
  - 따라서 두 수에 대하여 연산을 수행할 때 두 수중 하나라도 1이하인 경우에는 더하며, 두 수가 모두 2이상인 경우에는 곱하면 정답
  
#### 답안 예시(Python)

```python
data = input()

#첫 번째 문자를 숫자로 변경하여 대입
result=int(data[0])

for i in range(1,len(data)):
    #두 수 중에서 하나라도 '0'혹은 '1'인 경우, 곱하기보다는 더하기 수행
    num=int(data[i])
    if(num <=1 or result<=1):
        result+=num
    else:
        result*+num

print(result)
```

#### 답안 예시(javascript) _직접 작성_

```js
const input = prompt("S : ")
let result = Number(input[0])

for (let i = 1; i < input.length; i++) {
  if (result <= 1 || Number(input[i]) <= 1) {
    result += Number(input[i])
  } else {
    result *= Number(input[i])
  }
}

console.log(result)
```

### <문제> 모험가 길드

#### 문제 설명

  - 한 마을에 모험가가 N명 있음. 모험가 길드에서는 N명의 모험가를 대상으로 공포도를 측정했는데, 공포도가 높은 모험가는 쉽게 공포를 느껴 위험 상황에서 제대로 대처할 능력이 떨어짐.
  - 모험가 길드장은 모험가 그룹을 안전하게 구성하고자 <u>공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹에 참여</u>해야 여행을 떠날 수 있도록 규정했음.
  - N명의 모험가에 대한 정보가 주어졌을 때, 여행을 떠날 수 있는 그룹수의 최댓값을 구하는 프로그램을 작성하시오.
  - 예를 들어 N=5이고, 각 모험가의 공포도가 다음과 같다고 가정
    - 2,3,1,2,2
  - 이경우 그룹 1에 공포도가 1,2,3인 모험가를 한 명씩 넣고, 그룹2에 공포도가 2인 남은 두 명을 넣게 되면 총 2개의 그룹을 만들 수 있음
  - 또한 몇 명의 모험가는 마을에 그대로 남아 있어도 되기 때문에, 모든 모험가를 특정한 그룹에 넣을 필요는 없음

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103272583-98444b00-4a00-11eb-896a-c7733594b4ba.png)

#### 문제 해결 아이디어

  - 오름차순 정렬 이후에 공포도가 가장 낮은 모험가부터 하나씩 확인
  - 앞에서부터 공포도를 하나씩 확인하며 <u>'현재 그룹에 포함된 모험가의 수'가 '현재 확인하고 있는 공포도'보다 크거나 같다면 이를 그룹으로 설정</u>함
  - 이러한 방법을 이용하면 공포도가 오름차순으로 정렬되어 있다는 점에서 항상 최소한의 모험가의 수만 포함하여 그룹을 결성하게 됨.

#### 답안 예시(javascript) _직접작성_

```js
const n = prompt("N : ")

const fearArray = []
for (let i = 0; i < Number(n); i++) {
  const fear = prompt("fear:")
  fearArray.push(fear)
}

fearArray.sort((a, b) => {
  return Number(b) - Number(a)
})
let count = 0
let now = 0
let value = 0

for (let i = 0; i < Number(n); i++) {
  value = Number(fearArray[now])
  count++
  now += value
  console.log(now)
  if (now >= fearArray.length) {
    break
  }
}
console.log(count)
```
