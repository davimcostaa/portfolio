import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
    icon: string
    name: string
    changeIcon?: boolean
    onClick?: () => void
}

const Check = styled.div`
    cursor: pointer;
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

const TechnologyCheck = ({icon, name, changeIcon}: Props) => {

    const [checked, setChecked] = useState(true)

  return (
    <Check onClick={() => setChecked(!checked)}>
        {changeIcon && checked ? <CheckIcon src='/notcheck-icon.png' /> : <CheckIcon src='/check-icon.png' />}
        <img src={`/logos/${icon}-icon.png`} />
        <span> {name} </span>
    </Check>
  )
}

export default TechnologyCheck