---
date: "2021-01-13"
title: "알고리즘 공부 기록/강의12"
path: "/lecture/12"
---

### 트리
- 트리는 가계도와 같은 **계층적인 구조**를 표현할 때 사용할 수 있는 자료구조이다.
![image](https://user-images.githubusercontent.com/71132893/104416475-3adefb00-55b7-11eb-93e8-efb985129d2c.png)

### 이진 탐색 트리(Binary Search Tree)
- **이진 <span style='color:red'>탐색</span>**이 동작할 수 있도록 고안된 효율적인 탐색이 가능한 자료구조의 일종이다.
- 이진 탐색 트리의 특징 : **왼쪽 자식 노드 < 부모 노드 < 오른쪽 자식 노드**
    - 부모 노드보다 왼쪽 자식 노드가 작다.
    - 부모 노드보다 오른쪽 자식 노드가 크다.
    ![image](https://user-images.githubusercontent.com/71132893/104416711-9b6e3800-55b7-11eb-843a-0eee15603934.png)
- 이진 탐색 트리가 이미 구성되어 있다고 가정하고 데이터를 조회하는 과정을 살펴보자.
- 찾고자 하는 원소 : 37
![image](https://user-images.githubusercontent.com/71132893/104416818-c6588c00-55b7-11eb-8ee1-af6ab979bbaf.png)
![image](https://user-images.githubusercontent.com/71132893/104416966-fdc73880-55b7-11eb-855c-4ce788416dac.png)
![image](https://user-images.githubusercontent.com/71132893/104416991-091a6400-55b8-11eb-9a34-641fb6dd1274.png)

### 트리의 순회(Tree Traversal)
- 트리 자료구조에 포함된 노드를 특정한 방법으로 한 번씩 방문하는 방법을 의미한다.
    - 트리의 정보를 시각적으로 확인할 수 있다.
- **대표적인 트리 순회** 방법은 다음과 같다.
    - **전위 순회(pre-order traversal)**: 루트를 먼저 방문한다.
    - **중위 순회(in-order traversal)**: 왼쪽 자식을 방문한 뒤에 루트를 방문한다.
    - **후위 순회(post-order traversal)**: 오른쪽 자식을 방문한 뒤에 루트를 방문한다.
![image](https://user-images.githubusercontent.com/71132893/104417308-7f1ecb00-55b8-11eb-93bc-af99b061e298.png)

- 트리의 순회 구현 예제(Python)

```python
class Node:
    def __init__(self, data, left_node, right_node):
        self.data = data
        self.left_node = left_node
        self.right_node = right_node

#전위 순회
def pre_order(node):
    print(node.data, end=' ')
    if node.left_node != None:
        pre_order(tree[node.left_node])
    if node.right_node != None:
        pre_order(tree[node.right_node])

#중위 순회
def in_order(node):
    if node.left_node != None:
        in_order(tree[node.left_node])
    print(node.data, end=' ')
    if node.right_node != None:
        in_order(tree[node.right_node])

#후위 순회
def post_order(node):
    if node.left_node != None:
        post_order(tree[node.left_node])
    if node.right_node != None:
        post_order(tree[node.right_node])
    print(node.data, end=' ')

n = int(input())
tree={}

for i in range(n):
    data, left_node, right_node = input().split()
    if left_node == "None":
        left_node = None
    if right_node == "None":
        right_node = None
    tree[data] = Node(data, left_node, right_node)

pre_order(tree['A'])
print()
in_order(tree['A'])
print()
post_order(tree['A'])
```