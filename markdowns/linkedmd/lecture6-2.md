---
date: "2021-01-05"
title: "알고리즘 공부 기록/강의6-2"
path: "/lecture/6-2"
---

## 6-2. 다이나믹 프로그래밍 - 문제

### 다이나믹 프로그래밍 문제에 접근하는 방법

- 주어진 문제가 **다이나믹 프로그래밍 유형임을 파악**하는 것이 중요하다.
- 가장 먼저 그리디, 구현, 완전 탐색 등의 아이디어로 문제를 해결할 수 있는지 검토한다.
  - 다른 알고리즘으로 풀이 방법이 떠오르지 않는다면 다이나믹 프로그래밍을 고려해보자.
- 일단 재귀 함수로 비효율적인 완전 탐색 프로그램을 작성한 뒤에 (탑다운) 작은 문제에서 구한 답이 큰 문제에서 그대로 사용될 수 있으면, 코드를 개선하는 방법을 사용할 수 있다.
- <u>일반적인 코딩테스트 수준에서는 기본 유형의 다이나믹 프로그래밍 문제가 출제</u>되는 경우가 많다.

### <문제> 개미전사

#### 문제 설명
  - 개미 전사는 부족한 식량을 충당하고자 메뚜기 마을의 식량창고를 몰래 공격하려고 한다. 메뚜기 마을에는 여러 개의 식량 창고가 있는데 식량 창고는 일직선으로 이어져 있다.
  - 각 식량창고에는 정해진 수의 식량을 저장하고 있으며 개미 전사는 식량창고를 선택적으로 약탈하여 식량을 빼앗을 예정이다. 이때 메뚜기 정찰병들은 일직선상에 존재하는 식량창고 중에서 서로 인접한 식량창고가 공격받으면 바로 알아챌 수 있다.
  - 따라서 개미 전사가 정찰병에게 들키지 않고 식량 창고를 약탈하기 위해서는 <u>최소한 한 칸 이상 떨어진 식량 창고를 약탈</u>해야 한다.
  - 예를 들어 식량창고 4개가 다음과 같이 존재한다고 가정해보자.
    ![image](https://user-images.githubusercontent.com/71132893/103621736-00eb7480-4f79-11eb-822f-5b3354c2131c.png)
  - 이때 개미 전사는 두 번째 식량창고와 네 번째 식량창고를 선택했을 때 최댓값인 총 8개의 식량을 빼앗을 수 있다. 개미 전사는 식량창고가 이렇게 일직선상일 때 최대한 많은 식량을 얻기를 원한다.
  - 개미 전사를 위해 식량창고 N개에 대한 정보가 주어졌을 때 **얻을 수 있는 식량의 최댓값**을 구하는 프로그램을 작성하시오.

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103622074-85d68e00-4f79-11eb-9317-b8d18fa1e1b1.png)

