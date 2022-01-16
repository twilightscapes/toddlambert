import React, {  } from "react"
// import { SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
// import { IoHandLeft } from "react-icons/io5"
// gatsby develop

// import Theme from "../components/theme"
import { Seo } from "./seo"
import FullScreen from "../components/FullScreen"
// import { Link } from 'gatsby-plugin-modal-routing-3'
import { Link } from "gatsby"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { FaHandPointDown } from "react-icons/fa"
// import Bug from "../../static/assets/logo.svg"
import { Helmet } from "react-helmet"
import "../styles/reset.css"
import "../styles/variables.css"
import "../styles/global.css"
// import '@fontsource/roboto'
// import '@fontsource/hammersmith-one'
// import '@fontsource/lobster-two'

// import { FiShare } from 'react-icons/fi';
// import { FaRegPlusSquare } from 'react-icons/fa';
// import Fullscreen from "../components/FullScreen"
// import Menu from "../components/menu1"

import { BsChatRightDots } from 'react-icons/bs'



// import Audio from '../assets/audio.mp3'
// import TouchUp from '../components/TouchUp'
// import { IoMdFingerPrint } from 'react-icons/io'
import "../assets/scss/style.scss"
// import Consent from './Consent'
import { useSiteMetadata } from "../hooks/use-site-metadata"
// 
// import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";



export function Layout({ children }) {
  const { iconimage } = useSiteMetadata()
  const { menu1 } = useSiteMetadata()
  const { menu2 } = useSiteMetadata()
  const { menu3 } = useSiteMetadata()

  // const [isVisible, setIsVisible] = useState(false);
  // const toggleVisible = () => {
  //   setIsVisible(!isVisible);
  // };

  return (

<>

<Helmet>

<link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
<link href="https://fonts.googleapis.com/css2?family=Lobster+Two&amp;display=swap" display="swap" rel="stylesheet" />

</Helmet>
      <Seo />


      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="" style={{overflow:''}}>
        {modal ? (
          <>
<Link className="test testbottom" state={{noScroll: true }} to={closeTo} style={{display:'flex', position:'absolute', alignSelf:'center', bottom:'0', textAlign:'center', margin:'0 auto', width:'100%', textDecoration:'underline', justifyContent:'center'}}>Close &amp; Return</Link>
<div className="closer">
{/* <FullScreen className="test" /> */}

<Link className="test" state={{noScroll: true }} to={closeTo}>
  



<AiOutlineClose />

  {/* <button title="Close" className="SRLCloseButton1"><div className="SRLCloseButton1" >
  <svg style={{ color:'#fff',}} className="SRLCloseButton" xmlns="http://www.w3.org/2000/svg" viewBox="11 11 30 30"><path className="SRLCloseButton" d="M27.92 25l8.84-8.84 1.82-1.82c.27-.27.27-.71 0-.97l-1.95-1.95a.682.682 0 0 0-.97 0L25 22.08 14.34 11.42a.682.682 0 0 0-.97 0l-1.95 1.95c-.27.27-.27.71 0 .97L22.08 25 11.42 35.66c-.27.27-.27.71 0 .97l1.95 1.95c.27.27.71.27.97 0L25 27.92l8.84 8.84 1.82 1.82c.27.27.71.27.97 0l1.95-1.95c.27-.27.27-.71 0-.97L27.92 25z"></path></svg></div></button> */}
  
  </Link>
</div>



          </>
        ) : (
""
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>


<Link state={{modal: true}} to="/contact/" title="Contact Todd Lambert">
  <div id="chaticon" className="noexit" style={{fontSize:'40px', position:'fixed', right:'20px', bottom:'5vh', zIndex:'1', background:'#666', color:'#fff', borderRadius:'50px', padding:'1rem', filter: 'drop-shadow(0px 0px 5px rgba(44, 44, 44, 0.5))', border:'2px solid #ccc', opacity:'.8'}}><BsChatRightDots /></div>
</Link>


{/* <header name="pagetop" className={isVisible ? 'left' : ''} > */}
<header name="pagetop" className="">

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />

  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle popped">


{/* <Bug className="bug" style={{fontSize:'20px', width:'100%', opacity:'.4' }}/> */}
<div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 2px #000'}}>MENU</div>

  </label>


  


 <label aria-label="Background clicks close menu" id="menubgcloser" htmlFor="openSidebarMenu" className="backdrop1" ></label>

 <div id="sidebarMenu" className="" style={{minWidth:'', width:''}}>
  

  <ul className="sidebarMenuInner post-card left" style={{maxWidth:'250px', position:'absolute', right:'', display:'', justifyContent:''}}>

     <li className="carta" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>

<object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{ position:'fixed', opacity:'.2', overflow:'hidden', border:'0px solid red', zIndex:'0', width:'100%', maxWidth:'', height:'auto', background:'transparent'  }} alt="Logo Animated" title="animated content" >Logo</object>
 </li>
 <li className="carto" style={{border:'none', margin:'1rem 0', textAlign:'center'}}>
 <Link to="/">
<img src={iconimage} alt="Logo" width="100%" height="100%" />
</Link>
 </li>



  <li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/contact/">
 {menu1}
</Link>
</li>

<li className="carto no-app" style={{textAlign:'center'}}>
 <Link className="navbar-item txtshadow" to="/about/">
 {menu2}
</Link>
</li>

      <li className="carto" style={{textAlign:'center', paddingTop:'1rem'}}>
              <Link title="Examples" className="navbar-item txtshadow neonText" to="/posts/">
              {menu3}
              </Link>
      </li>

 
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {" "} Continue Choosing 
</button>
</div>
      </li>
   
</ul>
    </div>
</header>


{/* <div className="usability" style={{ display:'flex', alignSelf:'center', flexDirection:'',  position:'absolute', bottom:'0', zIndex:'2', width:'100%', justifyContent:'center'}}>


  <div style={{ display:'flex', gap:'20px', justifyContent:'space-around', padding:'2px 12px', background:'rgba(0,0,0,0.30)', borderRadius:'12px 12px 0 0',}}>
    
  <button type="button" className="" onClick={toggleVisible} style={{wordWrap:'normal', color:'#fff'}}>
  <IoHandLeft style={{float:'left', marginRight:'8px', fontSize:'20px'}} />Left-handed?
</button>



<Theme  style={{display:'flex', alignSelf:'center', color:'#fff'}} />

    
    </div>

  </div> */}




        {children}

      
        
  </>
    
  )
}


