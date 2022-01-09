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


    {/* <div className="parent"> 
<div className="div1"> div 1</div> 
<div className="div2"> div 2</div> 
<div className="div3"> div 3</div> 
<div className="div4"> div 4</div> 
<div className="div5"> div 5</div> 
</div> */}





  <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'375px', overflow:'hidden', position:'relative', padding:' 0'}}>

  {/* <div>item 1</div>
  <div>item 2</div>
  <div>item 3</div>
  <div>item 4</div>
  <div>item 5</div>
  <div>item 6</div>
  <div>item 7</div>
  <div>item 8</div> */}






<SRLWrapper options={options} className="">


{/* <div class="" style={{margin:'0 auto', width:'', padding:'0', height:'100vw'}}>

<Link state={{modal: true}} to="/legacy/" style={{height:'350px', position:'relative', left:'0', top:'-60px'}}>
  <StaticImage className="" src="../../static/assets/Experiences-Header-6.jpg" alt="Todd builds Web Apps" style={{height:'350px'}}  />
  todd
</Link>
</div> */}



<div class="horizontal-scroll-wrapper squares" style={{margin:'30px auto 0 auto', width:'', padding:'0'}}>










<StaticImage
        src="../../static/assets/transparent.png"
        alt="Todd builds Web Apps"
        srl_gallery_image="true"
        className="item"
      />





<StaticImage
        src="../../static/assets/tle-portfolio-spotlights2.png"
        alt="Todd builds Web Apps"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../../static/assets/tle-portfolio-spotlights.png"
        alt="Todd builds Web Apps"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../../static/assets/tle-portfolio-spotlights3.png"
        alt="Todd builds Web Apps"
        srl_gallery_image="true"
        className="item"
      />



<StaticImage
       src="../../static/assets/zombie-bucket-logo.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />



<StaticImage
       src="../../static/assets/coast-promos.png"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../static/assets/coast-promos1.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../static/assets/DUC-product.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />

<StaticImage
       src="../../static/assets/coast-promos3.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />


<StaticImage
       src="../../static/assets/earth-horizon.jpg"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />


<StaticImage
       src="../../static/assets/fiverr3.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />




<StaticImage
       src="../../static/assets/TheyLive-Header.jpg"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />
<StaticImage
       src="../../static/assets/photo-promo-banners.jpg"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     />


{/* <StaticImage
       src="../../static/assets/coast-promos2.png"
       alt="Image 4"
       srl_gallery_image="true"
       className="item"
     /> */}

     </div>
 </SRLWrapper>

 <Link state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'60px'}}>
  <StaticImage className="button post-card" src="../../static/assets/legacy.png" alt="View Todd's Legacy Work" style={{height:'350px', borderRadius:'0 12px 12px 0', border:'1px solid #aaa', borderLeft:'0', boxShadow: '0px 0px 10px #333', opacity:''}}  />
</Link>
</div>




     {/* <StaticImage
       src="../../src/img/DendroidDreams/waimeia-milkyway.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     />
     <StaticImage
       src="../../src/img/DendroidDreams/wishing-tree.jpg"
       alt="Image 3"
       srl_gallery_image="true"
       className="item"
     /> */}






    {/* <div className="zoombox">
      <SRLWrapper options={options} className="">

   <StaticImage
          src="../../src/img/DendroidDreams/sea-of-sorrow.jpg"
          alt="Start with the best built website and then make sure it's as fast as can be. Then make some of the most innovative features that nobody else has. Finally, make sure it's virtually hack-proof, easy to use and ready to go!"
          className="item"
          style={{borderRadius:'12', margin:'1rem 4%'}}
        />

<div className="masonry4" style={{}}>

<StaticImage
          src="../../src/img/DendroidDreams/dances-with-the-moon.jpg"
          alt="Image 2"
          srl_gallery_image="true"
          className="item"
          
        />

<StaticImage
          src="../../src/img/DendroidDreams/big-dreams.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../src/img/DendroidDreams/amber-oak.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />


<StaticImage
          src="../../src/img/DendroidDreams/deciduous-doiley.jpg"
          alt="Image 4"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/evening-crown.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/gnarled-barkley.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/lonely-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/moaning-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

<StaticImage
          src="../../src/img/DendroidDreams/silver-serenity.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/tree-tops.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/tree-with-a-view.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/waimeia-milkyway.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />
        <StaticImage
          src="../../src/img/DendroidDreams/wishing-tree.jpg"
          alt="Image 3"
          srl_gallery_image="true"
          className="item"
        />

</div>
</SRLWrapper>
  </div> */}
    
    {/* </Layout> */}
</CustomBox>
  )
}
