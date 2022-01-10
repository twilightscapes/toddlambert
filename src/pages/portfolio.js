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

export default function test2Page() {
   return (


    <CustomBox>
    {/* <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        /> */}
    
    {/* <div className="spacer66"></div> */}
<SRLWrapper options={options} className="">
  
{/* <p style={{textAlign:'center', margin:'4rem 0 10px 0'}}>Custom SVG Animations</p> */}


  <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'375px', overflow:'hidden', position:'relative', padding:' 0'}}>


  



{/* <div className="" style={{margin:'0 auto', width:'', padding:'0', height:'100vw'}}>

<Link state={{modal: true}} to="/legacy/" style={{height:'350px', position:'relative', left:'0', top:'-60px'}}>
  <StaticImage className="" src="../../static/assets/Experiences-Header-6.jpg" alt="Todd builds Web Apps" style={{height:'350px'}}  />
  todd
</Link>
</div> */}

<div className="RArrow" style={{fontSize:'1rem', position:'absolute', right:'20px', top:'0', zIndex:'1', color:'#dd4000', filter:' drop-shadow(1px 1px 0px rgba(228, 223, 223, 0.5))'}}>
  scroll <span style={{fontSize:'18px'}}>&#10095;</span>
</div>


<div className="horizontal-scroll-wrapper squares" style={{margin:'30px auto 0 auto', width:'', padding:'0'}}>


<StaticImage
        src="../../static/assets/transparent.png"
        alt="-->Done, you've viewed all of the images.<--"
        srl_gallery_image="true"
        className="item"
      />
<StaticImage
        src="../../static/assets/tle-portfolio-spotlights2.png"
        alt="[PaleoBurn] website, mobile app, product portal, direct marketing, funnel marketing"
        srl_gallery_image="true"
        className="item"
      />
<StaticImage
        src="../../static/assets/tle-portfolio-spotlights.png"
        alt="[Pav&amp;Broome] online branding, website, web app, e-commerce"
        srl_gallery_image="true"
        className="item"
      />
<StaticImage
        src="../../static/assets/ticom.jpg"
        alt="[Texas Instruments] homepage redesign - product tabs projects"
        srl_gallery_image="true"
        className="item"
      />
<StaticImage
       src="../../static/assets/zombie-bucket-logo.png"
       alt="[Zombie Bucket] product design, branding, direct marketing, social marketing"
       srl_gallery_image="true"
       className="item"
     />
<StaticImage
       src="../../static/assets/mapusoft.jpg"
       alt="[Mapusoft] branding, website, product design"
       srl_gallery_image="true"
       className="item"
     />


<StaticImage
       src="../../static/assets/paleoburn.jpg"
       alt="[PaleoBurn] product design, website, social marketing"
       srl_gallery_image="true"
       className="item"
     />
{/* <StaticImage
       src="../../static/assets/coast-promos1.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     /> */}
<StaticImage
       src="../../static/assets/DUC-product.png"
       alt="[Dress Up Chef] branding, product design, website, web app, e-commerce, social marketing"
       srl_gallery_image="true"
       className="item"
     />
<StaticImage
       src="../../static/assets/coast-promos3.png"
       alt="[Coast Nightlife] branding, product design, affiliate development, website POC"
       srl_gallery_image="true"
       className="item"
     />
<StaticImage
       src="../../static/assets/launchlamp.jpg"
       alt="[LaunchLamp] branding, membership program, website"
       srl_gallery_image="true"
       className="item"
     />
{/* <StaticImage
       src="../../static/assets/fiverr3.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     /> */}
<StaticImage
       src="../../static/assets/televox.jpg"
       alt="[Televox] website, product design"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../static/assets/print-to-own.jpg"
       alt="[PrintToOwn] design, website poc, "
       srl_gallery_image="true"
       className="item"
     />
<StaticImage
       src="../../static/assets/ebs.jpg"
       alt="[EBS] website, content, legacy wordpress conversion"
       srl_gallery_image="true"
       className="item"
     />
{/* <StaticImage
       src="../../static/assets/TheyLive-Header.jpg"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     /> */}


