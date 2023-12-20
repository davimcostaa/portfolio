import Image from 'next/image';
import React from 'react'
import { Container } from './styles';
import closeIcon from '../../../public/close.png'
import styled from 'styled-components';

interface Props {
    menuIsVisible: boolean
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
  
const Links = styled.div`
    width: 100%;
    height: 10%;
`;

const LinkNavegacao = styled.div`
    color: #607B96;
    border-left: 0.5px solid #1E2D3D;
    border-right: 0.5px solid #1E2D3D;
    padding-left: 31px;
    padding-right: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
`;  

const MenuMobile = ({menuIsVisible, setMenuIsVisible}: Props) => {
  return (
    <Container isvisible={menuIsVisible ? 'true' : 'false'} >
        <Image src={closeIcon} width={16} height={16} alt='Close icon' onClick={() => setMenuIsVisible(false)} /> 
        <Links>
            <LinkNavegacao>
                _hello
            </LinkNavegacao>
            <LinkNavegacao>
                _about-me
            </LinkNavegacao>
            <LinkNavegacao>
                _projects
            </LinkNavegacao>
        </Links>
    </Container>
  )
}

export default MenuMobile