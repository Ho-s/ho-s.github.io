import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ float: `left`, marginRight: `1rem` }}>
    <Link style={{textDecoration:'none',color:'black'}} to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) =>{

  // const header=createRef()

  // const handleScroll=useCallback(()=>{
  //   // let scrollTop = document.body.scrollTop
  //   let scrollTop =window.pageYOffset
  //   if(scrollTop>0){
  //     // header.current.style.position='fixed'
  //     header.current.style.top='0'
  //     header.current.style.marginBottom='40px'
  //   }else{
  //     header.current.style.position='relative'
  //     header.current.style.marginBottom='2rem'
  //   }
  // },[])

  // window.addEventListener('scroll',handleScroll)
    

  return(
  <header  style={{position:'relative',margin: `0 auto`,maxWidth: 1280,padding: `1.45rem 1.0875rem`,marginBottom: `2rem`,}}>
      <div style={{ float:'left',margin: 0 }}>
        <Link to="/" style={{position:'relative',color: `black`,textDecoration: `none`,}}>
          <div style={{position:'absolute',width:'20px',height:'20px',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}></div>
          <div style={{position:'absolute',width:'90px',left:'30px'}}>{siteTitle}</div>
        </Link>
      </div>
      <ul style={{margin:'0',padding:'0',listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
