
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
      <nav style={{position:'fixed',left:'20px',top:'100px',border:'1px solid black',width:'200px',height:'200px'}}>
        <div>
        <Link to='mailto:kjcoco13@gmail.com'>
            <div style={{margin:'5px 2px 0px 20px',float:'left',width:'50px',height:'20px',backgroundImage:'url(https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:kjcoco13@gmail.com)',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
          </Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <footer style={{fontSize:'12px',position:'absolute',bottom:'0',backgroundColor:'#e9e9e9',width:'calc(100% - 40vw)',padding:'2vw 20vw',height:'60px'}}>
          <div style={{fontWeight:'600',float:'left'}}>Follow me in </div>
          <Link to='https://github.com/Ho-s'>
            <div style={{margin:'5px 2px 0px 20px',float:'left',width:'15px',height:'15px',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/103414512-a1304a80-4bc1-11eb-93ee-b4bd31af9e57.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
            <div style={{fontWeight:'600',color:'black',float:'left'}}>Github</div>
          </Link>
          <Link to='mailto:kjcoco13@gmail.com'>
            <div style={{margin:'5px 2px 0px 20px',float:'left',width:'20px',height:'15px',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/103415271-bd81b680-4bc4-11eb-8ddc-08f84d52f406.png)',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
            <div style={{fontWeight:'600',color:'black',float:'left'}}>Gmail</div>
          </Link>
          <div style={{marginTop:'30px'}}>© 2021 Ho' Space. Powered by graphql & Gatsby.</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
