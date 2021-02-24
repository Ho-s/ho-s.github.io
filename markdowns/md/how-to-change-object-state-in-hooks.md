---
date: "2021-01-22"
title: "리액트(React) 훅스에서 배열 안에 있는 객체 값(value) 바꾸기"
path: "how-to-change-object-state-in-hooks"
description: "React hooks useState with object"
test: 'https://user-images.githubusercontent.com/71132893/105614014-a7ed5e80-5e09-11eb-8450-cd54d5301974.png'
---
### 리액트 훅스로 객체로 된 state에 키(key)를추가하거나, 키의 값(value) 변경하기.

```js
const [example,setExample] = useState({
    id: '0000',
    class:'math',
    name:'steve',
})
```
위와 같은 state를 갖고 있을 때 key의 값을 변경하려고 한다면 불변성 유지를 위해, 아래와 같은 방법을 쓰면 된다. 

```js
setExample({...example,id:'0001'})
```

위와 같은 방법은 단순 키의 값을 추가하려고 할 때에도 사용된다.

```js
setExample({...example,age:12})
```

### 배열(array)안에 있는 객체의 key와 value 관리하기.
객체마다의 고유한 속성을 부여해, 반복문을 돌며 해당하는 정보의 값을 바꿔주면 된다.

```js
const [example,setExample]=useState([
    {
    id:'0000',
    class:'math',
    name:'steve',
    },
    {
    id:'0001',
    class:'science',
    name:'bob',
    },
    {
    id:'0002',
    class:'english',
    name:'steve',
    },
])
```
위와 같은 state가 설정되어 있다고 할때, `id : '0000'`인 학생의 `class`를 `science`로 바꾸고 싶다면, 아래와 같은 메소드를 사용하면 된다.

```js
  setExample(example.map((v,i)=>{
    if (v.id !== example[i].id) {
      return v
    } else {
      return { ...v, class:'science' }
    }
  }))
```