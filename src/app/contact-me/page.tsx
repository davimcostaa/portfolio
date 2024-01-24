"use client"
import Footer from '@/src/components/Footer';
import Input from '@/src/components/Input';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import TechnologyCheck from '@/src/components/TechnologyCheck';
import React, { useState } from 'react'
import { Body, Folders, FolderName, Folder, PrimeiraParte, NomePasta, SubPasta, DivContact, FolterContact, Contact, ContactText, CodeSection, FileName, Code, Numbers, TechnologiesSection, Post, User, UserTop, Profile, UserData, UserName, PostContent, Text, Button } from './styles';

const AboutMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [email, setEmailOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const handleClick = (text: string, fileName: string) => {
    contarLinhas(text);
  };

  function contarLinhas(str: string) {
    const linhas = str.split('\n');
    const numeroDeLinhas = linhas.length;
    const linesArray = []
  
    for (let index = 1; index <= numeroDeLinhas; index++) {
      linesArray.push(index)
    }

    setNumberOfLines(linesArray)
  }


  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
          <div>

            <FolderName>
                <img src='/arrow-down.png' />
                contacts
            </FolderName>

              <div>
              <Folder onClick={() => setEmailOpen(!email)}>
                  <PrimeiraParte>
                    {email ? <img src={`/arrow-open.png`} /> : <img src={`/arrow-right.png`} />}

                    <NomePasta>
                      <img src='/pink-icon.png' />
                      email
                    </NomePasta>
                  </PrimeiraParte>

                  {email ? (
                    <div onClick={(e) => { e.stopPropagation();}}>
                        <SubPasta>
                          <img src='/file.png' />
                          write
                        </SubPasta>
                    </div>
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
                contact
                <img src='/close-icon.png' />
            </FileName>

            <Code>
                    <Input label='name:' />
                    <Input label='email:' />
                    <Input label='message:' size='big' />

                    <Button>
                      submit-message
                    </Button>
                    
            </Code>
            
        </CodeSection>

        <TechnologiesSection>
        
           
        </TechnologiesSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe