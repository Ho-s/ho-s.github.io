import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ transition: 'all .2s', left: '0', right: '0', margin: '0 auto', position: 'absolute', top: '150px', bottom: '0', width: '200px', height: '200px' }}>
      <div>
        <div style={{ width: '160px', height: '160px', borderRadius: '160px', backgroundSize: '400px 260px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103438501-ec586500-4c76-11eb-8914-28a85fa2cae7.jpg)' }}></div>
      </div>
      <div>
        <div style={{ margin: '20px 0', fontWeight: '600', fontSize: '20px' }}>Ho-s</div>
        <div style={{ marginBottom: '10px', fontSize: '16px' }}>Hi, I'm frontend developer</div>
      </div>
      <div>
        <div>
          <a href='mailto:kjcoco13@gmail.com'>
            <div style={{ float: 'left', marginBottom: '10px', marginRight: '100px', display: 'block', width: '60px', height: '20px', backgroundImage: 'url(https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:kjcoco13@gmail.com)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
          </a>
        </div>
        <div>
          <a href='https://github.com/Ho-s'>
            <div style={{ float: 'left', width: '60px', marginBottom: '10px', marginRight: '100px', height: '20px', backgroundImage: 'url(https://img.shields.io/badge/Github-black?style=flat-square&logo=github)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
          </a>
        </div>
        <div>
          <a href='http://qr.kakao.com/talk/Qs4iWKmmtszYlS_qLsk9msnspqs-'>
            <div style={{ float: 'left', width: '60px', height: '20px', backgroundImage: 'url(https://img.shields.io/badge/KakaoTalk-yellow?style=flat-square)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
