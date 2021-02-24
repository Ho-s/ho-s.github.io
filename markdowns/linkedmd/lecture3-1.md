---
date: "2020-12-30"
title: "알고리즘 공부 기록/강의3-1"
path: "lecture/3-1"
---

## 3-1. 큐, 스택, 재귀함수

### 그래프 탐색 알고리즘 : DFS/BFS

  - 탐색(Search)이란 많은 양의 데이터 중에서 **원하는 데이터를 찾는 과정**을 말함.
  - 대표적인 그래프 탐색 알고리즘으로는 DFS와 BFS가 있음.
  - DFS/BFS는 코딩테스트에서 매우 자주 등장하는 유형이므로 필히 숙지가 요구됨.

### 스택 자료구조

  - 먼저 들어온 데이터가 나중에 나가는 형식(선입후출)의 자료구조
  - **입구와 출구가 동일한 형태**로 스택을 시각화할 수 있음.  
    ![image](https://user-images.githubusercontent.com/71132893/103338205-02bcc000-4ac1-11eb-8fdb-733b8a41203c.png)

  - 스택 구현 예제(Python)

  ```python
  stack=[]

  # 삽입 - 삽입 - 삽입 - 삽입 - 삭제 - 삽입 - 삽입 - 삭제
  stack.append(5)
  stack.append(2)
  stack.append(3)
  stack.append(7)
  stack.pop()
  stack.append(1)
  stack.append(4)
  stack.pop()

  print(stack[::-1]) #최상단 원소부터 출력 출력 결과 : [1,3,2,5]
  print(stack) #최하단 원소부터 출력 출력 결과 : [5,2,3,1]
  ```

### 큐 자료구조

  - 먼저 들어온 데이터가 먼저 나가는 형식(선입선출)의 자료구조
  - 큐는 **입구와 출구가 모두 뚫려있는 터널과 같은 형태**로 시각화 할 수 있음.
    ![image](https://user-images.githubusercontent.com/71132893/103338602-3cda9180-4ac2-11eb-9113-5a43adda39fd.png)

  - 큐 구현 예제(python)

  ```python
  from collections import deque

  #큐 구현을 위해 deque라이브러리 사용
  queue=deque()

  # 삽입 - 삽입 - 삽입 - 삽입 - 삭제 - 삽입 - 삽입 - 삭제
  queue.append(5)
  queue.append(2)
  queue.append(3)
  queue.append(7)
  queue.popleft()
  queue.append(1)
  queue.append(4)
  queue.popleft()

  print(queue) #먼저 들어온 순서대로 출력 결과:deque([3,7,1,4])
  queue.reverse() #역순으로 바꾸기
  print(queue) #먼저 들어온 순서대로 출력 결과:deque([4,1,7,3])
  ```

### 재귀 함수

  - 재귀 함수(Recursive Function)란 <span style='color:violet'>자기 자신을 다시 호출하는 함수</span>를 의미함
  - 단순한 형태의 재귀 함수 예제
  - '재귀 함수를 호출합니다.'라는 문자열을 무한히 출력
  - 어느정도 출력하다가 최대 재귀 깊이 초과 메시지가 출력됨

  ```python
  def recursive_function():
      print('재귀 함수를 호출합니다.')
      recursive_function()

  recursive_function()
  ```

  - 재귀 함수의 종료 조건

    - 재귀 함수를 문제 풀이에서 사용할 때는 재귀 함수의 종료 조건을 반드시 명시해야 함.
    - 종료 조건을 제대로 명시하지 않으면 함수가 무한히 호출될 수 있음.
    - 종료 조건을 포함한 재귀 함수 예제

    ```python
    def recursive_function(i):
        #100번째 호출을 했을 때 종료 조건 명시
        if i == 100:
            return
        print(i, '번째 재귀함수에서' ,i+1,'번째 재귀 함수를 호출합니다.')
        recursive_function(i+1)
        print(i,'번째 재귀함수를 종료합니다')
    recursive_function(1)
    ```

  - 팩토리얼 구현 예제

    - n! = 1 X 2 X 3 X ... X (n-1) X n
    - 수학적으로 0!과 1!의 값은 1임.

    ```python
    # 반복적으로 구현한 n!
    def factorial_iterative(n):
        result=1
        # 1부터 n까지의 수를 차례대로 곱하기
        for i in range(1,n+1):
            result *=i
            return result

    # 재귀적으로 구현한 n!
    def factorial_recursive(n):
        if n<= 1: #n이 1이하인 경우 1을 반환
            return 1
        #n! =n*(n-1)!을 그대로 코드로 작성하기
        return n*factorial_recursive(n-1)

    #각각의 방식으로 구현한 n! 출력 (n=5)
    print('반복적으로 구현:',factorial_iterative(5))
    print('재귀적으로 구현:',factorial_recursive(5))
    ```

  - 최대 공약수 계산(유클리드 호제법)예제
    - <u>두개의 자연수에 대한 최대공약수</u>를 구하는 대표적인 알고리즘으로는 유클리드 호제법이 있음
    - **유클리드 호제법**
      1. 두 자연수 A,B에 대하여(A>B) A를 B로 나눈 나머지를 R이라고 하고,
      1. 이때 A와 B의 최대 공약수는 B와 R의 최대 공약수와 같음.
    - 유클리드 호제법의 아이디어를 그대로 재귀 함수로 작성할 수 있음.
      ![image](https://user-images.githubusercontent.com/71132893/103349572-876b0680-4ae0-11eb-93b7-a238b17a43c4.png)

    - 예제(python)
    ```python
    def gcd(a,b):
        if a%b==0:
            return b
        else :
            return gcd(b,a%b)
    print(gcd(192,162))
    # 실행 결과 : 6
    ```
  - 재귀함수 사용의 유의 사항
    - 재귀 함수를 잘 활용하면 복잡한 알고리즘을 간결하게 작성할 수 있음.
      - 단, 오히려 다른 사람이 이해하기 어려운 형태의 코드가 될 수도 있으므로 신중하게 사용해야 함.
    - 모든 <u>재귀 함수는 반복문을 이용하여 동일한 기능을 구현</u>할 수 있음.
    - 재귀 함수가 반복문보다 유리한 경우도 있고, 불리한 경우도 있음.
    - 컴퓨터가 함수를 연속적으로 호출하면 컴퓨터 메모리 내부의 스택 프레임에 쌓임.
      - 그래서 스택을 사용해야 할 때 구현상 **스택 라이브러리 대신에 재귀함수를 이용**하는 경우가 많음.
