import React, { useState, useRef, useEffect } from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const IndexPage = ({ data }) => {

  const [slideValue, setSlideValue] = useState(0)

  const clickLeft = () => {
    if (slideValue > -1) { //고정
      setSlideValue(-3)
    } else {
      setSlideValue((prev) => { return prev + 1 })
    }
  }

  const clickRight = () => {
    if (slideValue < -2) {
      setSlideValue(0) //고정
    } else {
      setSlideValue((prev) => { return prev - 1 })
    }
  }

  useInterval(() => {
    if (slideValue < -2) {
      setSlideValue(0) //고정
    } else {
      setSlideValue((prev) => { return prev - 1 })
    }
  }, 5000)

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href="https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png" />
        <meta name="google-site-verification" content="K3o8Vgz6R-ISTQoiTQoKzT1t5rGgOC5V-wMf0tg00fw" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"></link>
      </Helmet>
      <SEO title="Home" />

      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <div style={{ position: 'absolute', top: 0, width: '100vw', height: '100vh', backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104022632-e5e06500-5203-11eb-9737-86305e8851bb.jpg)' }}></div>
        <Link to="/" className="index-main">Ho'space</Link>
        <div className='index-introduction'>Welcome to Ho'space</div>
        <div style={{ listStyle: 'none', position: 'absolute', top: '400px', right: '30px', margin: '0', padding: '0', width: '50px' }}>
          <a href='https://github.com/Ho-s'>
            <div className='fa-git' ></div>
          </a>
          <a href='mailto:kjcoco13@gmail.com'>
            <div className='fa-google-plus-g' ></div>
          </a>
          <a href='https://www.facebook.com/byungho.joo.5/'>
            <div className='fa-facebook-f'></div>
          </a>
        </div>
      </div>

      <Layout>
        <div>

          <div className='introduction' style={{ width: '100%', borderBottom: '2px solid #e9e9e9' }}>
            <div style={{ textAlign: 'center', margin: '0 auto 30px', width: '110px', fontWeight: '900', fontSize: '24px' }}>About me</div>
            <ul style={{ padding: 0, margin: '0', display: 'flex' }}>
              <li style={{ width: '250px', margin: '0 38px', listStyle: 'none' }}>
                <div style={{ textAlign: 'center', color: 'blue', fontSize: '20px', fontWeight: '600' }}>Easing into</div>
                <div style={{ textAlign: 'center', width: '250px', lineHeight: '7.13', fontSize: '35px', fontWeight: '600', height: '250px', backgroundColor: '#e9e9e9', borderRadius: '150px' }}>적응</div>
                <div>빠르게 변화하는 프론트엔드 시장의 특성에 맞게 제때 메타를 인지하여 배움을 통해 적응을 하는 것이 중요하다고 생각하고 있습니다. </div>
              </li>
              <li style={{ width: '250px', margin: '0 38px', listStyle: 'none' }}>
                <div style={{ textAlign: 'center', color: 'red', fontSize: '20px', fontWeight: '600' }}>Why?</div>
                <div style={{ textAlign: 'center', width: '250px', lineHeight: '7.13', fontSize: '35px', fontWeight: '600', height: '250px', backgroundColor: '#e9e9e9', borderRadius: '150px' }}>왜</div>
                <div>프로그래머로서 무언가를 만들 때 혹은 문제를 해결할 때 그냥 무작정 하는 것이 아닌, 왜?라는 질문을 자신에게 하며 나아가는 것이 중요하다고 생각합니다.</div>
              </li>
              <li style={{ width: '250px', margin: '0 38px', listStyle: 'none' }}>
                <div style={{ textAlign: 'center', color: 'green', fontSize: '20px', fontWeight: '600' }}>Cooperation</div>
                <div style={{ textAlign: 'center', width: '250px', lineHeight: '7.13', fontSize: '35px', fontWeight: '600', height: '250px', backgroundColor: '#e9e9e9', borderRadius: '150px' }}>협업</div>
                <div>우리가 개발할 때 사용하는 것들도 일종의 언어입니다. 컴퓨터 안에서의 언어에만 실력을 키우는 것이 아닌, 사람사이의 언어에도 신경을 쓰는 것이 기본 소양이라고 생각합니다.</div>
              </li>
            </ul>
            <Link className='index-more' to='/about/' style={{ float: 'right', position: 'relative', transition: 'all .2s', fontSize: '15px', color: 'black', marginTop: '30px', textDecoration: 'none' }}>더 많은 소개 보러 가기</Link>
          </div>

          <div className='projects' style={{ width: '100%', height: '250px', borderBottom: '2px solid #e9e9e9', marginTop: '30px' }}>
            <div style={{ textAlign: 'center', margin: '0px auto 30px', width: '110px', fontWeight: '900', fontSize: '24px' }}>Projects</div>
            <ul style={{ padding: 0, margin: '0', display: 'flex', justifyContent: 'center' }}>
              <li className='index-project' style={{ transition: 'all .2s', listStyle: 'none', border: '1px solid #e9e9e9', margin: '0 4%', height: '100px' }}>
                <a href='https://ho-s.github.io/Calendar-with-React/'>
                  <div style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '80px', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104449561-22380a80-55e2-11eb-9bd8-08c6821f23e8.png)', float: 'left', width: '120px', height: '100%' }}></div>
                  <div style={{ float: 'left', width: '90px', padding: '10px', height: 'calc(100% - 20px)', color: 'black' }}>
                    <span style={{ fontWeight: '600' }}>Calendar</span>
                    <div style={{ fontSize: '12px' }}>개인 프로젝트</div>
                    <div style={{ marginTop: '15px', fontSize: '12px' }}>2020-12-09 ~ 2020-12-24</div>
                  </div>
                  <div style={{ float: 'left', fontSize: '15px', width: '130px', padding: '20px', color: 'black', height: 'calc(100% - 40px)' }}>달력 및 스케줄 웹앱 공부용으로 제작</div>
                </a>
              </li>
              <li className='index-project' style={{ transition: 'all .2s', listStyle: 'none', border: '1px solid #e9e9e9', margin: '0 4%', height: '100px' }}>
                <a href='https://github.com/Ho-s/ho-s.github.io'>
                  <div style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '80px', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)', float: 'left', width: '120px', height: '100%' }}></div>
                  <div style={{ float: 'left', width: '90px', padding: '10px', height: 'calc(100% - 20px)', color: 'black' }}>
                    <span style={{ fontWeight: '600' }}>Ho'space</span>
                    <div style={{ fontSize: '12px' }}>개인 프로젝트</div>
                    <div style={{ marginTop: '15px', fontSize: '12px' }}>2020-12-28 ~ going on</div>
                  </div>
                  <div style={{ float: 'left', fontSize: '15px', width: '130px', padding: '20px', color: 'black', height: 'calc(100% - 40px)' }}>개인 블로그 React, gatsby, graphql 등 사용하여 직접 제작</div>
                </a>
              </li>
            </ul>
            <Link className='index-more' to='/projects/' style={{ float: 'right', position: 'relative', transition: 'all .2s', fontSize: '15px', color: 'black', marginTop: '30px', textDecoration: 'none' }}>더 많은 프로젝트 보러 가기</Link>
          </div>

          <div style={{ width: '100%', height: '370px', marginTop: '30px', marginBottom: '105px', position: 'relative' }}>
            <div style={{ textAlign: 'center', margin: '0 auto 30px', width: '110px', fontWeight: '900', fontSize: '24px' }}>Blog</div>
            <button className='blog-btn' onClick={clickLeft} style={{ transition: 'color .2s', cursor: 'pointer', backgroundColor: 'transparent', borderLeft: '5px solid', borderTop: '5px solid', borderRight: '0', borderBottom: '0', borderRadius: '5px', height: '30px', width: '30px', transform: 'rotate(-45deg)', outline: 0, padding: '0', position: 'absolute', top: '130px', left: '15px', fontSize: 0 }}>L</button>
            <button className='blog-btn' onClick={clickRight} style={{ transition: 'color .2s', cursor: 'pointer', backgroundColor: 'transparent', borderLeft: '0', borderTop: '0', borderRight: '5px solid', borderBottom: '5px solid', borderRadius: '5px', height: '30px', width: '30px', transform: 'rotate(-45deg)', outline: 0, padding: '0', position: 'absolute', top: '130px', right: '15px', fontSize: 0 }}>L</button>
            <div style={{ height: '250px', width: '90%', margin: '0 auto', overflow: 'hidden' }}>
              <ul style={{ padding: 0, margin: '0 auto', height: '250px', width: 'calc(300px * 6)', display: 'flex', transition: 'all .5s ease-in-out', marginLeft: `${slideValue * 33}%` }}>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                  if (node.frontmatter.description) {
                    return (
                      <li className='markdown' style={{ transition: 'all .2s', listStyle: 'none', margin: '0 15px', width: '270px', height: '240px', border: '1px solid #e9e9e9' }} key={node.id}>
                        <Link style={{ textDecoration: 'none', color: 'black', transition: 'all .4s' }} to={node.fields.slug}>
                          <div style={{ backgroundImage: `url(${node.frontmatter.test})`, backgroundSize: '270px 170px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '70%' }}></div>
                          <div style={{ width:'100%', height: '30%' }}>
                            <div style={{ fontSize: '18px', fontWeight: '600', height: '23px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{node.frontmatter.title}</div>
                            <div style={{ marginTop: '20px', fontSize: '12px', height: '15px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{node.frontmatter.description}</div>
                          </div>
                        </Link>
                      </li>
                    )
                  } else {
                    return false
                  }
                })}
              </ul>
            </div>
            <Link className='index-more' to='/blog/' style={{ float: 'right', position: 'relative', transition: 'all .2s', fontSize: '15px', color: 'black', marginTop: '25px', textDecoration: 'none' }}>더 많은 블로그 보러 가기</Link>
          </div>

        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            test
          }
          fields {
            slug
          }
        }
      }
    }
  }
`