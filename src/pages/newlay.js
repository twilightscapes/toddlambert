import * as React from "react"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
import CasePanels from "../components/casepanels"

import { SRLWrapper } from "simple-react-lightbox"

import styled from "styled-components"
const CustomBox = styled.div`


`







export default function testPage() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`Testing Page - please disregard`}
          description={`Todd Lambert - Testing Page`}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />

{/* <br /><br /> */}
<header className="" style={{backgroundColor:'#222', height:'400px', display:'grid', placeContent:'center', color:'#fff',}}>
<div className="logolink" style={{textAlign:'center', position:'relative',fontSize:'clamp(2rem, 14.5vw, 15vw)', padding:'0 0 2% 0', background:'tranparent', filter: 'drop-shadow(0px 0px 0px #444)'}}><span className="logofirst mainlogo">todd</span> <span className="logocolor">lambert</span></div>
</header>
<main className="" style={{display:'flex', gap:'5vw', justifyContent:'center', width:'100%'}}>



{/* <div style={{backgroundColor:'#999', width:'35%', height:'', border:'1px solid #222'}}>oETgAeACgAfLIXKSoREjmwFxCwINAAsABFWLAXLxuxFxo</div>
<div style={{backgroundColor:'#999', width:'75%'}}>oETgAeACgAfLIXKSoREjmwFxCwINAAsABFWLAXLxuxFxo</div> */}


<div className="parent" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', height:'100%', gap:'20px', marginTop:'50px'}}> 


<div className="div1" style={{width:'', display:'flex', flexDirection:'column', justifyContent:'center', background:'', borderRight:'0px solid #dfcfc9' }}>



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

</div>

<div className="div2" style={{width:'', display:'flex', flexDirection:'column', justifyContent:'space-between', background:'', }}>



<div className="imgbox grad circle" style={{width:'400px', marginTop:'5vh',  border:'2px solid #dd4000', position:'relative', padding:'2rem', overflow:'hidden', filter: 'drop-shadow(0px 0px 3px #444)'}}><StaticImage alt="Todd Lambert" src="../../static/assets/todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'10px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>

</div>



</main>
    <blockquote style={{width:'', fontFamily:'Lobster Two', textAlign:'left', padding:'', borderRadius:'12px', background: 'rgba(196, 189, 179, .7)', fontSize:'clamp(1.5rem, 2.6vw, 2.8rem)', filter:'drop-shadow(-12px 12px 12px rgba(44, 44, 44, 0.5))'}}>
  <div style={{padding:'2rem 3% 0 3%', filter:'none', textShadow:'1px 1px 0 #aaa'}}>
  Experience has taught me that good design is not created on a spur of the moment, nor does it come naturally. Good design is a thorough and interative process with site visitors in mind foremost. Good design is identifying a problem for those visitors and removing that problem.

    {/* I imagine things and then make them come to life. Creating digital experiences using intriguing photography, animation and typography, all packaged in the most performant coding that loads fast everywhere. */}
  </div>
 <div className="logofirst" style={{fontSize:'', textAlign:'right', margin:'2rem 30% 0 0', filter:'none'}}>- Todd Lambert</div>
</blockquote>
    </Layout>

  )
}
