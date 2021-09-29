import { createGlobalStyle } from 'styled-components'
import { ShibanovaTheme } from '@becoswap-libs/uikit'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
} 

body {

  background-image: url('/images/dexmobilebg2.png');
  background-size: 100% auto;
 background-repeat: repeat-y;
 

 img {
   height: auto;
   max-width: 100%;
 }
 // @ts-ignore: Unreachable code error
//  
 @media only screen and (min-width: 650px){
   background-image: url('/images/dexbgbig.png');
   background-size: 100% auto;
   background-repeat: repeat-y;
 }
  }
`

export default GlobalStyle
