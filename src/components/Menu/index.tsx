"use client";
import React from 'react';
import styled from 'styled-components';

interface Props {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = styled.header`
  width: 100vw;
  height: 56.191px;
  border-bottom: 1px solid #1E2D3D;
  display: flex;
  align-items: center;
  padding-left: 23px;
  padding-right: 23px;
  justify-content: space-between;
`;

const PrimeiraParte = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const DivNome = styled.div`
  color: #607B96;
  margin-right: 124px;
  cursor: pointer;

  &: hover {
    color: #FFF;
  }
`;

const Links = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 700px) {
    display: none;
  }
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

  &: hover {
    color: #FFF;
  }
  
`;

const LinkContato = styled.div`
  color: #607B96;
  border-left: 0.5px solid #1E2D3D;
  padding-left: 31px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;

  @media (max-width: 700px) {
    display: none;
  }

  &: hover {
    color: #FFF;
  }
`;

const NomeImagemWrapper = styled.div`
  display: none; 

  @media (max-width: 700px) {
    display: flex;
  }
`;

const Menu = ({setMenuIsVisible}: Props) => {
  return (
    <Header>
      <PrimeiraParte>
        <DivNome>
          davi-costa
        </DivNome>
        
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
      </PrimeiraParte>
      
      <NomeImagemWrapper onClick={() => setMenuIsVisible(true)}>
        <img src="/menu.png" alt="Menu" />
      </NomeImagemWrapper>

      <LinkContato>
        _contact-me
      </LinkContato>
    </Header>
  );
};

export default Menu;
