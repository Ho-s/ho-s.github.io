---
date: "2021-01-16"
title: "Gatsby로 개인 블로그 만들기"
path: "make-a-blog"
description: "How to make a blog with Gatsby"
test: 'https://user-images.githubusercontent.com/71132893/104743886-8e0ba600-578f-11eb-8a89-dbd2d3ba98ba.png'
---

# Gatsby로 개인 블로그 만들기 + Github.io / Netlify로 배포하기
개인 블로그를 만드는 방법중에는 여러가지가 있습니다. 

블로그를 만드는 데에 Jekyll은 가장 많이 쓰이는 생성기지만 ruby로 작성되어있어서 js,react 등을 사용 하는 나에게는 디자인부터 직접 꾸미고 싶은 나에게는 적합하지 않다고 생각이 되었습니다. hexo는 node기반의 생성기지만 ejs등의 템플릿 코드를 작성해야해서 유지보수 등의 측면에서 선택하지 않게 되었습니다.

저는 직접 만드는 것을 좋아하기 때문에, 그것에 용이한 Gatsby를 이용해 만드는 방법으로 골랐습니다.  

Gatsby를 이용해 만든 지는 2주 정도가 되어가는데, 블로그를 만들고 꾸미기까지의 과정 중에서 가장 힘들었던 것이, 블로그 자체를 시작하고 배포하는 것이었습니다. 

자세한 정보를 찾기 힘들었고, 찾았다 하면 오류가 있는 글이 많았기 때문입니다. 그래서 만들고 나면 Gatsby로 직접 만드는 법을 포스팅하자고 생각했었습니다.

본 포스팅은 테마 선택에 대한 이야기는 제외하고 하기 때문에, 적어도 ReactJs에 익숙한 분들이 사용하기에 적합합니다.

## Gatsby JS란
Gatsby CLI 를 인스톨하여 GatsbyJS를 사용할 수 있습니다. 이때 Gatsby CLI는 Webpack, Reactjs, React-route 등을 이미 포함하고 있으므로, React에 익숙한 사람이라면, 쉽게 사용할 수 있을 것입니다.

## Gatsby 시작
gatsby 블로그를 시작하기 앞서 필요한 몇가지를 설치해야 합니다.

