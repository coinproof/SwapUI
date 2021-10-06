import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Flex } from '@becoswap-libs/uikit'

const Hero = styled(Flex)`
  flex-direction: column;
  position: relative;
  justify-content: center; 
  background-position: bottom center;
  background-image: url('/images/banner2bg.png');
  background-color: green;
  border-top: solid 1px ${({ theme }) => theme.colors.primary};
  

  // ${({ theme }) => theme.mediaQueries.lg} {
  //   display: flex;
  //   justify-content: flex-end;
  // }

  // ${({ theme }) => theme.mediaQueries.xl} {
  //   // padding: 0 5vw;
  // }
` 

const Row = styled(Flex)`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 15px 0 0 0;
`

const Col = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
const Img = styled.img`
  height: 25px;
  margin: 5px 5px;
  background-color: white;
  border-radius: 5px;
`
const Ul = styled.ul`
  list-style-type: none;  
  text-weight: bold;
`

const Footer = () => (
  <Hero>
    <Row style={{marginBottom:"15px"}}>
      <Text style={{fontSize:"12px"}}>Copyright © 2021. All rights reserved. Shibanova.io</Text>
    </Row>
  </Hero>
)

export default Footer
