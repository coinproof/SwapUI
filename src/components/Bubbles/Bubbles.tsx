import React from 'react'
import styled, { keyframes } from 'styled-components'

interface CircleContainerProps {
  index: number
  width: number
  height: number
  framesName: string
  moveDuration: number
  startPositionY: number
}

const random = (max) => {
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - 1 + 1)) + 1
}
const PARTICLE_BASE_SIZE = 80
const Wrapper = styled.div`
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`

const keyframed = (startPositionY) => keyframes`
from {
    transform: translate3d(${random(100)}vw, ${startPositionY}vh , 0);
  }
  to {
    transform: translate3d(${random(100)}vw, ${startPositionY - random(startPositionY) - 10}vh, 0);
}
`
const fadeIn = () => keyframes`
0% {
    opacity: 1;
  }
  50% {
    opacity: ${random(15) / 10};
  }
  100% {
    opacity: 1;
  }

`

const scaled = () => keyframes`
0% {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(${random(25) / 10}, ${random(25) / 10}, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }

`
const CircleContainer = styled.div<CircleContainerProps>`
  z-index: 999;
  position: absolute;
  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  animation-name: ${(props) => keyframed(props.startPositionY)};
  animation-duration: ${(props) => props.moveDuration};
  -webkit-animation-name: ${(props) => keyframed(props.startPositionY)};
  -webkit-animation-duration: ${(props) => props.moveDuration}ms;
  animation-delay: ${random(1000)}ms;
  -webkit-animation-delay: ${random(1000)}ms;
`

const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  mix-blend-mode: screen;
  background-image: radial-gradient(#2786c0, #3e77d1 10%, hsla(180, 100%, 80%, 0) 56%);
  animation: ${()=>fadeIn} ${random(5) * 1000}ms infinite, ${() => scaled} ${random(5)}ms;} ;
  -webkit-animation: ${()=>fadeIn} ${random(5) * 1000}ms infinite, ${() => scaled} ${random(5)}ms;} ;
  animation-delay: ${random(4000)} + ms;
  animation-delay: ${random(4000)} + ms;
`

type Props = {
  numberOfBubbles: number
}
const Bubbles: React.FC<Props> = ({ numberOfBubbles }) => (
  <Wrapper>
    {Array.from({ length: numberOfBubbles }).map((_, index) => {
      const circleSize = random(PARTICLE_BASE_SIZE)
      const startPositionY = random(400) + 40
      const framesName = `move-frames-${index}`
      const moveDuration = random(300000) + 50000
      return (
        <CircleContainer
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          index={index}
          width={circleSize}
          height={circleSize}
          framesName={framesName}
          moveDuration={moveDuration}
          startPositionY={startPositionY}
        >
          <Circle />
        </CircleContainer>
      )
    })}
  </Wrapper>
)

export default Bubbles