### Node js 설치
[https://nodejs.org/ko/](https://nodejs.org/ko/)에 접속하여 nodejs 프로그램을 설치합니다.

### Gatsby 설치
Gatsby CLI를 설치한다.

```bash
npm install -g gatsby-cli
```

### gatsby 생성
원하는 폴더로 들어가 아래의 명령어를 수행합니다.

```bash
gatsby new blog
```
위의 `blog`라고 되어 있는 부분은 아무거나 원하는 폴더명을 실행시키면 됩니다.

### gatsby 실행
위 작업이 끝났다면 경로를 위 폴더로 바꿔주고 실행을 해줍니다

```bash
cd blog
gatsby develop
```
위의 `blog`는 마찬가지로 원하는 폴더명으로 바꿀 수 있습니다.
`gatsby develop`은 gatsby에서 지원하는 개발용 모드입니다.

정상적으로 완료되었다면 아래와 같은 메시지를 터미널을 통해 확인할 수 있습니다.

```bash
...
success run static queries - 0.156s - 3/3 19.18/s
success run page queries - 0.058s - 6/6 102.89/s
success Generating image thumbnails - 2.809s - 6/6 2.14/s
⠀
You can now view gatsby-starter-default in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
success Building development bundle - 5.192s
...
```

위의 [http://localhost:8000/](http://localhost:8000/)로 접속해 봅시다.

![image](https://user-images.githubusercontent.com/71132893/104748015-92868d80-5794-11eb-91ff-09a83f03df76.png)

위와 같은 화면을 얻을 수 있습니다.
위 화면은 `./blog/src/pages` 경로에 들어가서 입맛에 맞게 변경하실 수 있습니다.
Layout은 `../src/components`에서 확인할 수 있습니다.
Gatsby와 graphql이 처음이신 분들은 처음엔 어려울 수 있으나, 금방 익숙해지실 겁니다.

## Gatsby 배포
Netlify로 배포하기에 앞서 지금까지의 결과를 Github repo와 연결해주어야 합니다.

repo의 이름을 무엇이든 설정해도 괜찮으나, github.io블로그를 사용하려면  

>"사용자 닉네임".github.io  

와 같이 설정해 줍니다. 제 닉네임은 ho-s로 되어있기 때문에 `ho-s.github.io`로 설정하였습니다.

git bash로 아까 만든 blog 폴더를 repo와 연결시켜 줍니다.

```bash
git init
git remote add origin https://github.com/사용자 닉네임/사용자 닉네임.github.io.git
git add .
git commit -m 'sth'
git push origin name of branch
```

위의 `name of branch`에는 본인 branch의 명을 설정해주면 됩니다.

github.io와의 연결을 위해 gh-pages 플러그인을 깔아줍니다.

```bash
npm install gh-pages --save-dev
```

package.json 파일의 sciprts에 다음을 추가합니다.

```js
"scripts": {
    ...
    "deploy": "gatsby build && gh-pages -d public -b branch명"
},
```
위의 branch명으로 되어있는 부분에는 자신의 branch 명을 쓰면 됩니다.  

그 후 아래 명령어를 터미널에 입력합니다.

```bash
npm run deploy
```

위를 완료하면 /public 폴더에 있는 내용들이 연결된 github으로 올라가게 되며, 추후 netlify와의 연결 후에도 위 명령어로 자동으로 netlify에도 업데이트가 반영되게 됩니다.  
<br>
완료되면 [https://www.netlify.com/](https://www.netlify.com/)으로 접속하여, 가입을 해주고 로그인을 한 후, github의 repo와 netlify를 연결해주면 됩니다.

![image](https://user-images.githubusercontent.com/71132893/104750001-d2e70b00-5796-11eb-9cea-90786c169ec4.png)
![image](https://user-images.githubusercontent.com/71132893/104750024-db3f4600-5796-11eb-9b4b-7a03d716acb6.png)
![image](https://user-images.githubusercontent.com/71132893/104750059-e8f4cb80-5796-11eb-9554-56b579c2ead4.png)

## Markdown을 이용해 게시글 추가하기
Gatsby가 Markdown 파일을 읽어서 정적 HTML 파일로 만드는 방법은 아래 순서대로 이루어집니다..
1. `gatsby-source-filesystem` 로 마크다운 파일을 읽는다.
1. `gatsby-transformer-remark` 로 마크다운 파일을 해석한다.
1. 해석된 데이터를 GraphQL로 가져져온다.
1. 가져온 정보를 미리 설정한 템플릿에 배치한다.
1. Gatsby의 createPageAPI를 사용하여 데이터와 템플릿을 정적 페이지 만든다.

### 플러그인을 설치하기

```bash
npm i gatsby-source-filesystem
npm i gatsby-transformer-remark
```

위 설치를 완료한 후 해당 내용을 폴더에 이미 생성되어 있는 `gatsby.config.js`에 추가해줍니다.

```js
...
plugins: [
    ...
    {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `markdown-pages`,
        path: `${__dirname}/markdowns/md`,
        },
    },
    `gatsby-transformer-remark`,
    ...
]
...
```

위의 path에는 `${__dirname}/` 이후에 자신이 markdown 파일들을 놓을 위치를 지정하면 됩니다.

### markdown 템플릿 지정하기

`markdown-template.js`라는 이름의 파일을 `gatsby.config.js`가 있는 경로에 만들고, 아래 내용을 입력해줍니다.

```js
import React from "react"
import { graphql } from "gatsby"
import Layout from "./src/components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{marginBottom:'200px'}}>
        <h4 style={{paddingBottom:'5px',borderBottom:'1px solid gray'}}>
          <span style={{color:'gray'}}>{post.frontmatter.title}</span>
          <span style={{float:'right',color:'red'}}>{post.frontmatter.date}</span>
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
```

graphql로 정의한 query를 위의 data로 받아서 불러오는 과정입니다.

위 과정을 마친 뒤, 같은 폴더 내에 있는 `gatsby.node.js`에 다음을 추가해줍니다.

```js
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./markdown-template.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}
```

### markdown 작성하기
위에서 경로로 지정해준 위치에 markdown 파일을 생성하면 끝이 나게 됩니다.


저 같은 경우에는 makrdown이라는 폴더를 만들어 `how-to-make-a-blog.md`을 넣어주었습니다.

```md
---
date: "2021-01-16"
title: "Gatsby로 개인 블로그 만들기"
path: "make a blog"
---

<!-- 본문 -->
```

### 페이지에서 markdown 불러오기
만들었으니 페이지에서 불러와야 겠죠.

./src/pages/page-2.js로 가봅시다.

```js
import { Link,graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({data}) => {
  return(
    <>
    <Layout>
      <SEO title="blog" />
      <div>
          <h4>Recent Posts</h4>
          <ul>
            <li key={node.id}>
            <Link style={{textDecoration:'none',color:'black',transition:'all .4s'}} to={node.fields.slug}>
                <div></div>
                <div>
                    <span>{node.frontmatter.title}</span>
                    <div>{node.frontmatter.date}</div>
                    <div>{node.excerpt}</div>
                </div>
            </Link>
            </li>
          </ul>
        </div>
    </Layout>
    </>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) { 
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
```

graphql에서 데이터를 불러와 위에 적용한 모습입니다. 위의 excerpt라고 되어 있는 부분은 markdown 개개 파일의 본문을 담고 있습니다.

## 마무리
gatsby로 블로그를 만드는 기본적인 내용에 대해서만 알아보았습니다. gatsby를 이용한 블로그를 만들기 위해서는 아주 기본적인 내용의 graphql과 gatsby의 지식을 필요로 하는데, 사용하며 검색하다보면 익숙해지는 것 같습니다.