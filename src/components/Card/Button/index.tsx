import React from 'react'
import styled from 'styled-components'

const CardButton = styled.a`
    width: fit-content;
    height: 38px;
    background: #1C2B3A;
    padding: 10px 14px;
    border-radius: 8px;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
`

const Button = ({ url }: { url: string }) => {
    
  return (
    <CardButton href={url} target='_blank'>view-project</CardButton>
  )
}

export default Button