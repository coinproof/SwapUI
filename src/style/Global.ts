import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
} 

body {

    background: ${({ theme }) => 
      // @ts-ignore: Unreachable code error
    theme.colors.gradients.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
