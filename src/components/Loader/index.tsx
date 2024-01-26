import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
  width: 120px;
  height: 20px;
  background:
  linear-gradient(#5565E8 0 0) 0/0% no-repeat #ddd;
  animation: l1 2s infinite linear;

  @keyframes l1 {
    100% {background-size:100%}
}
`

const Loader = () => {
  return (
    <Loading />
  )
}

export default Loader