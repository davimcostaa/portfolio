"use client"
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import React, { useState } from 'react'
import styled, { css } from 'styled-components';
// import { Menu as DropDown} from 'antd'

interface FolterContactProps {
  isOpen: boolean;
}

const Body = styled.div`
    padding-top: 56.191px;
    display: flex;
    flex-direction: row;
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
    justify-content: space-between;
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

const FileName = styled.div`
    cursor: pointer;
    height: 40.6px;
    width: 218.48px;
    border-bottom: 0.5px solid #1E2D3D;
    border-right: 0.5px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 7px;
    margin-bottom: 16px;
    color: #607B96;
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

const DivContact = styled.div<FolterContactProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;

    ${(props) => css`
      ${props.isOpen &&
      css`
        margin-bottom: 200px;
        > div > img {
          transform: rotate(360deg);
        `}
    
    `}
`;

const FolterContact = styled.div`
    cursor: pointer;
    height: 40.6px;
    width: 100%;
    border-bottom: 0.5px solid #1E2D3D;
    border-top: 0.5px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    padding-left: 23px;
    img {
      transform: rotate(-90deg);
    }
  
`;

const Contact = styled.div<FolterContactProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4px;
    padding-top: 10px;

    ${(props) => css`
    ${!props.isOpen &&
    css`
      padding-top: 5px;
      `}
    
  `}
`

const ContactText = styled.span`
      color: #607B96;
      font-size: 14.5px;
      font-weight: 400;
`;

const CodeSection = styled.section`
      width: 674px;
      border-right: 0.5px solid #1E2D3D;
`

const AboutMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [bioIsOpen, setBioIsOpen] = useState(false);
  const [interestsIsOpen, setInterestsIsOpen] = useState(false);
  const [educationIsOpen, setEducationIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  
  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
          <div>

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
                            <img src='/file.png' />
                            about-me
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
                        <img src='/file.png' />
                        university
                        </NomePasta>
                    ) : null}

                      
                  </Folder>
              </div>
            </div>
            <DivContact isOpen={contactIsOpen} onClick={() => setContactIsOpen(!contactIsOpen)}>
                  <FolterContact>
                      <img src='/arrow-down.png' />
                      contacts
                  </FolterContact>

                  <Contact isOpen={contactIsOpen}>
                    <img src='/mail-icon.png' />
                    <ContactText> davim.costa@outlook.com</ContactText>
                  </Contact>

                  <Contact isOpen={contactIsOpen}>
                    <img src='/phone-icon.png' />
                    <ContactText> (61) 99391-5306</ContactText>
                  </Contact>
            </DivContact>

        </Folders>

        <CodeSection>
          
            <FileName>
                personal-info
                <img src='/close-icon.png' />
            </FileName>



        </CodeSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe