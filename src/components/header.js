import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [isMain, setIsMain] = useState(true)

  const hadleScroll = useCallback(() => {
    const currentScrollPosition = window.pageYOffset
    const currenBrowserHeight = window.innerHeight
    if (currentScrollPosition >= currenBrowserHeight) {
      setIsMain(false)
    } else {
      setIsMain(true)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.addEventListener('scroll', hadleScroll)
      return () => {
        window.removeEventListener('scroll', hadleScroll)
      }
    }
  }, [hadleScroll])

  useEffect(() => {
    if (window.location.pathname === '/') {
      setIsMain(true)
    } else {
      setIsMain(false)
    }
  }, [])

  const headerStyle = isMain ? { paddingTop: '2.5vh', paddingBottom: '2.5vh', position: 'absolute', top: '90vh', left: '0', transition: 'top .2s', color: 'white', minWidth: '400px' } : { transition: 'color .2s', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderBottom: '#e9e9e9 1px solid', zIndex: '3', backdropFilter: ' blur(5px)', paddingTop: '2.5vh', paddingBottom: '2.5vh', position: 'fixed', top: 0, left: 0, minWidth: '400px' }
  const imgStyle = isMain ? { top: '0', filter: 'opacity(.6) drop-shadow(0 0 0 white)', position: 'absolute', width: '26px', height: '26px', color: 'white', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } : { position: 'absolute', width: '26px', height: '26px', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)', backgroundSize: 'contain', top: '0', backgroundRepeat: 'no-repeat' }
  const titleStyle = isMain ? { lineHeight: '1', position: 'absolute', width: '90px', left: '30px', color: 'white', fontSize: '27px',} : { lineHeight: '1', fontSize: '27px',  position: 'absolute', color: 'black', width: '90px', left: '30px' }
  const linkStyle = isMain ? { float: `left`, marginRight: `1rem`, textDecoration: 'none', color: 'white', transition: 'color .1s linear' } : { float: `left`, marginRight: `1rem`, textDecoration: 'none', color: 'black', transition: 'color .1s linear' }

  return (
    <header style={headerStyle}>
      <div>
        <Link to="/" style={{ position: 'relative', textDecoration: `none`, }}>
          <div style={imgStyle}></div>
          <div className='header-title' style={titleStyle}>
            <span>Ho'space</span>
          </div>
        </Link>
      </div>
      <div style={{ width: '261px', margin: '0', padding: '0', listStyle: `none`, float: `right` }}>
        <li>
          <Link className='header-link' style={linkStyle} to="/about/">About</Link>
        </li>
        <li>
          <Link className='header-link' style={linkStyle} to="/projects/">Projects</Link>
        </li>
        <li>
          <Link className='header-link' style={linkStyle} to="/blog/">Blog</Link>
        </li>
        <li>
          <Link className='header-link' style={linkStyle} to="/contact/">Contact</Link>
        </li>
      </div>
    </header>
  )
}



export default Header
