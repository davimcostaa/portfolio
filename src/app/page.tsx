"use client"
import { useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MenuMobile from "../components/MenuMobile";
import './globals.css'

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
        <Footer />
    </>
  )
}
