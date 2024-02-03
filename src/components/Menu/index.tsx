"use client";
import React from 'react';
import styled from 'styled-components';
import {useRouter} from '../../navigation';
import { useTranslations } from 'next-intl';

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
  position: absolute;
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

  @media screen and (max-width: 1674px) {
    margin-right: 101px;
  }

`;

const Links = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 810px) {
    display: none;
  }
`;

const LinkNavegacao = styled.div`
  border-left: 0.5px solid #1E2D3D;
  border-right: 0.5px solid #1E2D3D;
  padding-left: 31px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  color: #607B96;

    &: hover {
      color: #FFF;
    }
  
`;

const LinkContato = styled.div`
  text-decoration: none;
  color: #607B96;
  border-left: 0.5px solid #1E2D3D;
  padding-left: 31px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;

  @media (max-width: 810px) {
    display: none;
  }

    &: hover {
      color: #FFF;
    }
`;

const NomeImagemWrapper = styled.div`
  display: none; 

  @media (max-width: 810px) {
    display: flex;
  }
`;

const Menu = ({setMenuIsVisible}: Props) => {

const t = useTranslations("Menu");
 
const router = useRouter();

  return (
    <Header>
      <PrimeiraParte>
        <DivNome>
          davi-costa
        </DivNome>
        
        <Links>
            <LinkNavegacao onClick={() => router.push('/')}>
                  _{t("hello")}
            </LinkNavegacao>
            <LinkNavegacao onClick={() => router.push('/about-me')}>
                  _{t("about")}
            </LinkNavegacao>
            <LinkNavegacao onClick={() => router.push('/projects')}>
                  _{t("projects")}
            </LinkNavegacao>
        </Links>
      </PrimeiraParte>
      
      <NomeImagemWrapper onClick={() => setMenuIsVisible(true)}>
        <img src="/menu.png" alt="Menu" />
      </NomeImagemWrapper>

      <LinkContato onClick={() => router.push('/contact-me')}>
           _{t("contact")}
      </LinkContato>
    </Header>
  );
};

export default Menu;
