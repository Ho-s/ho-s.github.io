import React,{useState,useCallback,useEffect} from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './footer'


const Layout = ({ children }) => {
  const [goTop,setGoTop]=useState('-40px')
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const loadHandler=()=>{
      setIsLoading(false)
    }
    window.addEventListener('load',loadHandler())
    return()=>{
      window.removeEventListener('load',loadHandler())
    }
  },[isLoading])

  const hadleScroll = useCallback(()=>{
    const currentScrollPosition = window.pageYOffset
    const currentBrowserPosition = window.innerHeight
    if(currentScrollPosition>=currentBrowserPosition/2){
      setGoTop('30px')
    }else{
      setGoTop('-40px')
    }
  },[])

  useEffect(()=>{
    window.addEventListener('scroll',hadleScroll)
    return()=>{
      window.removeEventListener('scroll',hadleScroll)
    }
  },[hadleScroll])

  const onClickGoTop=()=> {
    window.scrollTo(0,0)
  }

  return (
    <>
      {isLoading && 
        <div style={{position:'fixed',width:'100vw',height:'100vh',backgroundColor:'white', zIndex:'4'}}>
          <div style={{margin:'calc(50vh - 200px) auto', width:'400px',height:'400px',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/104911800-c3520700-59ce-11eb-8448-35ab98a92bc6.gif)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
        </div>
      }
      <Header></Header>

      <div style={{ margin: `0 auto`, minWidth:'330px',maxWidth: '990px', padding: `0 1.0875rem 1.45rem`,marginTop:'10vh' }}>
        <main style={{}}>{children}</main>
      </div>

      <button onClick={onClickGoTop} className='toTheTop' style={{bottom:goTop,border:'none',zIndex:'3',backgroundImage:'url(https://user-images.githubusercontent.com/71132893/104469041-7ef3ef00-55fb-11eb-873f-3d13378914e9.png)',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'20px',cursor:'pointer',textAlign:'center',position:'fixed',transition:'all linear .2s', right:'30px',width:'38px',height:'38px',backgroundColor:'#e9e9e9',borderRadius:'38px',fontSize:0,outline:'none'}}>-</button>

      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
