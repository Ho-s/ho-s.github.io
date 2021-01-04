
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div style={{margin: `0 auto`, maxWidth: 840, padding: `0 1.0875rem 1.45rem`,}}>
        <main>{children}</main>
      </div>

      <nav>
        <div>
          <div style={{width:'160px',height:'160px',borderRadius:'160px',backgroundSize:'400px 260px',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/103438501-ec586500-4c76-11eb-8914-28a85fa2cae7.jpg)'}}></div>
        </div>
        <div>
          <div style={{margin:'20px 0',fontWeight:'600',fontSize:'20px'}}>Ho-s</div>
          <div style={{marginBottom:'10px',fontSize:'16px'}}>Hi, I'm frontend developer</div>
        </div>
        <div>
          <div>
            <a href='mailto:kjcoco13@gmail.com'>
              <div style={{float:'left',marginBottom:'10px',marginRight:'100px',display:'block',width:'60px',height:'20px',backgroundImage:'url(https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:kjcoco13@gmail.com)',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
            </a>
          </div>
          <div>
            <Link to='https://github.com/Ho-s'>
              <div style={{float:'left',width:'60px',height:'20px',backgroundImage:'url(https://img.shields.io/badge/Github-black?style=flat-square&logo=github)',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
            </Link>
          </div>
        </div>
      </nav>

      <footer style={{fontSize:'12px',position:'absolute',bottom:'0',backgroundColor:'#e9e9e9',width:'calc(100% - 40vw)',padding:'2vw 20vw',height:'60px'}}>
          <div style={{fontWeight:'600',float:'left'}}>Follow me in </div>
          <Link to='https://github.com/Ho-s'>
            <div style={{margin:'5px 2px 0px 20px',float:'left',width:'30px',height:'15px',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/103414512-a1304a80-4bc1-11eb-93ee-b4bd31af9e57.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
            <div style={{fontWeight:'600',color:'black',float:'left'}}>Github</div>
          </Link>
          <a href='mailto:kjcoco13@gmail.com'>
            <div style={{margin:'5px 2px 0px 20px',float:'left',width:'30px',height:'15px',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/103415271-bd81b680-4bc4-11eb-8ddc-08f84d52f406.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
            <div style={{fontWeight:'600',color:'black',float:'left'}}>Gmail</div>
          </a>
          <div style={{marginTop:'30px'}}>© 2021 Ho' Space. Powered by graphql & Gatsby.</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