{/* <StaticImage
       src="../../static/assets/photo-promo-banners.jpg"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     /> */}
{/* <StaticImage
       src="../../static/assets/coast-promos2.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     /> */} 
 
     </div>


 <Link className="post-card" state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'60px',  background:'rgba(0, 0, 0, .9)', height:'350px', display:'flex', borderRadius:'0 12px 12px 0'}}>
  {/* <StaticImage className="button post-card" src="../../static/assets/legacy.png" alt="View Todd's Legacy Work" style={{height:'350px', borderRadius:'0 12px 12px 0', border:'1px solid #aaa', borderLeft:'0', boxShadow: '0px 0px 10px #333', opacity:''}}  /> */}
  <div style={{position:'absolute', right:'180%', top:'', transform: 'rotate(90deg)', width:'', height:'100%', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap',}}>View Legacy Work Here</div>
</Link>
</div>
















<div className="photobox" style={{display:'', background:'rgba(121, 115, 115, 0.9)', padding:'40px 0', position:'relative', borderTop:'1px solid #444', borderBottom:'1px solid #444'}}>

<p style={{position:'absolute', top:'10px', textAlign:'center', margin:'0 0 10px 0', width:'100%', color:'#fff'}}>Conceptual Photography</p>

<div style={{textAlign:'center', filter: 'drop-shadow(0px 0px 10px #444)',}}>
  <StaticImage className="1" src="../../static/assets/atomic-martini-flyboys_2400x1599_crop_center.jpg.webp" alt="Todd builds Web Apps" style={{}}  />
</div>

<div style={{textAlign:'center', filter: 'drop-shadow(0px 0px 10px #444)',}}>
<StaticImage className="1" src="../../static/assets/night213.jpg" alt="Todd builds Web Apps"  />
</div>

<div style={{textAlign:'center', filter: 'drop-shadow(0px 0px 10px #444)',}}>
<StaticImage className="1" src="../../static/assets/challenger-explosion_2400x1600_crop_center.jpg.webp" alt="Todd builds Web Apps"  />
</div>

<div style={{textAlign:'center', filter: 'drop-shadow(0px 0px 10px #444)',}}>
  <StaticImage className="1" src="../../static/assets/ambassador-of-twilight_2400x1600_crop_center.jpg.webp" alt="Todd builds Web Apps" style={{}}  />
</div>

<div style={{textAlign:'center', filter: 'drop-shadow(0px 0px 10px #444)',}}>
<StaticImage className="1" src="../../static/assets/prada-marfa_2400x1600_crop_center.jpg.webp" alt="Todd builds Web Apps"  />
</div>

<div style={{textAlign:'center', filter: 'drop-shadow(0px 0px 10px #444)',}}>
<StaticImage className="1" src="../../static/assets/Ufo.jpg" alt="Todd builds Web Apps"  />
</div>



</div>





</SRLWrapper>









<p style={{textAlign:'center', margin:'4rem 0 10px 0'}}>Custom SVG Animations</p>

<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'280px', overflow:'hidden', position:'relative', margin:'0 0 1rem 0'}}>

<div className="RArrow" style={{fontSize:'1rem', position:'absolute', right:'20px', top:'0', zIndex:'1', color:'#dd4000', filter:' drop-shadow(1px 1px 0px rgba(228, 223, 223, 0.5))'}}>
  scroll <span style={{fontSize:'18px'}}>&#10095;</span>
</div>


<div className="horizontal-scroll-wrapper squares" style={{margin:'0 auto', width:'', padding:'0'}}>

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

<a aria-label="Link to VidSocks.com" className="post-card noexit" rel="noreferrer" target="_blank" href="https://vidsocks.com" title="Link to VidSocks.com" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'60px',  background:'rgba(0, 0, 0, .9)', height:'260px', display:'flex', borderRadius:'0 12px 12px 0'}}>
  {/* <StaticImage className="button post-card" src="../../static/assets/legacy.png" alt="View Todd's Legacy Work" style={{height:'350px', borderRadius:'0 12px 12px 0', border:'1px solid #aaa', borderLeft:'0', boxShadow: '0px 0px 10px #333', opacity:''}}  /> */}
  <div style={{position:'absolute', right:'180%', top:'', transform: 'rotate(90deg)', width:'', height:'100%', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap',}}>View More</div>
</a>
</div>














<br /><br />

     
    
    {/* </Layout> */}
</CustomBox>
  )
}
