import Image from 'next/image';
import React from 'react'
import { Container } from './styles';
import closeIcon from '../../../public/close.png'
import styled from 'styled-components';

interface Props {
    menuIsVisible: boolean
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DivNome = styled.div`
  color: #607B96;
  margin-right: 124px;
  cursor: pointer;

  &: hover {
    color: #FFF;
  }
`;

const PrimeiraParte = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 23px;
  padding-right: 23px;
  height: 56.191px;
  border-bottom: 0.5px solid #1E2D3D;

`;
  
const Links = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const LinkNavegacao = styled.div`
    color: #607B96;
    border-top: 0.5px solid #1E2D3D;
    border-bottom: 0.5px solid #1E2D3D;
    padding-left: 31px;
    padding-right: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 55px;
`;  

const MenuMobile = ({menuIsVisible, setMenuIsVisible}: Props) => {
  return (
    <Container isvisible={menuIsVisible ? 'true' : 'false'} >
        <PrimeiraParte>
            <DivNome>
            davi-costa
            </DivNome>
            <Image src={closeIcon} width={16} height={16} alt='Close icon' onClick={() => setMenuIsVisible(false)} /> 

        </PrimeiraParte>
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
            <LinkNavegacao>
                _contact-me
            </LinkNavegacao>
        </Links>
    </Container>
  )
}

export default MenuMobile