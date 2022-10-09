import React from 'react'
import styled,{keyframes} from 'styled-components'

function Loader() {
  return (
    <Loading>
        <div></div>
    </Loading>
  )
}

export default Loader

const loadingRotate=keyframes`
to {
    transform: rotateZ(-360deg);
  }
`
const Loading=styled.div`
width: 100vw;
  height: 100vh;
  background-color: white;
  display: grid;
  place-items: center;
  max-width: 100%;
  div{
    width: 10vmax;
  height: 10vmax;
  border-bottom: 5px solid rgba(0, 0, 0, 0.719);

  border-radius: 50%;

  animation: ${loadingRotate} 800ms linear infinite;}
`

