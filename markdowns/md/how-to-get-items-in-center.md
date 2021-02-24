---
date: "2021-02-17"
title: "position:absolute 에서 아이템을 중앙에 놓는 방법"
path: "what is asynchronous"
description: "How to align items in center when position absolute"
test: 'https://user-images.githubusercontent.com/71132893/108155218-d10bc100-7121-11eb-8628-b8c6e392c654.png'
---

## 방법 1. transform을 이용하여 중앙 정렬하기.

```css
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
```
- 부모 아이템의 50%만큼 `top`과 `left`를 준 다음, `transform`을 이용하여 크기의 반만큼 다시 이동한다.

## 방법 2. margin auto를 이용하여 중앙 정렬하기.

```css
margin: auto;
position: absolute;
left:0;
right: 0;
top:0;
bottom: 0; 
```
- margin auto로 가운데 정렬을 해준 다음, `top`, `bottom`, `left`, `right`를 0으로 설정하여 준다.