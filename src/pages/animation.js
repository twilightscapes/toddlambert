import * as React from "react"
// import { Layout } from "../components/layout"
// import GoBack from "../components/goBack"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { Seo } from "../components/seo"
// import CasePanels from "../components/casepanels"

import { SRLWrapper } from "simple-react-lightbox"

import styled from "styled-components"
const CustomBox = styled.div`






`


const options = {
  settings: {
    autoplaySpeed: 4000,
    // boxShadow: '0px 0px 20px #fff',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    // overlayColor: 'rgba(185, 7, 230, 0.5)',
    slideAnimationType: 'slide',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
    size: '40px'
  },
  caption: {
captionAlignment: 'start',
captionColor: '#FFFFFF',
captionContainerPadding: '20px 12% 30px 12%',
captionFontFamily: 'inherit',
captionFontSize: 'inherit',
captionFontStyle: 'inherit',
captionFontWeight: 'inherit',
captionTextTransform: 'inherit',
showCaption: true
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: '#111',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 2px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  progressBar: {
    backgroundColor: '#f2f2f2',
    fillColor: '#000000',
    height: '3px',
    showProgressBar: true
  },
};

export default function AnimationPage() {
   return (


    <CustomBox>
    {/* <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        /> */}
    
    {/* <div className="spacer66"></div> */}




<p className="todd-headline mouse" style={{textAlign:'center', margin:'1rem 0 10px 0'}}>Custom <span style={{textTransform:'uppercase'}}>SVG</span> Animation</p>

<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'60vh !important', overflow:'hidden', position:'relative', margin:'0 0 20vh 0', paddingBottom:'2rem'}}>

<div className="RArrow" >
  <span>&#10095;</span>
</div>


<div className="horizontal-scroll-wrapper squares" style={{margin:'20px auto 0 auto', width:'', color:'#fff'}}>

<Link state={{modal: true}} to="/transcendence/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/transparent.png" alt="Done, you've viewed all of the images."  />
  Animated SVG &amp; Photo &amp; Video www
</Link>

<Link state={{modal: true}} to="/twilightscapes/" className="" style={{fontSize:'', textDecoration:'none', textAlign:'center', }}>
  <StaticImage className="1" src="../../static/assets/Experiences-Header-5.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

<Link state={{modal: true}} to="/automotive/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/subaru.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

<Link state={{modal: true}} to="/transcendence/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/Experiences-Header-6.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

<Link state={{modal: true}} to="/they-live/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/TheyLive-Header.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

<Link state={{modal: true}} to="/asteroid-series-riding-the-belt/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/Experiences-Header-2.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

<Link state={{modal: true}} to="/crude-addiction/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/Experiences-Header-4.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

<Link state={{modal: true}} to="/alien-egg-farm/" className="" style={{fontSize:'', textDecoration:'none', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/Experiences-Header-3.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo
  </Link>

<Link state={{modal: true}} to="/pillowtalk/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/Experiences-Header-8.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

<Link state={{modal: true}} to="/tv-signals/" className="" style={{margin:'', textDecoration:'none', fontSize:'', textAlign:'center',}}>
  <StaticImage className="1" src="../../static/assets/television-signals-promo.jpg" alt="Todd builds Web Apps"  />
  Animated SVG &amp; Photo &amp; Video
</Link>

</div>

<a aria-label="Link to VidSocks.com" className="post-card noexit" rel="noreferrer" target="_blank" href="https://vidsocks.com" title="Link to VidSocks.com" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'80px', background:'rgba(0, 0, 0, .9)', height:'95%', display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', margin:'10px 0'}}>

  <div style={{position:'', left:'', top:'', transform: 'rotate(90deg)', width:'100%', height:'', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold', margin:'-60px auto 0 auto'}}>Visit VidSocks.com</div>
</a>
</div>
















     
    
    {/* </Layout> */}
</CustomBox>
  )
}
