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

export default function PortfolioPage() {
   return (

<>
     <CustomBox>
    {/* <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        /> */}
    
    {/* <div className="spacer66"></div> */}
<SRLWrapper options={options}>
  
{/* <p style={{textAlign:'center', margin:'4rem 0 10px 0'}}>Custom SVG Animations</p> */}





  <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'30vh', overflow:'hidden', position:'relative', padding:' 0',}}>



{/* <div className="" style={{margin:'0 auto', width:'', padding:'0', height:'100vw'}}>

<Link state={{modal: true}} to="/legacy/" style={{height:'350px', position:'relative', left:'0', top:'-60px'}}>
  <StaticImage className="" src="../../static/assets/Experiences-Header-6.jpg" alt="Todd builds Web Apps" style={{height:'350px'}}  />
  todd
</Link>
</div> */}

<div className="RArrow" />


<div className="horizontal-scroll-wrapper squares" style={{margin:'0 auto 0 auto', width:'', padding:'0 0'}}>


<StaticImage
        src="../../static/assets/transparent.png"
        alt="-->Done, you've viewed all of the images.<--"
        srl_gallery_image="true"
        className="item"
        style={{width:'400px'}}
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


 {/* <Link className="post-card11" state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'50px', background:'rgba(0, 0, 0, .9)', height:'96%', display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', margin:'10px 0'}}>
  <div style={{position:'', left:'', top:'', transform: 'rotate(90deg)', width:'100%', height:'', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold', margin:'-60px auto 0 auto'}}>View Legacy Work Here</div>
</Link> */}

{/* <a aria-label="Link to VidSocks.com" className="post-card11 noexit" rel="noreferrer" target="_blank" href="https://twilightscapes.com" title="Link to VidSocks.com" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'80px', background:'rgba(0, 0, 0, .9)', height:'96%', display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', margin:'10px 0'}}>

<div  style={{position:'', left:'', top:'', transform: 'rotate(90deg)', width:'100%', height:'', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold', margin:'-60px auto 0 auto'}}>Visit Twilightscapes.com</div>
</a> */}



</div>



</SRLWrapper>




     
    
    {/* </Layout> */}
 </CustomBox>
</>
  )
}
