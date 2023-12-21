"use client"
import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MenuMobile from "../components/MenuMobile";
import './globals.css'

const SectionNome = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding-left: 237px;
  justify-content: center;
`

const TituloPrincipal = styled.h1`
  color: #E5E9F0;
  font-size: 62px;
  font-weight: 400;
`

export default function Home() {
  const [menuIsVisible, setMenuIsVibible] = useState(false);

  return (
    <>
        <Menu
          setMenuIsVisible={setMenuIsVibible} 
        />
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVibible}
        />

        <SectionNome>
          <h3>Hi all! I am</h3>
          <TituloPrincipal>Davi Marques</TituloPrincipal>
        </SectionNome>

        <Footer />
    </>
  )
}
