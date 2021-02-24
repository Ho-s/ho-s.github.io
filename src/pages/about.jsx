import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div>About 주병호</div>

    <div className='introduction' style={{ width: '100%'}}>
      <div style={{ fontWeight: '900', fontSize: '26px', marginBottom: '30px' }}>Virtues</div>
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
    </div>

    <div>
      <div style={{ fontWeight: '900', fontSize: '26px', marginBottom: '30px' }}>Skill Stacks</div>
      <div>
        <div style={{ fontWeight: '900', fontSize: '18px' }}>Front-end</div>
        <ul style={{ width: 'calc(100% - 60px)',margin: '0', padding: '30px',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104598309-c50f8800-56b9-11eb-8c2b-26e4bb29a38c.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>HTML</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '50%', height: '10px', borderRadius: '10px', backgroundColor: '#ff9f40' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>기초</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104603381-b0ce8980-56bf-11eb-9b78-e4905c60d6e6.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>CSS</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '75%', height: '10px', borderRadius: '10px', backgroundColor: '#81c147' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>반응형디자인과 미디어쿼리</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104603558-e2475500-56bf-11eb-9b5b-72a5ceecb0eb.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>JavaScript</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '60%', height: '10px', borderRadius: '10px', backgroundColor: '#cfd100' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>Fectch API / async</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103150301-18c33b80-47b6-11eb-8cd1-f91e5476f5b4.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>ReactJs</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '50%', height: '10px', borderRadius: '10px', backgroundColor: '#ff9f40' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>hooks -ing</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://raw.githubusercontent.com/webpack/media/master/logo/icon.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>Webpack</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '50%', height: '10px', borderRadius: '10px', backgroundColor: '#ff9f40' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>빌드 기본</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104604362-9e088480-56c0-11eb-8308-ea4d2e32f3a6.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>Babel</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '20%', height: '10px', borderRadius: '10px', backgroundColor: '#ff4444' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>변환 기본</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103150303-1b259580-47b6-11eb-9c28-833bc0156c72.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>ReduxJs</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '', height: '10px', borderRadius: '10px', backgroundColor: 'red' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>Plan to learn</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103150299-17920e80-47b6-11eb-9b8d-689fcb698bd2.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>TypeScript</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '', height: '10px', borderRadius: '10px', backgroundColor: 'red' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>Plan to learn</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104605302-aa411180-56c1-11eb-8a7a-d989bd151e85.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>NextJs</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '', height: '10px', borderRadius: '10px', backgroundColor: 'red' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>Plan to learn</div>
          </li>




        </ul>
      </div>
      <div>
        <div style={{ fontWeight: '900', fontSize: '18px' }}>Back-end</div>
        <ul style={{ width: 'calc(100% - 60px)', margin: '0', padding: '30px',display:'flex',flexDirection:'row',flexWrap:'wrap' }}>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104606384-0bb5b000-56c3-11eb-9304-a75b884a8973.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>graphql</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '20%', height: '10px', borderRadius: '10px', backgroundColor: '#ff4444' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>사용 기본</div>
          </li>
          <li style={{ marginRight: '40px', marginBottom: '40px', listStyle: 'none', width: '110px' }}>
            <div style={{ backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103150304-1c56c280-47b6-11eb-86c4-ebc7fd658c66.png)', width: '100%', height: '100px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>Node.js</div>
            <div style={{ position: 'relative', width: '100%', height: '10px', borderRadius: '10px', backgroundColor: '#bdbebd', margin: '10px 0 ' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '0', height: '10px', borderRadius: '10px', backgroundColor: 'red' }}></div>
            </div>
            <div style={{ wordBreak: 'break-all', fontSize: '14px', overflow: 'hidden', textAlign: 'center' }}>Plan to learn</div>
          </li>
        </ul>
      </div>
    </div>

    <div style={{ marginBottom: '200px' }}>
      <div style={{ fontWeight: '900', fontSize: '26px', marginBottom: '30px' }}>Experiences</div>
      <ul style={{ margin: '0', padding: '0' }}>There is no experience yet.</ul>
    </div>
  </Layout>
)

export default About
