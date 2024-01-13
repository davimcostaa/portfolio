import React from 'react'
import styled from 'styled-components'

interface Props {
    icon: string
    name: string
}

const Check = styled.div`
    display: flex;
    width: fit-content;
    margin-right: 50px;
    background: #011221;
    gap: 10px;
    > span {
        color: white;
    }
`

const CheckIcon = styled.img`
    width: 18.812px;
    height: 18.812px;
`

const TechnologyCheck = ({icon, name}: Props) => {
  return (
    <Check>
        <CheckIcon src='/check-icon.png' />
        <img src={`/logos/${icon}-icon.png`} />
        <span> {name} </span>
    </Check>
  )
}

export default TechnologyCheck