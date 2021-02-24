---
date: "2020-12-31"
title: "알고리즘 공부 기록/강의4-2"
path: "/lecture/4-1"
---

## 4-2. 삽입 정렬

### 개요

- 처리되지 않은 데이터를 하나씩 골라 **적절한 위치에 <span style='color:red'>삽입</span>**한다.
- 선택 정렬에 비해 구현 난이도가 높은 편이지만, 일반적으로 더 효율적으로 작동한다.

#### 동작 예시
  ![image](https://user-images.githubusercontent.com/71132893/103399667-71fbe800-4b85-11eb-804e-146ad4fd79f9.png)
  ![image](https://user-images.githubusercontent.com/71132893/103399678-87711200-4b85-11eb-8396-e2e44f7a5d4e.png)
  ![image](https://user-images.githubusercontent.com/71132893/103399688-9788f180-4b85-11eb-87e6-e38647fda75b.png)
  ![image](https://user-images.githubusercontent.com/71132893/103399702-a374b380-4b85-11eb-8b8a-2b4108c4c2ab.png)
  ![image](https://user-images.githubusercontent.com/71132893/103399707-ac658500-4b85-11eb-9e9b-a0a4d4db2c75.png)

#### 소스코드 (python)

```python
array=[7,5,9,0,3,1,6,2,4,8]

for i in range(1,len(array)):
    for j in range(i,0,-1): #인덱스 i부터 1까지 1씩 감소하며 반복하는 문법
        if array[j] < array[j-1]: #한 칸씩 왼쪽으로 이동
            array[j], array[j-1] = array[j-1],array[j]
        else : #자기보다 작은 데이터를 만나면 그 위치에서 멈춤
            break

print(array)
#실행 결과 [0,1,2,3,4,5,6,7,8,9]
```

#### 시간 복잡도
  - 삽입 정렬의 시간복잡도는 O(N<sup>2</sup>)이며, 선택 정렬과 마찬가지로 반복문이 두 번 중첩되어 사용된다.
  - 삽입 정렬은 </u>현재 리스트의 데이터가 거의 정렬되어 있는 상태라면 매우 빠르게 동작</u>한다.
    - 이미 정렬되어 있는 상태에서 다시 삽입 정렬을 수행하면 어떻게 될까?
    - 최선의 경우 O(N)의 시간 복잡도를 갖는다.
