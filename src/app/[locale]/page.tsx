"use client"
import ContactVariables from "@/src/components/ContactVariables";
import Footer from "@/src/components/Footer";
import Menu from "@/src/components/Menu";
import MenuMobile from "@/src/components/MenuMobile";
import { useState } from "react";
import styled from "styled-components";
import { useTranslations } from 'next-intl';

import './globals.css'

const Body = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const SectionInfo = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 237px;
  justify-content: center;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TituloPrincipal = styled.h1`
  color: #E5E9F0;
  font-size: 62px;
  font-weight: 400;
`;

const TituloSecundario = styled.h3`
  color: #E5E9F0;
  font-size: 18px;
  font-weight: 450;
`;

const TituloExpertise = styled.h2`
  color: #4D5BCE;
  font-size: 32px;
  font-weight: 450;
`;

const SectionContact = styled.section`
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImagemBlur = styled.img`
  width: 100%;
  height: 90%;
`;

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const t = useTranslations("Home");
  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

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

        <ImagemBlur src="/blur.svg" />
      </Body>

      <Footer />
    </>
  );
}
