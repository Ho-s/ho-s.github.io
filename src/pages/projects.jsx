import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div style={{ fontWeight: '900', fontSize: '18px', marginBottom: '30px' }}>개인 프로젝트</div>
    <ul style={{ padding: 0, margin: '0' }}>
      <li className='index-project' style={{ transition: 'all .2s', float: 'left', listStyle: 'none', border: '1px solid #e9e9e9', width: '400px', margin: '0 4%', height: '100px' }}>
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
      <li className='index-project' style={{ transition: 'all .2s', float: 'left', listStyle: 'none', border: '1px solid #e9e9e9', width: '400px', margin: '0 4%', height: '100px' }}>
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
    <div style={{ fontWeight: '900', fontSize: '18px', marginBottom: '30px', marginTop: '200px' }}>협업 프로젝트</div>
    <div>There is no group project now.</div>
  </Layout>
)

export default Projects
