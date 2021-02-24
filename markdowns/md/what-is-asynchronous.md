---
date: "2021-01-30"
title: "promise, async와 await란 무엇인가?"
path: "what-is-asynchronous"
description: "promise, async와 await 짧게 이해하기"
test: 'https://user-images.githubusercontent.com/71132893/106323773-4e7aa900-62bb-11eb-9fee-d53388c39ee1.png'
---

```js
console.log(1)
setTimeout(()=>{
  console.log(2)
},1000) //1초후에 2를 띄워라
console.log(3)

//동기식일 경우 실행 결과 : 1, 2, 3
//실제 실행 결과(비동기식): 1, 3 , (1초 후에) 2

// 위에서부터 내려오는 게 동기식이고 비동기식은 언제까지 기다려야되는 지 모르기 때문에 전체 코드를 몽땅 실행시켜놓는 자바스크립트의 특성.
// 비동기를 동기처럼 만들도록 하는 게 promise고 이가 발전한 버전이 async 와 await임.

//promise로 작성
function sleep(v) {
  return new Promise((resolve) => setTimeout(()=>{
    resolve(v)
  },1000))
}

console.log(1)

sleep(2)
.then(v=>{
  console.log(v)
  console.log(3)
})

// async, await은 비동기 처리 패턴중 가장 최근에 나온 문법이며, 기존의 비동기 처리방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성하게 도와줬다.
function sleep(v) {
  return new Promise((resolve) => setTimeout(()=>{
    resolve(v)
  },1000))
}

const process=async()=>{
  console.log(1)
  console.log(await sleep(2))
  console.log(3)
}
process()
```