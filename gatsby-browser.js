import * as React from "react"
// import { StoreProvider } from "./src/context/store-context"

// import SimpleReactLightbox from 'simple-react-lightbox'

// export const wrapRootElement = ({ element }) => (
//   <SimpleReactLightbox>{element}</SimpleReactLightbox>
// )


// export const wrapRootElement = ({ element }) => (

  
//   {element}
// )

// export const onInitialClientRender = () => {
//   setTimeout(function() {
//       document.getElementById("___loader").style.display = "none"
//   }, 1000)
// }


export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated since your last visit. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}





