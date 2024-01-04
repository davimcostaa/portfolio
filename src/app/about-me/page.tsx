"use client"
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import React, { useState } from 'react'
import styled from 'styled-components';
// import { Menu as DropDown} from 'antd'

const Body = styled.div`
  padding-top: 56.191px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

const Folders = styled.section`
    color: #FFF;
    height: 100vh;
    width: 244px;
    display: flex;
    flex-direction: column;
    border-right: 0.5px solid #1E2D3D;
    font-size: 16px;
    font-weight: 400;

`

const FolderName = styled.div`
  cursor: pointer;
    height: 40.6px;
    width: 100%;
    border-bottom: 0.5px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    padding-left: 23px;
    margin-bottom: 16px;
`

const Folder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 23px;
  gap: 13px;
  cursor: pointer;
  margin-bottom: 15.8px;
`

const NomePasta = styled.div`
  display: flex;
  align-items: center;
  gap: 8.92px;

`

const PrimeiraParte = styled.div`
  display: flex;
  width: 100%;
  gap: 13px;
  align-items: center;

  > img {

  }
`

const AboutMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [bioIsOpen, setBioIsOpen] = useState(false);
  const [interestsIsOpen, setInterestsIsOpen] = useState(false);
  const [educationIsOpen, setEducationIsOpen] = useState(false);
  
  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
            <FolderName>
                <img src='/arrow-down.png' />
                personal-info
            </FolderName>

            {/* <WhiteDropdown
                style={{backgroundColor: '#011627', color: '#fff'}}
                mode="inline"
                items={[
                  {label: "education", key: "education" ,children: [
                    {label: "university", key: "university"}
                  ]}
                ]}
              /> */}

              <div>
              <Folder onClick={() => setBioIsOpen(!bioIsOpen)}>
                <PrimeiraParte>
                {
                  bioIsOpen ? <img src={`/arrow-open.png`} /> : <img src={`/arrow-right.png`} />
                }

                  <NomePasta>
                    <img src='/pink-icon.png' />
                    bio
                  </NomePasta>
                </PrimeiraParte>

                 {bioIsOpen ? (
                    <div>
                            <NomePasta >
                            <img src='/blue-icon.png' />
                            education
                            </NomePasta>
                    </div>
                  ) : null}
                  
              </Folder>

                  <Folder onClick={() => setInterestsIsOpen(!interestsIsOpen)}> 

                    <PrimeiraParte>
                    {
                    interestsIsOpen ? <img src={`/arrow-open.png`} /> : <img src={`/arrow-right.png`} />
                    }

                    <NomePasta>
                      <img src='/green-icon.png' />
                      interests
                    </NomePasta>

                    </PrimeiraParte>
                      
                  </Folder>

                  <Folder onClick={() => setEducationIsOpen(!educationIsOpen)}>

                    <PrimeiraParte>
                      {
                      educationIsOpen ? <img src={`/arrow-open.png`} /> : <img src={`/arrow-right.png`} />
                      }

                      <NomePasta>
                        <img src='/blue-icon.png' />
                        education
                      </NomePasta>
                      </PrimeiraParte>
                    
                    {educationIsOpen ? (
                        <NomePasta >
                        <img src='/blue-icon.png' />
                        education
                        </NomePasta>
                    ) : null}

                      
                  </Folder>


              </div>
        </Folders>


      </Body>

      <Footer />
    </>
  )
}

export default AboutMe