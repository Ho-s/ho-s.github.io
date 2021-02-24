---
date: "2021-01-09"
title: "알고리즘 공부 기록/강의9-2"
path: "/lecture/9-2"
---

## 투 포인터(Two Pointers)
- **투 포인터 알고리즘**은 <u>리스트에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리</u>하는 알고리즘을 의미한다.
- 흔히 2, 3, 4, 5, 6, 7번 학생을 지목해야 할 때 간단히 '2번부터 7번까지의 학생'이라고 부르곤 한다.
- 리스트에 담긴 데이터에 순차적으로 접근해야 할 때 **시작점**과 **끝점** 2개의 점으로 접근할 데이터의 범위를 표현할 수 있다.

### <문제>특정한 합을 가지는 부분 연속 수열 찾기
- 문제 설명
    - N개의 자연수로 구성된 수열이 있다.
    - **합이 M인 부분 연속 수열의 개수**를 구하시오
    - 수행 시간 제한은 **O(N)**이다.
    ![image](https://user-images.githubusercontent.com/71132893/104083869-8e82d900-5285-11eb-9603-bda9e5390703.png)
- 문제 해결 아이디어
    - <u>투 포인터를 활용</u>하여 다음과 같은 **알고리즘**으로 문제를 해결할 수 있다.
        1. 시작점(Start)과 끝점(End)이 첫 번째 원소의 인덱스(0)를 가리키도록 한다.
        1. 현재 부분 합이 M과 같다면, 카운트한다.
        1. 현재 부분 합이 M보다 작다면, end를 1 증가시킨다.
        1. 현재 부분 합이 M보다 크거나 같다면, start를 1 증가시킨다.
        1. 모든 경우를 확인할 때까지 2번부터 4번까지의 과정을 반복한다.
    ![image](https://user-images.githubusercontent.com/71132893/104083924-f46f6080-5285-11eb-8caf-99e3ed3e472b.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083931-fdf8c880-5285-11eb-973d-132af3458883.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083933-03561300-5286-11eb-95c2-e44c72604e80.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083946-1e288780-5286-11eb-9a84-a2d4dc5f8882.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083949-27195900-5286-11eb-91f1-8c4dd5bbd5c0.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083952-2c76a380-5286-11eb-8266-001c21a77118.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083953-30a2c100-5286-11eb-8c4a-2a6aaa825117.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083956-34cede80-5286-11eb-8182-657176135023.png)
    ![image](https://user-images.githubusercontent.com/71132893/104083962-3b5d5600-5286-11eb-8451-7f1616121512.png)

- 코드 예시(Python)

```python
n = 5 #데이터의 개수 N
m = 5 #찾고자 하는 부분합 M
data = [1,2,3,2,5] #전체 수열

count=0
interval_sum=0
end=0

#start를 차례대로 증가시키며 반복
for start in range(n):
    #end를 가능한 만큼 이동시키기
    while interval_sum < m and end < n:
        interval_sum += data[end]
        end +=1
    #부분합이 m일 때 카운트 증가
    if interval_sum == m:
        count+=1
    interval_sum -= data[start]

print(count) #실행결과 3
```