import React, { ChangeEvent } from 'react'
import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components'

interface Props {
    label: string
    size?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

interface SizeProps {
    size?: string;
  }

const StylizedDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Label = styled.label`
    color: #607B96;
    font-size: 16px;
    font-weight: 450;
`

const StylizedInput = styled.input<SizeProps>`
    border-radius: 8px;
    border: 1px solid #1E2D3D;
    background: #011221;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    width: 372px;
    color: #465E77;
    padding: 10px 15px 10px 15px;
    height: ${(props) => (props.size === 'big' ? '100px' : '41px')};
    margin-bottom: 5px;
    margin-top: 5px;
    &:focus {
        outline: none;
    }
`

const Input = ({label, size, onChange, value}: Props) => {
  return (
    <StylizedDiv>
        <Label>
            _{label}:
        </Label>
        <StylizedInput size={size} onChange={onChange} value={value} />
    </StylizedDiv>
  )
}

export default Input