#### 문제 해결 아이디어
  - N = 4일 때, 다음과 같은 경우들이 존재할 수 있다.
    - 식량을 선택할 수 있는 경우의 수는 다음과 같이 8가지 이다.
    - 7번째 경우에서 8만큼의 식량을 얻을 수 있으므로 **최적의 해는 8**이다.
      ![image](https://user-images.githubusercontent.com/71132893/103623928-29c13900-4f7c-11eb-946e-968bcb393494.png)
  - _a<sub>i</sub>_ = *i*번째 식량창고 까지의 최적의 해(얻을 수 있는 식량의 최댓값)
    - 이렇게 정의한다면 다이나믹 프로그래밍을 적용할 수 있다.
      ![image](https://user-images.githubusercontent.com/71132893/103624051-570de700-4f7c-11eb-8f24-e747f5fd1388.png)
  - 왼쪽부터 차례대로 식량창고를 턴다고 했을 때, 특정한 *i*번째 식량창고에 대해서 털지 안 털지의 여부를 결정하면, 아래 **2가지**경우 중에서 더 많은 식량을 털 수 있는 경우를 선택하면 된다.
    ![image](https://user-images.githubusercontent.com/71132893/103624250-9f2d0980-4f7c-11eb-806c-e2a805e5872c.png)
  - _a<sub>i</sub>_ = *i*번째 식량창고까지의 최적의 해(얻을 수 있는 식량의 최댓값)
  - _k<sub>i</sub>_ = *i*번째 식량창고에 있는 식량의 양
  - 점화식은 다음과 같다.
    > <span style='font-size:30px'>_a<sub>i</sub>_ = _max_(_a<sub>i-1</sub>_, _a<sub>i-2</sub>_ + _k<sub>i</sub>_)</span>
  - 한 칸 이상 떨어진 식량창고는 항상 털 수 있으므로 (_i_ - 3)번째 이하는 고려할 필요가 없다.

#### 답안 예시(Python)

```python
#정수 N을 입력 받기
n = int(input())
#모든 식량 정보 입력 받기
array = list(map(int,input().split()))

#앞서 계산된 결과를 저장하기 위한 DP 테이블 초기화
d = [0] * 100

# 다이나믹 프로그래밍 진행(보텀업)
d[0] = array[0]
d[1] = max(array[0], array[1])
for i in range(2, n):
    d[i] = max(d[i - 1], d[i - 2] + array[i])

# 계산된 결과 출력
print(d[n - 1])
```

#### 답안 예시(Javascript)

```js
const n = prompt("N:")

array = []
for (let i = 0; i < n; i++) {
  const k = prompt("M:")
  array.push(k)
}

const d = []

d[0] = array[0]
d[1] = array[0] - array[1] > 0 ? array[0] : array[1]
for (let i = 2; i < n; i++) {
  d[i] = d[i - 1] - (d[i - 2] + array[i]) > 0 ? d[i - 1] : d[i - 2] + array[i]
}

console.log(d[n - 1])
```

### <문제> 1로 만들기

#### 문제 설명

  - 정수 X가 주어졌을 때, 정수 X에 사용할 수 있는 연산은 다음과 같이 **4가지**이다.
    1. X가 5로 나누어 떨어지면, 5로 나눈다.
    1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
    1. X가 2로 나누어 떨어지면, 2로 나눈다.
    1. X에서 1을 뺀다.
  - 정수 X가 주어졌을 때, 연산 4개를 적절히 사용해서 값을 1로 만들고자 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오. 예를 들어 정수가 26이면 다음과 같이 계산해서 3번의 연산이 최솟값이다.
    - 26 -> 25 -> 5 -> 1

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103626876-292aa180-4f80-11eb-85d0-7920c83d709f.png)

#### 문제 해결 아이디어
  - 피보나치 수열 문제를 도식화한 것처럼 함수가 호출되는 과정을 그림으로 그려보면 다음과 같다.
    - **최적 부분 구조**와 **중복되는 부분 문제**를 만족한다.
      ![image](https://user-images.githubusercontent.com/71132893/103628632-a48d5280-4f82-11eb-8768-bab48d93253e.png)
  - _a<sub>i</sub>_ = *i*를 1로 만들기 위한 최소 연산 횟수
  - 점화식은 다음과 같다.
    ><span style='font-size:30px'> _a<sub>i</sub>_ = _min_(_a<sub>i-1</sub>_, _a<sub>i/2</sub>_, _a<sub>i/3</sub>_, _a<sub>i/5</sub>_) + 1 </span>
  - 단, 1을 빼는 연산을 제외하고는 <u>해당 수로 나누어떨어질 때에 한해 점화식을 적용</u>할 수 있다.
  
#### 답안 예시(Python)

```python
#정수 X를 입력 받기
x = int(input())

#앞서 게산된 결과를 저장하기 위한 DP테이블 초기화
d=[0]*30001

#다이나믹 프로그래밍 진행(보텀업)
for i in range(2, x+1):
    #현재의 수에서 1을 빼는 경우
    d[i] = d[i - 1] + 1
    #현재의 수가 2로 나누어 떨어질 경우
    if i % 2 == 0:
        d[i] = min(d[i],d[i // 2] + 1)
    #현재의 수가 3으로 나누어 떨어지는 경우
    if i % 3 == 0:
        d[i] = min(d[i], d[i // 3] + 1)
    #현재의 수가 5로 나누어 떨어지는 경우
    if i % 5 == 0:
        d[i] = min(d[i], d[i // 5] + 1)

print(d[x])
```

#### 답안 예시(Javascipt)

```js
let x = Number(prompt("x:"))

const d = []
d[1] = 1

for (let i = 2; i < x + 1; i++) {
  d[i] = d[i - 1] + 1

  if (parseInt(i / 2) === i / 2) {
    d[i] = d[i] - (d[i / 2] + 1) < 0 ? d[i] : d[i / 2] + 1
  }

  if (parseInt(i / 3) === i / 3) {
    d[i] = d[i] - (d[i / 3] + 1) < 0 ? d[i] : d[i / 3] + 1
  }

  if (parseInt(i / 5) === i / 5) {
    d[i] = d[i] - (d[i / 5] + 1) < 0 ? d[i] : d[i / 5] + 1
  }
}
console.log(d[x])
```

### <문제> 효율적인 화폐 구성

#### 문제 설명

  - N가지 종류의 화폐가 있다. 이 화폐들의 개수를 최소한으로 이용해서 그 가치의 합이 M원이 외도록 하려고 한다. 이때 각 종류의 화폐는 몇 개라도 사용할 수 있다.
  - 예를 들어 2원, 3원 단위의 화폐가 있을 때에는 15원을 만들기 위해 3원을 5개 사용하는 것이 가장 최소한의 화폐 개수이다.
  - <u>M원을 만들기 위한 최소한의 화폐 개수</u>를 출력하는 프로그램을 작성하시오.

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103634532-8c213600-4f8a-11eb-9c8e-d1712c2595b5.png)

#### 문제 해결 아이디어
  - **_a<sub>i</sub>_**= 금액 *i*를 만들 수 있는 최소한의 화폐 개수
  - **_k_**= 각 화폐의 단위
  - **점화식**: 각 화폐 단위인 *k*를 **<span style='color:red'>하나씩 확인하며</span>**
    - _a<sub>i-k</sub>_ 를 만드는 방법이 존재하는 경우 : _a<sub>i</sub>_ = _min_(_a<sub>i</sub>_, _a<sub>i-k</sub>_ + 1)
    - _a<sub>i-k</sub>_ 를 만드는 방법이 존재하지 않는 경우 : _a<sub>i</sub>_ = _INF_
  - **_N_ = 3**, **_M_ = 7**이고, 각 화폐의 단위가 2, 3, 5인 경우 확인해보자.
    1. **Step 0 (초기화)**- 먼저 각 인덱스에 해당하는 값으로 INF(무한)의 값을 설정한다. - INF은 특정 금액을 만들 수 잇는 화폐 구성이 가능하지 않다는 의미를 가진다. - 본 문제에서는 10,001을 사용할 수 있다.
       ![image](https://user-images.githubusercontent.com/71132893/103640077-b840b500-4f92-11eb-86e9-21f3568a633d.png)
    1. **Step 1**
       - 첫 번째 화폐 단위인 2를 확인한다.
       - 점화식에 따라서 다음과 같이 리스트가 갱신된다.
         ![image](https://user-images.githubusercontent.com/71132893/103640205-ede59e00-4f92-11eb-81aa-6a63ac10d765.png)
    1. **Step 2**
       - 두 번째 화폐 단위인 3을 확인한다.
       - 점화식에 따라서 다음과 같이 리스트가 갱신된다.
         ![image](https://user-images.githubusercontent.com/71132893/103640281-153c6b00-4f93-11eb-8693-c1661bb84a69.png)
    1. **Step 3**
       - 세 번째 화폐 단위인 5를 확인한다.
       - 점화식에 따라서 다음과 같이 최종적으로 리스트가 갱신된다.
         ![image](https://user-images.githubusercontent.com/71132893/103640349-2e451c00-4f93-11eb-9a54-51a2c1153156.png)

#### 답안 예시(Python)

```python
#정수 N,M을 입력 받기
n, m = map(int,input().split())
# N개의 화폐 단위 정보를 입력 받기
array=[]
for i in range(n):
    array.append(int(input()))

# 한 번 계산된 결과를 저장하기 위한 DP테이블 초기화
d=[10001] * (m+1)

#다이나믹 프로그래밍 진행(보텀업)
d[0]=0
for i in range(n):
    for j in range(array[i], m + 1):
        if d[j - array[i]] != 10001: # (i - k)원을 만드는 방법이 존재하는 경우
            d[j] = min(d[j], d[j-array[i]] + 1)

#계산된 결과 출력
if d[m] == 10001:
    print(-1)
else:
    print(d[m])
```

#### 답안 예시(Javascript)

```js
const n = Number(prompt("n:"))
const m = Number(prompt("m:"))

const array = []
for (let i = 0; i < n; i++) {
  const k = Number(prompt("k:"))
  array.push(k)
}

const d = []
d[0] = 0

for (let i = 1; i < m + 1; i++) {
  d.push(10001)
}

for (let i = 0; i < n; i++) {
  for (let j = array[i]; j < m + 1; j++) {
    if (d[j] - array[i] !== 10001) {
      d[j] = d[j] - (d[j - array[i]] + 1) < 0 ? d[j] : d[j - array[i]] + 1
    }
  }
}

if (d[m] === 10001) {
  console.log(-1)
} else {
  console.log(d[m])
}
```

### <문제>금광

#### 문제 설명
  - n x m 크기의 금광이 있다. 금광은 1 x 1 크기의 칸으로 나누어져 있으며, 각 칸은 특정한 크기의 금이 들어있다.
  - 채굴자는 첫 번째 열부터 출발하여 금을 캐기 시작한다. 맨 처음에는 첫 번째 열의 어느 행에서든 출발할 수 있다. 이후에 m - 1번에 걸쳐서 매번 오른쪽 위, 오른쪽 아래, 오른쪽 3가지 중 하나의 위치로 이동해야 한다. 결과적으로 **채굴자가 얻을 수 있는 금의 최대 크기**를 출력하는 프로그램을 작성하시오.
    ![image](https://user-images.githubusercontent.com/71132893/103643612-58e5a380-4f98-11eb-9834-af10784a63fd.png)

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103643713-731f8180-4f98-11eb-905b-751f83510073.png)

#### 문제 해결 아이디어

  - 금광의 모든 위치에 대하여 다음의 세 가지만 고려하면 된다.
    1. 왼쪽 위에서 오는 경우
    1. 왼쪽 아래에서 오는 경우
    1. 왼쪽에서 오는 경우
  - **세 가지**경우 중에서 <u>가장 많은 금을 가지고 있는 경우</u>를 테이블에 갱신해주어 문제를 해결한다.
    ![image](https://user-images.githubusercontent.com/71132893/103643871-bed22b00-4f98-11eb-89de-bc736475391b.png)
  - _array[i][j]_ = *i*행 *j*열에 존재하는 금의 양
  - _dp[i][j]_ = *i*행 *j*열까지의 최적의 해 (얻을 수 있는 금의 최댓값)
  - 점화식은 다음과 같다
    > <span style='font-size:24px'>_dp[i][j]_ = _array[i][j]_ + _max_(_dp[i - 1][j - 1]_, _dp[i][j - 1]_, _dp[i + 1][j - 1]_)</span>
  - 이때 테이블에 접근할 때마다 리스트의 범위를 벗어나지 않는지 체크해야 한다.
  - 편의상 초기 데이터를 담는 변수 array를 사용하지 않아도 된다.
    - 바로 DP테이블에 초기 데이터를 담아서 다이나믹 프로그래밍을 적용할 수 있다.
  - 금광 문제를 다이나믹 프로그래밍으로 해결하는 과정을 확인해보자.
    ![image](https://user-images.githubusercontent.com/71132893/103645116-d7434500-4f9a-11eb-9a6d-ac8cfcc380c7.png)

#### 답안 예시(Python)

```python
#테스트 케이스 입력
for tc in range(int(input())):
    #금광 정보 입력
    n, m = map(int, input().split())
    array = list(map(int,input().split()))
    #다이나믹 프로그래밍을 위한 2차원 DP테이블 초기화
    dp = []
    index = 0
    for i in range(n):
        dp.append(array[index:index + m])
        index += m
    # 다이나믹 프로그래밍 진행
    for j in range(i, m):
        for i in range(n):
            #왼쪽 위에서 오는 경우
            if i==0:
                left_up=0
            else:
                left_up = dp[i - 1][j - 1]
            #왼쪽 아래에서 오는 경우
            if i==n-1:
                left_down=0
            else:
                left_down=dp[i + 1][j + 1]
            left = dp[i][j-1]
            dp[i][j] = dp[i][j] + max(left_up, left_down, left)
    result=0
    for i in range(n):
        result = max(result, dp[i][m-1])
    print(result)
```

### <문제> 병사 배치하기

#### 문제 설명

  - N명의 병사가 무작위로 나열되어 있다. 각 병사는 특정한 값으 전투력을 보유하고 있다.
  - 병사를 배치할 때는 **전투력이 높은 병사가 앞쪽에 오도록 내림차순으로 배치**하고자 한다. 다시 말해 앞쪽에 있는 병사의 전투력이 항상 뒤쪽에 있는 병사보다 높아야 한다.
  - 또한 배치 과정에서는 특정한 위치에 있는 병사를 열외시키는 방법을 이용한다. 그러면서도 남아있는 병사의 수가 최대가 되도록 하고 싶다.
  - 예를 들어, N = 7일 때, 나열된 병사들의 전투력이 다음과 같다고 하자.
    ![image](https://user-images.githubusercontent.com/71132893/103647885-53d82280-4f9f-11eb-831a-3d4a25375b37.png)
  - 이 때 3번 병사와 6번 병사를 열외시키면, 다음과 같이 남아있는 병사의 수가 내림차순의 형태가 되며 5명이 된다. 이는 남아있는 병사의 수가 최대가 되도록 하는 방법이다.
    ![image](https://user-images.githubusercontent.com/71132893/103647895-58044000-4f9f-11eb-8dcf-a34aeb36803a.png)
  - 병사에 대한 정보가 주어졌을 때, 남아있는 병사의 수가 최대가 되도록 하기 위해서 열외시켜야 하는 병사의 수를 출력하는 프로그램을 작성하시오.

#### 문제 조건
  ![image](https://user-images.githubusercontent.com/71132893/103648103-ac0f2480-4f9f-11eb-8f7a-57aa50b24de4.png)

#### 문제 해결 아이디어

  - 이 문제의 기본 아이디어는 **가장 긴 증가하는 부분 수열(Longest Increasing Subsequence, LIS)**로 알려진 전형적인 다이나믹 프로그래밍 문제의 아이디어와 같다.
  - 예를 들어 하나의 긴 수열 _array_ = {4,2,5,8,4,11,15}이 있다고 하자.
    - 이 수열의 가장 긴 증가하는 부분 수열은 (4,5,8,11,15)이다.
  - <u>본 문제는 가장 긴 감소하는 부분 수열을 찾는 문제</u>로 치환할 수 있으므로, LIS 알고리즘을 조금 수정하여 적용함으로써 정답을 도출할 수 있다.
  - 가장 긴 증가하는 부분수열(LIS)알고리즘을 확인해보자
  - **_D_[*i*]**= _array_[*i*]를 마지막 원소로 가지는 부분 수열의 최대 길이
  - 점화식은 다음과 같다.
    - 모든 _0_ <= _j_ < *i*에 대하여,
    > <span style='font-size:30px'>_D[i]_ = _max_(_D[i]_, _D[j]_ + 1) _if array[j]_ < _array[i]_</span>

      ![image](https://user-images.githubusercontent.com/71132893/103649050-29876480-4fa1-11eb-9d0b-1d23f5b95758.png)
  - 가장 먼저 입력 받은 병사 정보의 순서를 뒤집는다.
  - **가장 긴 증가하는 부분 수열(LIS)**알고리즘을 수행하여 정답을 도출한다.

#### 답안 예시(Python)

```python
n = int(input())
array =list(map(int, input().split()))
#순서를 뒤집어 '최장 증가 부분 수열' 문제로 변환
array.reverse()

#다이나믹 프로그래밍을 위한 1차원 DP테이블 초기화
dp = [1] * n

#가장 긴 증가하는 부분 수열 알고리즘 수행
for i in range(1, n):
    for j in range(0,i):
        if array[j] < array[i]:
            dp[i] = max(dp[i], dp[j] + 1)

#열외해야 하는 병사의 최소 수 출력
print(n - max(dp))
```

#### 답안 예시(Javascript)

```js
const n = Number(prompt("N:"))

const array = []
for (let i = 0; i < n; i++) {
  const k = Number(prompt("k:"))
  array.push(k)
}

array.reverse()

const dp = []
for (let i = 0; i < n; i++) {
  dp.push(1)
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (array[j] < array[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}
console.log(n - Math.max.apply(null, dp))
```
