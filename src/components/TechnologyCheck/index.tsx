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

    
    @media (max-width: 640px) {
        margin-right: 0px;
      }
`

const CheckIcon = styled.img`
    width: 18.812px;
    height: 18.812px;
`

const TechnologyCheck = ({icon, name, changeIcon, onClick}: Props) => {
    const [checked, setChecked] = useState(true);

    const handleClick = () => {
        setChecked(!checked);
        if (onClick) {
          onClick();
        }
      };

  return (
    <Check onClick={handleClick}>
        {changeIcon && checked ? <CheckIcon src='/notcheck-icon.png' /> : <CheckIcon src='/check-icon.png' />}
        <img src={`/logos/${icon}-icon.png`} />
        <span> {name} </span>
    </Check>
  )
}

export default TechnologyCheck