---
date: "2020-12-28"
title: "알고리즘 공부 기록"
path: "algorithm"
---

# Summary Notes of Algoritm Lecture

출처 : [이코테 2021](https://www.youtube.com/watch?v=m-9pAwq1o3w&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=1&ab_channel=%EB%8F%99%EB%B9%88%EB%82%98)

## 1. 코딩 테스트 출제 경향 분석 및 파이썬 문법 부수기

- 온라인 저지 사이트

  - [코드포스(Codeforces)](http://www.codeforces.com) >국제대회가 열리며 다수의 기출문제 수록
  - [탑코더(TopCoder)](https://www.topcoder.com)
  - [릿코드(LeetCode)](https://leetcode.com) >기업코딩테스트를 위한 다양한 문제들 수록
  - [코드셰프(CODECHEF)](https://www.codechef.com)
  - [백준온라인저지(BOJ)](https://www.acmicpc.net) >많은 국내 대기업 기출문제
  - [코드업(CodeUp)](https://codeup.kr) >초보자들에게 추천
  - [프로그래머스(Programmers)](https://programmers.co.kr)
  - [SW EXPERT Academy](https://swexpertacademy.com)

- 코딩테스트에는 현재 Python과 C++으로 진행하는 것이 유리하다고 생각되어짐.
- 프로그램 개발 방식의 코딩 테스트에서는 Python이 가장 유리하다고 생각 되어짐.
- 알고리즘 코딩 테스트를 준비하는 과정에서 팀노트 등을 작성하며, 자신만의 소스코드를 관리하는 습관을 들이면 좋음.
- 팀 노트 예시 [Github Link](https://github.com/ndb796/ython-Competitive-Programming-Team-Notes)
- 가장 출제 빈도가 높은 알고리즘 유형

  - 그리디(쉬운 난이도)
  - 구현
  - DFS/BFS를 활용한 탐색

- 복잡도는 알고리즘의 성능을 나타내는 척도로, 동일한 기능의 알고리즘이 있다면 일반적으로 복잡도가 낮을수록 좋은 알고리즘임.
  - 시간 복잡도 : 특정한 크기의 입력에 대하여 알고리즘의 수행시간 분석
  - 공간 복잡도 : 특정한 크기의 입력에 대하여 알고리즘의 메모리 사용량 분석
- 빅오 표기법 (Big-O Notation)
  - 가장 빠르게 증가하는 항만을 고려하는 표기법으로, 함수의 상한만을 나태내게 됨.
  - 가령 3N<sup>3</sup> + 5N<sup>2</sup>+ 1,000,000인 알고리즘이 있다고 할 때 빅오 표기법에서는 차수가 가장 큰 항만을 남기므로 O(N<sup>3</sup>)으로 표현됨.
  - 순위 (아래로 갈 수록 나쁨.)
    - O(1) / 상수 시간(Constant time)
    - O(logN) / 로그 시간(Log time)
    - O(N) / 선형 시간
    - O(NlogN) / 로그 선형 시간
    - O(N<sup>2</sup>) / 이차 시간
    - O(N<sup>3</sup>) / 삼차 시간
    - O(2<sup>n</sup>) / 지수 시간
- 알고리즘 설계 Tip
  - 일반적으로 CPU기반의 개인 컴퓨터나 채점용 컴퓨터에서 연산횟수가 5억을 넘어가는 경우:
    - C언어를 기준으로 통상 1~3초 가량의 시간이 소요됨.
    - Python을 기준으로 통상 5~15초 가량의 시간이 소요되며, PyPy의 경우 떄때로 C언어보다 빠르게 동작하기도 함.
  - 코딩테스트 문제에서 시간제한은 통상 1~5초가량이라는 점에 유의
    - 혹여 명시되어 있지 않은 경우 대략 5초 정도라고 생각하고 문제를 푸는 것이 합리적임.
- 요구사항에 따라 적절한 알고리즘 설계하기
  - 문제에서 가장 먼저 확인해야 하는 내용은 시간제한(수행시간 요구사항)임.
  - 시간제한이 1초인 문제를 만났을 때, 일반적인 기준은 다음과 같음.
    - N의 범위가 500인 경우: 시간 복잡도가 O(N<sup>3</sup>)인 알고리즘을 설계
    - N의 범위가 2,000인 경우: 시간 복잡도가 O(N<sup>2</sup>)인 알고리즘을 설계
    - N의 범위가 100,000인 경우: 시간 복잡도가 O(NlogN)인 알고리즘을 설계
    - N의 범위가 10,000,000인 경우: 시간 복잡도가 O(N)인 알고리즘을 설계
- 일반적인 알고리즘 문제 해결 과정은 다음과 같음
  - 일반적으로 대부분의 문제 출제자들은 핵심 아이디어를 캐치한다면,간결하게 소스코드를 작성할 수 있는 형태로 문제를 출제함.
  1. 지문 읽기 및 컴퓨터적 사고
  1. 요구사항(복잡도)분석
  1. 문제 해결을 위한 아이디어 찾기
  1. 소스코드 설계 및 코딩

## 2-1. 그리디

- 그리디알고리즘
  _ 그리디 알고리즘(탐욕법)은 현재 상황에서 지금 당장 좋은 것만 고르는 방법임
  _ 일반적인 그리디 알고리즘은 문제를 풀기 위한 최소한의 아이디어를 떠올릴 수 있는 능력을 요구함.
  _ 그리디 해법은 정당선 분석이 중요하며, 단순히 가장 좋아 보이는 것을 반복적으로 선택해도 최적의 해를 구할 수 있는지 검토함.  
   _ 일반적인 상황에서 그리디 알고리즘은 최적의 해를 보장할 수 없을 때가 많음. \* 하지만 코딩 테스트에서의 대부분의 그리디 문제는 탐욕법으로 얻은 해가 최적의 해가 되는 상황에서, 이를 추론할 수 있어야 풀리도록 출제가 됨.  
  <img src='https://user-images.githubusercontent.com/71132893/103215106-c587ef00-4955-11eb-8be7-2af3976702b9.png'>
  <img src='https://user-images.githubusercontent.com/71132893/103215110-c6208580-4955-11eb-9efe-750b04bba51e.png'>
  > 위의 사진은 구할 수 있는 최고의 경우이지만, 헤아려야 하는 수가 많기때문에, 아래의 사진처럼 각 상황에서의 최고의 조건을 선택함으로서, 최적의 해의 가깝게 되는 값을 구하는 것이 `그리디 알고리즘`임

### <문제> 거스름돈

- 문제 제시
  <img src='https://user-images.githubusercontent.com/71132893/103215636-4a273d00-4957-11eb-8e1c-ea4cf6ed216b.png'>  
   \* 최적의 해를 빠르게 구하기 위해서는 가장 큰 화폐 단위부터 돈을 거슬러 주면 됨.

- 정당성 분석

  - 가장 큰 화폐 단위부터 돈을 거슬러 주는 것이 최적의 해를 보장하는 이유는 무엇일까?
    - 가지고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이므로 작은 단위의 동전들을 종합해 다른 해가 나올 수 없기 때문
  - 그리디 알고리즘 문제에서는 이처럼 문제 풀이를 위한 최소한의 아이디어를 떠올리고 이것이 정당한지 검토할 수 있어야함.

- 답안 예시(Python)

```Python
n=1260
count=0
array=[500,100,50,10]
for coin in array:
    count+=n //coin
    n%=coin

print(count)
```

- 답안 예시(Javascript) _직접 작성_

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

- 문제 제시

  - 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 함 단, 두 번째 연산은 N이 K로 나누어 떨어질 때만 선택할 수 있음
    1. N에서 1을 뺌.
    2. N을 K로 나눔.
  - 예를 들어 N이 17, K가 4라고 가정합시다. 이때 1번의 과정을 한 번 수행하면 N은 16이 됨. 이후에 2번의 과정을 두 번 수행하면 N은 1이 됨. 결과적으로 이 경우 전체 과정을 실행항 횐수는 3이 돰. 이는 N을 1로 만드는 최소 횟수임.
  - N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하는 프로그램을 작성하시오.

- 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103262918-ac308280-49e9-11eb-91f8-db597d0b7ef0.png)
- <문제> 1이 될 때까지: 문제 해결 아이디어
  ![image](https://user-images.githubusercontent.com/71132893/103264778-fc5e1380-49ee-11eb-9dd4-9a9e77c0b8c1.png)
- <문제> 1이 될 때까지: 정당성 분석
  - 가능하면 최대한 많이 나누는 작업이 최적의 해를 항상 보장할 수 있을까?
  - N이 아무리 큰 수여도, K로 계속 나눈다면 기하급수적으로 빠르게 줄일 수 있음
  - 다시말해 K가 2이상이기만 하면 , K로 나누는 것이 1을 빼는 것보다 항상 빠르게 N을 줄일 수 있음
    - 또한 N은 항상 1에 도달하게 됨(최적의 해 성립)
- <문제> 1이 될 때까지: 답안 예시(Python)

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

- 답안 예시(javascript) _직접 작성_

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

- 문제 설명
  - 각 자리가 숫자(0부터9)로만 이루어진 문자열 S가 주어졌을 때, 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며 숫자 사이에 'x' 혹은 '+'연산자를 넣어 결과적으로 만들어질 수 있는 가장 큰 수를 구하는 프로그램을 작성하시오. 단, +보다 x를 먼저 계산하는 일반적인 방식과는 달리, 모든 연산은 왼쪽에서부터 순서대로 이루어진다고 가정함.
  - 예를 들어 02984라는 문자열로 만들 수 있는 가장 큰 수는 ((((0+2)x9)x8)x4)임. 또한 만들어질 수 있는 가장 큰 수는 항상 20억 이하의 정수가 되도록 입력이 주어짐.
- 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103265561-3cbe9100-49f1-11eb-9a2b-af71ea55c497.png)
- 문제 해결 아이디어
  - 대부분의 경우 +보다는 x가 값을 더 크게 만듦.
    - 예를 들어 5+6=11이고, 5X6=30임.
  - 다만 두 수 중에서 하나라도 '0'혹은 '1'인 경우, 곱하기 보다는 더하기를 수행하는 것이 효율적임
  - 따라서 두 수에 대하여 연산을 수행할 때 두 수중 하나라도 1이하인 경우에는 더하며, 두 수가 모두 2이상인 경우에는 곱하면 정답
- 답안 예시(Python)

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

- 답안 예시(javascript) _직접 작성_

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

- 문제 설명

  - 한 마을에 모험가가 N명 있음. 모험가 길드에서는 N명의 모험가를 대상으로 공포도를 측정했는데, 공포도가 높은 모험가는 쉽게 공포를 느껴 위험 상황에서 제대로 대처할 능력이 떨어짐.
  - 모험가 길드장은 모험가 그룹을 안전하게 구성하고자 <u>공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹에 참여</u>해야 여행을 떠날 수 있도록 규정했음.
  - N명의 모험가에 대한 정보가 주어졌을 때, 여행을 떠날 수 있는 그룹수의 최댓값을 구하는 프로그램을 작성하시오.
  - 예를 들어 N=5이고, 각 모험가의 공포도가 다음과 같다고 가정
    - 2,3,1,2,2
  - 이경우 그룹 1에 공포도가 1,2,3인 모험가를 한 명씩 넣고, 그룹2에 공포도가 2인 남은 두 명을 넣게 되면 총 2개의 그룹을 만들 수 있음
  - 또한 몇 명의 모험가는 마을에 그대로 남아 있어도 되기 때문에, 모든 모험가를 특정한 그룹에 넣을 필요는 없음

- 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103272583-98444b00-4a00-11eb-896a-c7733594b4ba.png)

- 문제 해결 아이디어

  - 오름차순 정렬 이후에 공포도가 가장 낮은 모험가부터 하나씩 확인
  - 앞에서부터 공포도를 하나씩 확인하며 <u>'현재 그룹에 포함된 모험가의 수'가 '현재 확인하고 있는 공포도'보다 크거나 같다면 이를 그룹으로 설정</u>함
  - 이러한 방법을 이용하면 공포도가 오름차순으로 정렬되어 있다는 점에서 항상 최소한의 모험가의 수만 포함하여 그룹을 결성하게 됨.

- 답안 예시(javascript) _직접작성_

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

## 2-2. 구현

- 구현(implementation)
  - 구현이란, 머릿속에 있는 알고리즘을 소스코드로 바꾸는 과정
- 흔히 알고리즘 대회에서 구현 유형의 문제란 무엇을 의마할까?
  - 풀이를 떠올리는 것은 쉽지만 소스코드로 옮기기 어려운 문제를 지칭함.
- 구현 유형의 예시는 다음과 같음
  - 알고리즘은 간단한데 코드가 지나칠만큼 길어지는 문제
  - 실수 연산을 다루고, 특정 소수점 자리까지 출력해야 하는 문제
  - 문자열을 특정한 기준에 따라서 끊어 처리해야 하는 문제
  - 적절한 라이브러리를 찾아서 사용해야 하는 문제

![image](https://user-images.githubusercontent.com/71132893/103275717-1eb05b00-4a08-11eb-9f99-5a014a0a5f31.png)
![image](https://user-images.githubusercontent.com/71132893/103275735-2a9c1d00-4a08-11eb-905b-c5b82c5cdf9c.png)

### <문제> 상하좌우

- 문제 설명
  - 여행가 A는 N x N 크기의 정사각형 공간위에 있음. 이 공간은 1x1 크기의 정사각형으로 나누어져 있음. 가장 왼쪽 위 좌표는 (1,1)이며, 가장 오른쪽 아래 좌표는 (N,N)에 해당함. 여행가 A는 상,하,좌,우 방향으로 이동할 수 있으며, 시작 좌표는 항상(1,1)임. 우리 앞에는 여행가 A가 이동할 계획이 적힌 계획서가 놓여 있음.
  - 계획서에는 하나의 줄에 띄어쓰기를 기준으로 하여 L,R,U,D 중 하나의 문자가 반복적으로 적혀있음. 각 문자의 의미는 다음과 같음
    - L : 왼쪽으로 한 칸 이동
    - R : 오른쪽으로 한 칸 이동
    - U : 위로 한 칸 이동
    - D : 아래로 한 칸 이동

  - 이때 여행가 A가 N x N 크기의 정사각형 공간을 벗어나는 움직임은 무시됨. 예를 들어 (1,1)의 위치에서 L 혹은 U을 만나면 무시됨. 다음은 N=5인 지도와 계획서임.
  ![image](https://user-images.githubusercontent.com/71132893/103278916-f2004180-4a0f-11eb-9ffb-32af0938ee80.png)

- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103278931-fe849a00-4a0f-11eb-9c8f-f30e4313c2fe.png)

- 문제 해결 아이디어
    - 이 문제는 요구사항대로 충실히 구현하면 되는 문제임
    - 일련의 명령에 따라서 개체를 차례대로 이동시킨다는 점에서 시뮬레이션(Simulation)유형으로도 분류되며 구현이 중요한 대표적인 문제 유형임.
        - 다만, 알고리즘 교재나 문제풀이 사이트에 따라서 다르게 일컬을 수도 있으므로, 코딩 테스트에서의 시뮬레이션 유형, 구현 유형, 완전 탐색 유형은 서로 유사한 점이 많다는 정도로만 기억

- 답안 예시(python)

```python
#N 입력 받기
n=int(input())
x,y=1,1
plans=input().split()

# L,R,U,D에 따른 이동 방향
dx=[0,0,-1,1]
dy=[-1,1,0,0]
move_types=['L','R','U','D']

#이동 계획을 하나씩 확인하기
for plan in plans:
    #이동 후 좌표 구하기
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx=x+dx[i]
            ny=y+dy[i]
    #공간을 벗어나는 경우 무시
    if nx < 1 or ny < 1 or nx> n or ny > n:
        continue
    #이동 수행
    x,y=nx,ny

print(x,y)
```

- 답안 예시(javascript) *직접 작성*

```js
const n = prompt("N : ")

const array = []
for (let i = 0; i < 100; i++) {
  const index = prompt("R or L or U or D , e to stop:")
  if(index==='e'){
      break
  }
  array.push(index)
}

const now=[1,1]

for(let i=0; i<array.length;i++){
    if (array[i]==='R'){
        if(now[1]<Number(n)){
            now[1]++
        }
    }else if(array[i]==='L'){
        if(now[1]>1){
            now[1]--
        }
    }else if(array[i]==='U'){
        if(now[0]>1){
            now[0]--
        }
    }else if(array[i]==='D'){
        if(now[0]<Number(n)){
            now[0]++
        }
    }
}

console.log(now[0],now[1])
```

### <문제>시각 
- 문제 설명
    - 정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지의 모든 시간중에서 3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성하시오. 예를 들어 1을 입력했을 때 다음은 3이 하나라도 포함되어 있으므로 <u>세어야 하는 시각</u>임.
        - 00시 00분 03초
        - 00시 13분 30초
    - 반면에 다음은 3이 하나도 포함되어 있지 않으므로 <u>세면 안 되는 시각임</u>
        - 00시 02분 55초
        - 01시 27분 45초

- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103280921-e5cab300-4a14-11eb-9567-ead5f3b96828.png)
- 문제 해결 아이디어
    - 이 문제는 가능한 모든 시각의 경우를 하나씩 모두 세서 풀 수 있는 문제임
    - 하루는 86,400초이므로, 00시00분00초부터 23시 59분 59초까지의 모든 경우는 86,400가지임.
    - 따라서 단순히 시각을 1초씩 증가시키면서 3이 하나라도 포함되어 있는지를 확인하면 됨
    - 이러한 유형은 완전 탐색(Brute Forcing)문제 유형이라고 불림.
        - <u>가능한 경우의 수를 모두 검사해보는 탐색방법</u>을 의미함.
- 답안 예시(python)

```python
h = int(input())

count=0
for i in range(h+1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i)+str(j)+str(k):
                count+=1

print(count)
```

-답안 예시(javascript) _직접 작성_

```js
const n = prompt("N : ")

let count=0

for(let h=0;h<=Number(n);h++){
    for(let m=0;m<60;m++){
        for(let s=0;s<60;s++){
            if(String(h)[1]==='3'||String(m)[0]==='3'||String(m)[1]==='3'||String(s)[0]==='3'||String(s)[1]==='3'){
                count++
            }
        }
    }
}

console.log(count)
```

### <문제> 왕실의 나이트
- 문제 설명
    - 행복 왕궁의 왕실 정원은 체스판과 같은 8 x 8 좌표 평면임. 왕실 정원의 특정한 한 칸에 나이트가 서있음. 나이트는 매우 충성스러운 신하로서 매일 무술을 연마함.
    - 나이트는 말을 타고 있기 때문에 이동을 할 때는 L자 형태로만 이동할 수 있으며 정원 밖으로는 나갈 수 없음
    - 나이트는 특정 위치에서 다음과 같은 두 가지 경우로 이동할 수 있음
        1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
        1. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기
    - 이처럼 8 x 8 좌표 평면상에서 나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력하는 프로그램을 작성하시오. 왕실의 정원에서 행 위치를 표현할 때는 1부터 8로 표현하며, 열 위치를 표현할 때는 a부터 h로 표현함.
        - c2에 있을 때 이동할 수 있는 경우의 수는 6가지임.
        ![image](https://user-images.githubusercontent.com/71132893/103284059-8e7d1080-4a1d-11eb-93c3-84633b761bdb.png)
- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103284105-af456600-4a1d-11eb-9f93-2947721c5eec.png)

- 문제 해결 아이디어
    - 요구사항대로 충실히 구현하면 되는 문제
    - 나이트의 8가지 경로를 하나씩 확인하며 각 위치로 이동이 가능한지 확인
    - 리스트를 이용하여 8가지 방향에 대한 방향 벡터를 정의

- 답안 예시(python)

```python
#현재 나이트의 위치 입력받기
input_data=input()
row=int(input_data[1])
column=int(ord(input_data[0]))-int(ord('a'))+1

#나이트가 이동할 수 있는 8가지 방향 정의
steps=[[-2,1],[-2,-1],[2,1],[2,-1],[-1,2],[-1,-2],[1,2],[1,-2]]

#8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
result=0
for step in steps:
    #이동하고자 하는 위치 확인
    next_row=row+step[0]
    next_column=column+step[1]
    #해당 위치로 이동이 가능하다면 카운트 증가
    if next_row>=1 and next_row<=8 and next_column>=1 and next_column<=8:
        resulut+=1

print(result)
```

- 답안 예시(javascript)

```js
const n = prompt("행열 : ")
// 편의를 위해 (1,1)형태로 받음
//아스키코드 활용하여 a1로 받을 수도

const steps=[[-2,1],[-2,-1],[2,1],[2,-1],[-1,2],[-1,-2],[1,2],[1,-2]]
let count=0

for(let i=0;i<steps.length;i++){
    let row=Number(n[0])-1
    let column=Number(n[1])-1
    row+=steps[i][0]
    column+=steps[i][1]
    if(row>=0&&column>=0&&row<=7&&column<=7){
        count++
    }
}

console.log(count)
```

### <문제> 문자열 재정렬
- 문제 설명
    - 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어짐, 이때 모든 알파벳을 오름차순으로 정렬하여 이어서 출력한 뒤에, 그 뒤에 모든 숫자를 더한 값을 이어서 출력함
        - 예를 들어 K1KA5CB7이라는 값이 들어오면 ABCKK13을 출력함
- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103285861-8d021700-4a22-11eb-8c5d-631c7234630f.png)
- 문제 해결 아이디어
    - 요구사항대로 충실히 구현하면 되는 문제
    - 문자열이 입력되었을 때 문자를 하나씩 확인함
        - 숫자인 경우 따로 합계를 계산함
        - 알파벳의 경우 별도의 리스트에 저장함
    - 결과적으로 리스트에 __저장된 알파벳을 정렬해 출력하고, 합계를 뒤에 붙여 출력하면 정답__
- 답안예시(python)

```python
data=input()
result=[]
value=0

#문자를 하나씩 확인하며
for x in data:
    #알파벳인 경우 결과 리스트에 삽입
    if x.isalpha():
        result.append(x)
    #숫자는 따로 더하기
    else:
        value+=int(x)

#알파벳을 오름차순으로 정렬
result.sort()

#숫자가 하나라도 존재하는 경우 가장 뒤에 삽입
if value!=0:
    result.appned(str(value))

#최종 결과 출력(리스트를 문자열로 변환하여 출력)
print(''.join(result))
```

-답안 예시(javascript)

```js
const n = prompt("문자열 : ")

let array=[]
let num=0
for(let i=0; i<n.length;i++){
    if(isNaN(Number(n[i]))){
        array.push(n[i])

    }else{
        num+=Number(n[i])
    }
}
array.sort()

const text=String(array).replaceAll(',','')+num

console.log(text)
```

<!-- ## 3. DFS & BFS

## 4. 정렬 알고리즘

## 5. 이진 탐색

## 6. 다이나믹 프로그래밍

## 7. 최단 경로 알고리즘

## 8. 기타 그래프 이론

## 9. 코딩 테스트에서 자주 출제되는 기타 알고리즘

## 10. 개발형 코딩 테스트

## 자료구조: 우선순위 큐(Priority Queue)와 힙(Heap) 10분 핵심 요약

## 코딩 테스트를 위한 트리(Tree) 자료구조 10분 핵심 요약

## 코딩 테스트를 위한 벨만 포드 알고리즘 7분 핵심 요약

## 자료구조: 바이너리 인덱스 트리(Binary Indexed Tree, BIT, 펜윅 트리) 10분 정복

## 최소 공통 조상(Lowest Common Ancestor, LCA) 알고리즘 10분 정복 -->
