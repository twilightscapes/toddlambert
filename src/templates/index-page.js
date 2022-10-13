/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import { VscFilePdf } from "react-icons/vsc"
import { Footer } from "../components/footer"
// import { GoArrowDown } from "react-icons/go"
// import ScrollAnimation from 'react-animate-on-scroll'
import Contact from '../components/Contact-inc'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
// import CasePanels from "../components/casepanels"
import { AiOutlineAudioMuted } from "react-icons/ai"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
// import LineTest from "../../static/assets/textualhealing.svg"
// import Portfolio from "../pages/portfolio"
// import Photos from "../pages/favorites"
// import Animation from "../pages/animation"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import styled from "styled-components"
import Newsignup from "../components/newssign"
import BlogListHome from "../components/blog-list-home"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"

const CustomBox = styled.div`

`



export const pageQuery = graphql`
  query HomeQuery($id: String! ) {


    allFile(
      filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/img/portfolio/"}}
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          name
          id
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }





    


    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }


 
    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 9
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

const options = {
  settings: {
    autoplaySpeed: 3000,
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
    showDownloadButton: true,
    showFullscreenButton: true,
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
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 1px',
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


const HomePage = ({ data }) => {
  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""

    // const { iconimage } = useSiteMetadata()
    // const now = new Date();
    // now.setDate(now.getDate()+14);
    // const AvaNow = now;

    // const nextWeek = new Date()

    // add 7 days to the current date
    // nextWeek.setDate(new Date().getDate() + 7)
    

    
    const current = new Date();
  const date = `${current.getMonth()+2}/${current.getDate()+2}/${current.getFullYear()}`;



    // const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

  const Svg = frontmatter.svgImage
  const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }



  
function AddSvg(){
  const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
  return (
    <object title="VidSocks Rock" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto',  }} alt="VidSocks Rock" ></object>
  )
}



const YouTube = frontmatter.youtuber

  if (!YouTube) {

  }
  else{
    
    <Iframer />
  }

  function Iframer() {
    

    const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
    return (
      <ReactPlayer
      className='react-player66'
      url={Url}
      
      // url={[
      //   iframeUrl,
      //   YoutuberSuggestion1,
      //   YoutuberSuggestion2,
      //   YoutuberSuggestion3
      // ]}
      width="100%"
      height="100%"
 
      config={{
        youtube: {
          playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
        },
      }}
      loop
      playing
      playsinline
//       playIcon={
//         <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

//     <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto'}}>
      

//       <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
// <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
// </div>
  
//       <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
// <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
//       </div>
//       </button>}
//         light="../assets/transparent.png"
      />
    )
  }

  

  

  
  return (
    <CustomBox style={{}}>
    <Layout>
    <Helmet>
  <body className="homepage vidsock triple" />
</Helmet>
<Seo
          title={`Todd Lambert (the original) - Photographer | Web Developer and Product Designer`}
          description={`Todd builds websites, web apps and creates digital products. He also does conceptual photography.`}
          image={'https://toddlambert.com/assets/todd-camping.jpg'}
        />
       {/* <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
   image={ siteUrl + getSrc(frontmatter.featuredImage) }
      /> */}
      
      




        <div name="container21" className="container21" style={{height:'',}}>


{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}






{/* show Info */}
{ShowInfo ? (
            
       


<section style={{ display:'', height:'', overflow:''}}>
  <article>
<div className="flexbutt" style={{display:'flex', gap:'30px'}}>
      <div className="flexcheek " style={{padding:'0 2rem', maxHeight:'90vh',}}>


          <h1 className="title1">{frontmatter.title}</h1>
          <h2
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </h2>

          <div
          style={{}}
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
  
  <br />
          <Link
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>

            
          </Link>

         


{/* <AnchorLink 
className="actionJackson txtshadow"
style={{
  cursor:'pointer',
  width:'70%',
  margin:'0 auto'

}} 
to="#experiences" title="See the new EXPERIENCES™" /> */}



<br />
<br />
{/* <span className="actionJackson txtshadow"> <span className="icon -right">
              <FaHandPointDown />
            </span> &nbsp;&nbsp;All New EXPERIENCES &nbsp;&nbsp;<span className="icon -right">
              <FaHandPointDown />
            </span></span> */}
          


      </div>



        


      <div className="flexcheek" style={{position:'relative', maxHeight:'70vh', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


 <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'70vh', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
   




{/* <div style={{position:'absolute', top:'0', zIndex:'0'}}> */}
           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'0px solid red', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px !important', position:'absolute', backgroundSize:'cover', objectFit:'cover', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )}
{/* </div> */}



{/* <ScrollAnimation className="" animateIn="bounceInUp" delay={550} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'', margin:'', padding:'',  width:'', zIndex:'', textAlign:'',}}> */}
<div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  <Newsignup />
  </div>
{/* </ScrollAnimation> */}

</div>

      
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}


{/* end show Posts */}
{ShowPosts ? (

<div>
        <BlogListHome data={posts} />

        <section style={{height:'auto'}}>
  <Link to="/posts/" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
    View More <RiArrowRightSLine style={{fontSize:'50px'}} />
    </article></Link>
    </section>

   </div>

  

   ) : (
    ""
  )}
{/* end show Posts */}


 </div>{/* end scooch */}



 <section id="intro" className="child intro" style={{position:'relative', height:'100vh', paddingTop:'', overflow:'', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center',
// fontSize: 'clamp(18px, calc(1rem + 2vw), 36px)',
fontSize:'clamp(2.5rem, 3.5vw, 3.8rem)', 
background: 'rgba(196, 189, 179, .4)'
}}>


<div style={{width:'100vw', height:'100vh', position:'fixed', top:'0', zIndex:'-1', opacity:'', overflow:''}}>


{/* <LineTest /> */}



<h3 style={{fontSize:'25vw', opacity:'.1', transform: 'skewY(-120deg)', transform:'rotate(7deg)', bottom:'35vh'}}>gatsby</h3>

<h3 style={{fontSize:'35vw', opacity:'.1', transform: 'skewY(20deg)', transform:'rotate(-8deg)', bottom:'0', border:'0px solid red'}}>design</h3>

<h3 style={{fontSize:'20vw', opacity:'.1', transform: 'skewY(-20deg)', transform:'rotate(2deg)', position:'absolute', top:'39vh', left:'20vw', fontWeight:'bold'}}>≺code≻</h3>

<h3 style={{fontSize:'10vw', opacity:'.2', transform: 'skewY(140deg)', transform:'rotate(-15deg)', position:'absolute', top:'0', fontWeight:'bold'}}>php</h3>

<h3 style={{fontSize:'18vw', opacity:'.2', transform: 'skewY(-0deg)', transform:'rotate(32deg)', position:'absolute', top:'0vh', right:'0', fontWeight:'normal', color:'#000'}}><i>html</i></h3>

<h3 style={{fontSize:'18vw', opacity:'.2', transform: 'skewY(-20deg)', transform:'rotate(27deg)', position:'absolute', top:'60vh', left:'3vw', fontWeight:'bold'}}>css</h3>

<h3 style={{fontSize:'12vw', opacity:'.1', transform: 'skewY(-120deg)', transform:'rotate(-21deg)', position:'absolute', bottom:'18vh', right:'0vw', fontWeight:'normal'}}>javascript</h3>

<h3 style={{fontSize:'42vw', opacity:'.1', transform: 'skewY(-120deg)', transform:'rotate(7deg)', position:'absolute', top:'70vh', right:'10vw', fontWeight:'normal', color:'transparent', border:'0px solid white', textShadow:'0 0 0px #fff', filter:'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5))'}}>pwa</h3>


</div>





{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={400}> */}

{/* <div style={{ width:'80%', background: 'rgba(196, 189, 179, .5)',
  backdropFilter: 'blur(44px)', margin:'0 auto', borderRadius:'12px', zIndex:'2'}}> */}

<div className="logolink" style={{textAlign:'center', position:'relative',fontSize:'clamp(2rem, 12.5vw, 10rem)', padding:'0 0 2% 0', background:'tranparent', filter: 'drop-shadow(0px 0px 0px #444)'}}><span className="logofirst mainlogo">todd</span> <span className="logocolor">lambert</span></div>
{/* </ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={1000}> */}
<h1 className="logofirst" style={{textAlign:'center', marginTop:'50px', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 6vw, 3.8rem)',
paddingLeft:'2rem',
}}>
Digital Product <span style={{color:'rgb(187 54 0)'}}>Design</span>
</h1>
{/* </ScrollAnimation> */}




{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={1100}> */}
<h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 6vw, 3.8rem)',
paddingLeft:'2rem',
}}>
Conceptual <span style={{color:'rgb(187 54 0)'}}>Photography</span>
</h2>
{/* </ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={1200}> */}
<h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 6vw, 3.8rem)',
paddingLeft:'2rem',
}}>
Guerrilla <span style={{color:'rgb(187 54 0)'}}>Marketing</span>
</h2>
{/* </ScrollAnimation> */}
{/* 
</div> */}

  </section>



 <div className="spacer66 mobile"></div> 


 













{/* <h3 className="logotype" style={{textAlign:'center', margin:'0 0 0 0', fontSize:'5vw', clear:'right', paddingTop:'0',}}>Portfolio</h3>
<br />

<CasePanels />
<div className="spacer33"></div> */}








<section id="posts1" name="posts">



<div style={{padding:'0 0 0 0',
position:'relative', height:'', width:'100%', overflow:'', margin:'0 auto',
//  outline:'18px dashed rgba(121, 115, 115, 0.3)', 
 borderRadius:'', 
 border:'0px solid rgba(121, 115, 115, 0.3)', 
//  background:'rgba(0, 0, 0, 0.3)',
//  background:'rgba(121, 115, 115, 0.2)',
//  background: 'rgba(196, 189, 179, .9)',
//  background:'rgba(121, 115, 115, 0.5)',
zIndex:'0'
//  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)',
 }}>


 <h3 className="logotype" style={{textAlign:'center', margin:'0 0 0 0', fontSize:'5vw', clear:'right', paddingTop:'0',}}>Portfolio</h3>
<br />


{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Portfolio />
</ScrollAnimation> */}


<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', height:'65vh', overflow:'hidden', position:'relative',}}>

<div className="RArrow"><span></span></div>

{/* <SimpleReactLightbox>
<SRLWrapper options={options}> */}

<div className="horizontal-scroll-wrapper squares" style={{margin:'0 auto 0 auto', width:'calc(60vw + 1px)', transform: 'rotate(-90deg) translateY(-60vw)', padding:'30px'}}>


{/* <div style={{width:'1000px', height:'1000px'}}></div> */}
<div className="introspacer" style={{}}></div>



{/* <div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/LHJlm_4B-Vo"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true, loop:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-120px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
      <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem', background:'linear-gradient(180deg, #777 30%, #333 80%)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)'}}><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'30px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}
       light="../assets/websites-included.jpg"
      />
            <br />
    <div className="post-card1 button1 logocopy" style={{textAlign:'center', padding:'.5rem', margin:'0 10%'}}>

      Interactive pages with e-commerce and CMS

      </div>
</div>  */}




<div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/2_Noj7lS-tM"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true, loop:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-50px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
    <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem',}}><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'30px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}
       light="../assets/big-site-designs.jpg"
      />
            <br />
            <div className="post-card1 button1 logocopy " style={{textAlign:'center', padding:'0 0 .5rem 0', margin:'0'}}>
      {/* <a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}> */}
      Flexible design that adapts to the device
      {/* </a> */}
      </div>
</div> 







<div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/-mYw48uq010"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-50px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
    <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem',}}><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'30px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}

        light="../assets/twilightscapes-promo.jpg"
      />

<br />

<div className="post-card1 button1 logocopy " style={{textAlign:'center', padding:'0 0 .5rem 0', margin:'0'}}>
  {/* <a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}> */}
  Unique Conceptual Photography
  {/* </a> */}
  </div>

</div>


<div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/cHwL8y-NJjk"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-50px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
    <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem',}}><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'30px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}
       light="../assets/modern-responsive.jpg"
      />

<br />
<div className="post-card1 button1 logocopy " style={{textAlign:'center', padding:'0 0 .5rem 0', margin:'0'}}>
      {/* <a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}> */}
      Responsive web apps that work everywhere
      {/* </a> */}
      </div>
</div> 






<div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/LHJlm_4B-Vo"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-50px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
    <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem',}}><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'30px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}
       light="../assets/state-art.jpg"
      />
      <br />
      <div className="post-card1 button1 logocopy " style={{textAlign:'center', padding:'0 0 .5rem 0', margin:'0'}}>
      {/* <a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}> */}
      Pushing boundaries with blended technologies
      {/* </a> */}
      </div>
</div> 


<div className="post-card" style={{height:'', padding:'', display:'flex', flexDirection:'column', justifyContent:'space-between',}}>
<ReactPlayer
      className='react-player666'
      url="https://youtu.be/M-RJO7TlLU4"
      width="100%"
      height="350px"
      config={{
        youtube: {
          playerVars: { showinfo:'0', autoplay:true, controls:'0', start:YouTubeStart, end:YouTubeEnd, mute:true, loop:true  }
        },
      }}
      loop
      playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
      
    <div className="" style={{position:'absolute', bottom:'-50px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'', width:'auto', marginBottom:''}}>
      
      <div className="popped1" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem',}}><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}><ImPlay style={{margin:'0 auto', width:'', fontSize:'30px'}} />CLICK TO PLAY</div></div>

      </div>
      </button>}
       light="../assets/timelapse-videography.jpg"
      />
            <br />
            <div className="post-card1 button1 logocopy " style={{textAlign:'center', padding:'0 0 .5rem 0', margin:'0'}}>
      {/* <a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}> */}
      State-of-the-art photography techniques
      {/* </a> */}
      </div>
</div> 








<div style={{ fontWeight:'bold', marginLeft:'5rem', padding:'0 0 0 30%', fontSize:'2rem', borderLeft:'3px dotted #666', display:'flex', flexDirection:'column', justifyContent: 'center', height:'55vh'}}>
  <div style={{}}>LIVE EXAMPLES:</div>
</div>



<div className="post-card" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/twilightscapes-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    <p style={{padding:'0 2rem'}}>Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.</p>
   <br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    
    </div>



    <div className="post-card" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://tron.allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/tronin60.jpg" alt="TRON movie in only 60 seconds"  /></a>
    <br />
    <p style={{padding:'0 2rem'}}>
    TRON, recreated in a dynamic multimedia format and it's all in 60 seconds. Rediscover your favorite movie in just 60 seconds. Enter the Grid - now.
</p>
   <br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://tron.allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Tron.Allin60.com</a></div>
    
    </div>






    <div className="post-card" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
    <StaticImage src="../../static/assets/vidsock-promo.jpg" alt="Todd builds Web Apps"  /></a>
    <br />
    <p style={{padding:'0 2rem'}}>
Todd sells exceptionally fast and well-built multimedia web apps called VidSocks. They are a complete website solution that get top ranks in Google!
    </p><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>VidSocks.com</a></div>
    
    </div>




    <div className="post-card" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/allin60seconds.jpg" alt="Popular movies in only 60 seconds"  /></a>
    <br />
    <p style={{padding:'0 2rem'}}>
    Today's most popular movies are recreated in a dynamic multimedia format and it's all in 60 seconds. Experience your favorite movies again in fast 60 second snippets with multimedia.
</p>
   <br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://allin60.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Allin60.com</a></div>
    
    </div>








    <div className="post-card" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'12px', overflow:'hidden'}}>
    <a className="noexit" href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/urban-fetish-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    <p style={{padding:'0 2rem'}}>
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
    </p><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>UrbanFetish.com</a></div>
    
    </div>



    <div style={{position:'relative', display:'flex', justifyContent:'center', alignItems:'center', top:'', margin:'0 0 0 5rem',  borderLeft:'3px dotted #666', padding:'0 0 0 8rem', minWidth:'500px', height:'50vh', zIndex:'1', textAlign:'', borderRadius:'',}}>
  <Newsignup />
  </div>



{/* {data.allFile.edges.map(edge => {
      return <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      srl_gallery_image="true"
      alt={edge.node.name}
      key={edge.node.id}
    />
    })} */}


    </div>
    {/* </SRLWrapper>
    </SimpleReactLightbox> */}

    <Link className="post-card11" state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'', zIndex:'1', width:'50px', background:'rgba(0, 0, 0, .9)', height:'95%', display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'0 12px 12px 0', border:'1px solid #999 !important', borderLeft:'none !important', margin:'8px 0'}}>
  <div style={{position:'', left:'', top:'', transform: 'rotate(90deg)', width:'100%', height:'', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold', margin:'-120px auto 0 auto'}}>View Legacy Work Here</div>
</Link>


</div>
{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Photos />
</ScrollAnimation> */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}>
<Animation />
</ScrollAnimation> */}
  </div>


</section>













<div className="parent" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', height:'100%', gap:'20px', marginTop:'20px'}}> 

<div className="div1" style={{width:'65%', display:'flex', flexDirection:'column', justifyContent:'center', background:'', borderRight:'0px solid #dfcfc9' }}>

<div className="div3" style={{background:'',}}>
  
  <h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
fontSize:'clamp(1.6rem, 12vw, 3.8rem)',
// opacity:'.9',
// paddingLeft:'',
}}>
  
{/* <span style={{color:'#dd4000'}}>Roles are like hats</span> */}
</h2>
<h3 className="logotype"  style={{textAlign:'center', margin:'1vh 0 3vh 0', fontSize:'5vw', clear:'right', }}>About</h3>
</div>

<div className="div4" style={{ background: 'rgba(196, 189, 179, .6)', maxHeight:'', justifyContent:'center', display:'flex', flexDirection:'column',}}>
<div style={{padding:'0 8% 0 6.5%', fontSize:'clamp(1rem, 2vw, 2.8rem)',}}>
<p>
Todd Lambert is an award-winning web designer and photographer that trained in Southern California and has traveled and lived in over 16 Western states.
</p>


<p>Todd's skills include all facets of online and multimedia creation including HTML emails, online ads, user interface design, information architecture, web navigation, branding, web graphics, cross-platform and cross-browser web applications, web template creation &amp; CMS implementations.</p>

<p>
When Todd is not online, he is often found pushing the boundaries of night photography. You can usually find him in the middle of the night shooting astrophotography which is his favorite subject.
</p>

<p>
Todd is single and has a dog-child and playful Boxer named “Zoe”, that takes up most of his free time.
</p>

</div>

</div>



</div>

<div className="div2" style={{width:'35%', display:'flex', flexDirection:'column', justifyContent:'space-between', background:'', }}>

<div className="div5" style={{background:'',}}>
  <h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
// fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.6rem, 12vw, 3.8rem)',
// opacity:'.9',
// paddingLeft:'',
}}>

{/* <span style={{color:'#dd4000'}}>Roles are like hats</span> */}
</h2>
</div>

<div className="imgbox grad circle" style={{border:'2px solid #dd4000', position:'relative', padding:'2rem', overflow:'hidden', filter: 'drop-shadow(0px 0px 3px #444)'}}><StaticImage alt="Todd Lambert" src="../../static/assets/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>

<Link state={{modal: true}}
            to="/about-todd/"
            className="post-card button noexit print"
            style={{
              cursor:'pointer',
              width:'',
              maxWidth:'300px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            View More About Todd
          </Link>

<div className="div6" style={{margin:'1rem 0 0 0',}}>  

{/* <h2 className="logofirst" style={{textAlign:'center', marginTop:'', 
fontFamily: 'Lobster Two',
letterSpacing: '2px',
textTransform: 'lowercase',
fontWeight: '400',
textShadow:'0 1px 0 #eee',
fontSize:'clamp(1.3rem, 7vw, 2.8rem)',
opacity:'.9',
paddingLeft:'',
}}>
    
<span style={{color:''}}>My experience has taught me that good design is not created on a spur of the moment, nor does it come naturally. Good design is a thorough and interative process with site visitors in mind foremost. Good design is identifying a problem for those visitors and removing that problem.</span>
</h2> */}

</div>
</div>

</div>





 
 {/* <div style={{position:'relative', zIndex:'-1', bottom:'0', maxHeight:'33vh', overflow:'hidden', border:'0px solid red'}}><LineTest /></div> */}
{/* <div className="spacer33"></div> */}




{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={300}> */}
<blockquote style={{fontFamily:'Lobster Two', textAlign:'left', padding:'', borderRadius:'12px', background: 'rgba(196, 189, 179, .7)', fontSize:'clamp(1.5rem, 2.6vw, 2.8rem)', filter:'drop-shadow(-12px 12px 12px rgba(44, 44, 44, 0.5))'}}>
  <div style={{padding:'2rem 10% 0 10%', filter:'none', textShadow:'1px 1px 0 #aaa'}}>
  Experience has taught me that good design is not created on a spur of the moment, nor does it come naturally. Good design is a thorough and interative process with site visitors in mind foremost. Good design is identifying a problem for those visitors and removing that problem.

    {/* I imagine things and then make them come to life. Creating digital experiences using intriguing photography, animation and typography, all packaged in the most performant coding that loads fast everywhere. */}
  </div>
 <div className="logofirst" style={{fontSize:'', textAlign:'right', margin:'2rem 30% 0 0', filter:'none'}}>- Todd Lambert</div>
</blockquote>
{/* </ScrollAnimation> */}












{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={0} duration={2}> */}




<section id="resume" style={{margin:'0', background: 'rgba(196, 189, 179, .9)', filter:'drop-shadow(12px 12px 12px rgba(44, 44, 44, 0.6))'}}>

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}> */}

<div style={{padding:'0',
position:'relative', height:'', width:'100%', overflow:'', margin:'0 auto',
 outline:'18px dashed rgba(121, 115, 115, 0.3)',
 borderRadius:'', border:'0px solid rgba(121, 115, 115, 0.3)', 
// background:'rgba(121, 115, 115, 0.2)'
}}>


<div className="outer1 section1" style={{padding:'0 2%', height:'', background:'transparent'}}>

<div className="container3" style={{ position:'relative'}}>

<h3 className="logotype print" style={{textAlign:'center', margin:'1vh 0 3vh 0', fontSize:'5vw', clear:'right', paddingTop:'1rem'}}>
Resume
</h3>
<h3 className="logotype printonly" style={{textAlign:'center', margin:' 0', fontSize:'350%',}}>
Lambert
</h3>

<div className="printonly" style={{textAlign:'center', position:'absolute', bottom:'-30px', width:'100%'}}>
(228) 239-6088<br /> toddlambert@gmail.com
</div>
</div>


<div className="resume flexbutt" style={{width:'100%', padding:'0 4%', background:'transparent', gap:'30px'}}>



<div className="primary1 flexcheek" style={{color:'', }}>

{/* <h3 className="logotype printonly" style={{textAlign:'left', fontSize:'250%', height:'50px',}}>
Lambert
</h3> */}



	
	<h2 className="todd-headline">Highlights</h2>

<p><strong>Product Designer - Skilled web designer/developer with 21 years of professional experience.</strong></p>

<p>Successful product designer able to integrate both technical and creative skills to create cross-browser and cross-platform solutions with modern web architecture and navigation systems.</p>

<p>Proven record of completing bold, clean, and effective designs with consistent performance ahead of schedule and under budget.</p>

<p>Industry experience including semiconductor, hospitality, entertainment, health, publishing, finance, insurance, construction, computer software, and direct marketing.</p>


<h2 className="todd-headline" style={{marginBottom:''}}>Proficiency</h2>


<p>Veteran WordPress Theme/Plugin Developer <br />React JS Frontend Designer/Developer</p>

<p>Responsive, Reactive, Adaptive Design, progressive enhancement, PWA development, object oriented CSS animation.</p> 

<p>Analytics, SEO, UI design, Information Architecture &amp; Content Management System integrations. Photo and Video production. </p>

<p><strong>I prefer: JAM stack, React, Gatsby, Canon, Subaru and my Mac.</strong></p>

<h2 className="todd-headline">Education</h2>

<ul className="edu">
<li><strong>Cal State University Fullerton</strong><br />
Web Design and Development - Degree</li>

<li><strong>Coastline Community College</strong><br />
Quality Assurance - Degree</li>

<li><strong>Golden West College</strong><br />
Business Management - Degree</li>

<li><strong>Huntington Beach High School</strong><br />
High School General Courses - Diploma</li>
</ul>


	
</div>


<div className="secondary1 flexcheek" style={{color:'', margin:'',}}>
{/* <h3 className="printonly" style={{textAlign:'right', height:'50px', fontSize:'150%',}}>(228) 239-6088
</h3>  
	 */}
<h2 className="todd-headline">Professional Experience</h2>

<p style={{margin: '0 0 .5rem 0 ',
padding: '0'}}><strong>Todd Lambert Enterprises, 1999 - Present</strong><br />
<em>Sole Proprietor / Photographer</em></p>

<p>Conducted all facets of web development business including meeting with clients, selling web services, and developing methods for improved customer support. <br /> I also like to travel all over the country and photograph spooky and abandoned places at night. <br /><a className="noexit" style={{color:'', textAlign:'center'}} href="https://twilightscapes.com">View @ TwilightScapes.com</a></p>

<p><strong>Primal Health, 2013 - 2014</strong><br /> 
<em>Creative Director / Associate Developer</em>
</p>
<p>
Responsible for all graphic components and direct marketing efforts. Worked with various departments to advance reach through social marketing, engineering and analytics. Also performed SEO and conducted extensive AB testing.</p>

<p><strong>Texas Instruments, 2010 - 2013</strong><br /> 
<em>Style Architect / Front End Developer / Senior UI Designer</em>
</p>
<p>
Worked on all aspects of TIs website, from new ad campaigns and interactive widgets to the core infrastructure including a new re-design and replacement of site navigation site-wide. Championed responsive design techniques and other modern architecture for use on corporate site. Utilized Jquery animation for replacing all of TIs legacy Flash files.</p>

<p><strong>AGJ Systems &amp; Networks, 2008 - 2010 </strong><br />
<em>Web Director / Lead Developer / Senior Designer</em>
</p>
<p>
Solely responsible for all design and development aspects of web department. Interacted with customers and other departments to integrate designs into modern websites catered to customer needs.</p>

<p><strong>TeleVox Software, 2004 - 2007</strong><br />
<em>Director of Web Development</em>
</p>
<p>
Responsible for site architecture, design, graphics, programming, copywriting/editing, project management of all TeleVox websites and online marketing campaigns. Supervised 25 designers and developers.</p>


</div>

 </div>

 <a
            href="https://toddlambert.com/assets/resume-toddlambert.pdf"
            className="post-card button noexit print"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'300px',
              margin:'5vh auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc'
            }}
          >
            Download Resume
            <span className="icon -right">
              <VscFilePdf style={{fontSize:'30px'}} />
            </span>

            
          </a>


<br />
</div>

</div>
{/* </ScrollAnimation> */}
</section>








{/* <div className="spacer33"></div>  */}

{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={false} animatePreScroll={false} delay={200}> */}

<section id="contact" className="child" style={{position:'relative', height:'auto', zIndex:'', padding:'2rem 0', background: 'rgba(196, 189, 179, .5)'}}>




  <div className="outer" style={{margin:'0', outline:'0px solid rgba(121, 115, 115, 0.3)', outlineOffset:'12px', borderRadius:'12px', padding:'0 4%'}}>

    <h3 className="logotype" style={{textAlign:'center', margin:'1vh 0 3vh 0', fontSize:'5vw', clear:'right', paddingTop:'1rem'}}>
Contact
</h3>
<p style={{fontSize:'clamp(1.5rem, 2.5vw, 3.8rem)', textAlign:'center'}}>
Looking for innovative design in a top-performing website app?</p>
<p style={{fontSize:'clamp(1.2rem, 2.5vw, 3.8rem)', fontWeight:'bold', textAlign:'center', textShadow:'1px 1px 0 #666'}}>
  Let's create something <span>great together</span>.</p>

<p style={{fontSize:'1.2rem', textAlign:'center', fontWeight:'bold'}}>
Availability: &nbsp; {date}
</p>

<Contact />

</div> 


 </section>
 {/* </ScrollAnimation> */}

 {/* <div className="spacer66"></div>  */}





























 

      
      


<Footer />

    </Layout>
    </CustomBox>
  )
}

export default HomePage