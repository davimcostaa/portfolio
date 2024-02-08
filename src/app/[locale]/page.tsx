"use client"
import ContactVariables from "@/src/components/ContactVariables";
import Footer from "@/src/components/Footer";
import Menu from "@/src/components/Menu";
import MenuMobile from "@/src/components/MenuMobile";
import { useState } from "react";
import styled from "styled-components";
import { useTranslations } from 'next-intl';

import './globals.css'
import LanguageChanger from "@/src/components/LanguageChanger";

const Body = styled.section`
  display: grid;
  height: 100vh;
  grid-template-columns: 60% 40%;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 100%;
    overflow: auto;
    overflow-y: scroll;
  }


`;

const SectionInfo = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 237px;
  justify-content: center;

  @media (max-width: 640px) {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 120px;
    height: fit-content;
  }

`;

const TituloPrincipal = styled.h1`
  color: #E5E9F0;
  font-size: 62px;
  font-weight: 400;

  @media (max-width: 640px) {
    font-size: 52px;
  }
`;

const TituloSecundario = styled.h3`
  color: #E5E9F0;
  font-size: 18px;
  font-weight: 450;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const TituloExpertise = styled.h2`
  color: #4D5BCE;
  font-size: 32px;
  font-weight: 450;

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

const SectionContact = styled.section`
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 640px) {
    margin-top: 80px;
  }
`;

const ImagemBlur = styled.img`
  width: 100%;
  height: 90%;

  @media (max-width: 640px) {
    display: none;
  }
`;

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const t = useTranslations("Home");
  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile $menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <SectionInfo>
          <TituloSecundario>{t("greeting")}</TituloSecundario>
          <TituloPrincipal>Davi Costa</TituloPrincipal>
          <TituloExpertise> &gt; {t("title")} </TituloExpertise>

          <SectionContact>
            <ContactVariables 
                titulo={t("emailTitle")} 
                nome={t("emailName")} 
                url="davim.costa@outlook.com" />

            <ContactVariables 
                titulo={t("gitHubTitle")} 
                nome="gitHubLink" 
                url="https://github.com/davimcostaa" />

            <ContactVariables
              titulo={t("linkedinTitle")} 
              nome="linkedinLink"
              url="https://linkedin.com/in/davi-marquesc"
            />

          </SectionContact>
        </SectionInfo>
        <div>
        <LanguageChanger />            
        <ImagemBlur src="/blur.svg" />
        </div>
      </Body>

      <Footer />
    </>
  );
}
