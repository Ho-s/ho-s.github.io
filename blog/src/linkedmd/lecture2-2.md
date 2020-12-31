---
date: "2020-12-29"
title: "알고리즘 공부 기록/강의2-2"
path: "/lecture/2-2"
---

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