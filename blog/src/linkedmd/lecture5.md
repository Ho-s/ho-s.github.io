---
date: "2020-01-01"
title: "알고리즘 공부 기록/강의5"
path: "/lecture/5"
---

## 5. 이진 탐색

- 순차 탐색: 리스트 안에 있는 특정한 __데이터를 찾기 위해 앞에서부터 데이터를 하나씩 확인하는 방법__
- 이진 탐색: 정렬되어 있는 리스트에서 __탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 방법__
    - 이진 탐색은 시작점, 끝점, 중간점을 이용하여 탐색 범위를 설정한다.

- 이진 탐색 동작 예시
![image](https://user-images.githubusercontent.com/71132893/103434005-20fbfa80-4c3e-11eb-99ec-b47ba2972eb0.png)
![image](https://user-images.githubusercontent.com/71132893/103434008-29543580-4c3e-11eb-86a5-6e2131eb6fa0.png)
![image](https://user-images.githubusercontent.com/71132893/103434011-3ec95f80-4c3e-11eb-9bca-3359393a128e.png)
![image](https://user-images.githubusercontent.com/71132893/103434016-57d21080-4c3e-11eb-931a-176b630f4745.png)

- 이진탐색의 시간 복잡도
    - 단계마다 탐색 범위를 2로 나누는 것과 동일하므로 __연산 횟수는 log<sub>2</sub>*N*에 비례__ 한다.
    - 예를 들어 초기 데이터 개수가 32개 일때, 이상적으로 1단계를 거치면 16개의 데이터만 남는다.
        - 2단계를 거치면 8개의 데이터만 남는다.
        - 3단계를 거치면 4개의 데이터만 남는다.
    - 다시 말해 이진 탐색은 탐색 범위를 절반씩 줄이며, 시간 복잡도는 O(log*N*)을 보장한다.

- 이진탐색 소스코드: 재귀적 구현(Python)

```python

#이진 탐색 소스코드 구현(재귀 함수)
def binary_search(array, target, start, end):
    if start > end:
        return None
    mid = (start+end)//2
    #찾은 경우 중간점 인덱스 반환
    if array[mid]==traget:
        return mid
    #중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
    elif array[mid] > target:
        return binary_search(array, target, start, mid-1)
    #중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
    else:
        return binary_search(array, target, mid+1,end)

#n(원소의 개수)과 target(찾고자 하는 값)을 입력 받기
n, target=list(map(int,input().split()))
# 전채 원소 입력 받기
array=list(map(int,input().split()))

#이진 탐색 수행 결과 출력
result=binary_search(array, target, 0, n-1)
if result = None:
    print('원소가 존재하지 않습니다')
else :
    print(result+1)

# 실행 결과 
#10 7  
# 1 3 5 7 9 11 13 15 17 19
#4

```

- 이진탐색 소스코드: 반복문 구현(Python)

```python
#이진 탐색 소스코드 구현(반복문)
def binary_search(array, target, start, end):
    while start<= end:
        mid = (start+end)//2
        #찾은 경우 중간점 인덱스 반환
        if array[mid]==traget:
            return mid
        #중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
        elif array[mid] > target:
            end = mid -1
        #중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
        else:
            start = mid + 1
    return None

#n(원소의 개수)과 target(찾고자 하는 값)을 입력 받기
n, target=list(map(int,input().split()))
# 전채 원소 입력 받기
array=list(map(int,input().split()))

#이진 탐색 수행 결과 출력
result=binary_search(array, target, 0, n-1)
if result = None:
    print('원소가 존재하지 않습니다')
else :
    print(result+1)
# 실행 결과 
#10 7  
# 1 3 5 7 9 11 13 15 17 19
#4
```

- 파라메트릭 서치(Parametric Search)
    - __파라메트릭 서치__ 란 <u>최적화 문제를 결정 문제('예' 혹은 '아니오')로 바꾸어 해결하는 기법</u>이다.
        예시 : 특정한 조건을 만족하는 가장 알맞은 값을 빠르게 찾는 최적화 문제
    - 일반적으로 코딩 테스트에서 파라메트릭 서치 문제는 __이진탐색을 이용하여 해결__ 할 수 있다.

### <문제> 떡볶이 떡 만들기
- 문제 설명
    - 오늘 당신은 여행가신 부모님을 대신해서 떡집 일을 하기로 했다. 오늘은 떡볶이 떡을 만드는 날이다. 당신의 떡볶이 떡은 재밌게도 떡의 길이가 일정하지 않다. 대신에 한 봉지 안에 들어가는 떡의 총 길이는 절단기로 맞춰준다.
    - 절단기에 __높이(H)__ 를 지정하면 줄지어진 떡을 한 번에 절단한다. 높이가 H보다 긴 떡은 H 위의 부분이 잘릴 것이고, 낮은 떡은 잘리지 않는다.
    - 예를 들어 높이가 19, 14, 10, 17cm 인 떡이 나란히 있고 절단기 높이를 15cm로 지정하면 자른 뒤 떡의 높이는 15, 14, 10, 15가 될 것이다. 잘린 떡의 길이는 차례대로 4, 0, 0, 2cm이다. 손님은 6cm만큼의 길이를 가져간다.
    - 손님이 왔을 때 요청한 총 길이가 M일때 __적어도 M만큼의 떡을 얻기 위해 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램__ 을 작성하시오.

- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103434931-5bb85f80-4c4b-11eb-9d98-6488e022b5dd.png)

- 문제 해결 아이디어
    - 적절한 높이를 찾을 때까지 이진 탐색을 수행하여 높이 H를 반복해서 조정하면 된다.
    - '현재 이 높이로 자르면 조건을 만족할 수 있는가?'를 확인한 뒤에 <u>조건의 만족 여부('예' 혹은 '아니오')에 따라서 탐색 범위를 좁혀서 해결할 수 있다.</u>
    - 절단기의 높이는 0부터 10억까지의 정수 중 하나이다.
        - 이렇게 큰 탐색 범위를 보면 <span style='color:red'>가장 먼저</span> __이진 탐색__ 을 떠올려야 한다.
    - 문제에서 제시된 예시를 통해 그림으로 이해해보자.
    ![image](https://user-images.githubusercontent.com/71132893/103435665-24e74700-4c55-11eb-8e9e-d37b669f0711.png)
![image](https://user-images.githubusercontent.com/71132893/103435726-78a66000-4c56-11eb-918c-4c5864ad86e0.png)
![image](https://user-images.githubusercontent.com/71132893/103435729-8956d600-4c56-11eb-8bdc-4c5e264b70be.png)
![image](https://user-images.githubusercontent.com/71132893/103435731-91167a80-4c56-11eb-9842-047aff6a558f.png)
    - 이러한 이진 탐색 과정을 반복하면 답을 도출할 수 있다.
    - 중간점의 값은 <u>시간이 지날수록 __'최적화된 값'__</u>이 되기 때문에, 과정을 반복하면서 얻을 수 있는 떡의 길이의 합이 떡의 길이보다 크거나 같은 때마다 __중간점의 값을 기록__ 하면 된다.

- 답안 예시(Python)

```python
#떡의 개수(N)와 요청한 떡의 길이(M)을 입력
n,m = list(map(int,input().split(' ')))
#각 떡의 개별 높이 정보를 입력
array= list(map(int,input().split())

#이진 탐색을 위한 시작점과 끝점 설정
start=0
end=max(array)

#이진 탐색 수행(반복적)
result=0
while(start<=end):
    total = 0
    mid=(start+end)//2
    for x in array:
        #잘랐을 때 떡의 양 계산
        if x > mid:
            total += x - mid
    # 떡의 양이 부족한 경우 더 많이 자르기(왼쪽 부분 탐색)
    if total < m:
        end = mid -1
    #떡의 양이 충분한 경우 덜 자르기(오른쪽 부분 탐색)
    else:
        result = mid # 최대한 덜 잘랐을 때가 정답이므로, 여기에서 result에 기록
        start = mid + 1

#정답 출력
print(result)
```

- 답안 예시(Javascript)

```js
const n=Number(prompt('N:'))
const m=Number(prompt('M:'))

const dduckArray=[]
for(let i=0;i<n;i++){
    const dduck=prompt('dduck:')
    dduckArray.push(Number(dduck))
}

dduckArray.sort()

function binary_search(start,end){
    if(start>end){
        return
    }

    const mid =Math.floor((start+end)/2)
    let height=mid
    let sum=0
    
    for(let i=0;i<n;i++){
        if(dduckArray[i]-height<0){
            continue
        }else{
            sum+=dduckArray[i]-height
        }
    }

    if(sum===m){
        console.log(mid)
    }

    if(sum<m){
        binary_search(start,mid-1)
    }else{
        binary_search(mid+1,end)
    }
}

binary_search(0,dduckArray[dduckArray.length-1])
```

### <문제> 정렬된 배열에서 특정 수의 개수 구하기
- 문제 설명
    - N개의 원소를 포함하고 있는 수열이 오름차순으로 정렬되어 있다. 이때 이 <u>수열에서 x가 등장하는 횟수를 계산</u>하시오.
        - 예를 들어 수열{1,1,2,2,2,2,3}이 있을 때 x = 2라면, 현재 수열에서 값이 2인 원소가 4개이므로 4를 출력한다.
    - 단, 이 문제는 시간복잡도 O(log*N*)으로 알고리즘을 설계하지 않으면 __시간 초과__ 판정을 받는다.

- 문제 조건
![image](https://user-images.githubusercontent.com/71132893/103436038-d8066f00-4c5a-11eb-9544-d7396c84f0f8.png)

- 문제 해결 아이디어
    - 시간 복잡도 O(log*N*)으로 동작하는 알고리즘을 요구하고 있다.
        - 일반적인 <u>선형탐색(Linear Search)로는 시간초과 판정</u>을 받는다
        - 하지만 데이터가 정렬되어 있기 때문에 이진 탐색을 수행할 수 있다.
    - 특정 값이 등장하는 첫 번째 위치와 마지막 위치를 찾아 위치 차이를 계산개 문제를 해결할 수 있다.

- 답안 예시(javascript)

```js
const n=Number(prompt('N:'))
const x=Number(prompt('X:'))

const array=[]
for(let i=0;i<n;i++){
    const num=prompt('num:')
    array.push(Number(num))
}

let left=0
let right=0

function binary_search(start,end){
    if(start>end){
        return
    }

    const mid =Math.floor((start+end)/2)

    if(array[mid]<x && array[mid+1]===x){
        left=mid
    }
    if(array[mid]>x && array[mid-1]===x){
        right=mid
    }

    binary_search(mid+1,end)
    binary_search(start,mid-1)
}

while(left===0 && right===0){
    binary_search(0,array.length-1)
}

console.log(right-left-1)
```