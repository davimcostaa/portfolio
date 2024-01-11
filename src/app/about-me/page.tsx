"use client"
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import React, { useState } from 'react'
import styled, { css } from 'styled-components';

interface FolterContactProps {
  isOpen: boolean;
}

const Body = styled.div`
    width: 100vw;
    padding-top: 56.191px;
    display: flex;
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
    border-right: 0.5px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    gap: 7px;
    color: #607B96;
`

const Folder = styled.div`
    display: flex;
    flex-direction: column;
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

const SubPasta = styled.div`
    display: flex;
    align-items: center;
    gap: 8.92px;
    padding-left: 40px;
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

      @media screen and (max-width: 1400px) {
        width: 610px;
      }

`

const Code = styled.section`
    display: flex;
    border-top: 0.5px solid #1E2D3D;
    @media screen and (max-width: 1350px) {
      scrollbar-width: thin;   
      max-height: 470px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
    
      &::-webkit-scrollbar-thumb {
        background-color: #607B96;
      }
    
      &::-webkit-scrollbar-track {
        background-color: #011627;
      }
    }
`

const Numbers = styled.div`
      width: 22px;
      margin-top: 17.8px;
      display: flex;
      flex-direction: column;
      direction: rtl;
      margin-left: 38px;
      font-size: 17px;
      color: #607B96;
      align-items: flex-start;
      gap: 2px;

      @media screen and (max-width: 1400px) {
        margin-left: 28px;
      }
`

const Text = styled.div`
      width: 500px;
      margin-top: 17.8px;
      margin-left: 40px;
      color: #607B96;
      line-height: 150%; 

      > p {
        padding-left: 10px;
      }

      @media screen and (max-width: 1400px) {
        margin-left: 35px;
        > p {
          padding-left: 10px;
        }
      }
    
`

const TechnologiesSection = styled.section`
    margin-top: 40.6px;
    border-top: 0.5px solid #1E2D3D;
    width: 745px;

`

const Post = styled.div`  
`

const User = styled.div`

`

const Profile = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 36px;

`

const AboutMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [bioIsOpen, setBioIsOpen] = useState(false);
  const [interestsIsOpen, setInterestsIsOpen] = useState(false);
  const [educationIsOpen, setEducationIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const aboutMe = `
      * About me
      * A 20-year-old professional with a technical 
      * background in IT and a degree in
      * Systems Analysis and Development, blending skills 
      * in React, Next.js, Python,
      * React Native, Express, and AdonisJS. Experienced 
      * in IT support, advanced
      * proficiency in English, and expertise in 
      * automation and data processing with Python, as 
      * well as creating applications with React.
  `;

  const experience = `
      ** IT Support Intern
      * IESB University Center 
      * 
      * March 2022 - June 2023.
      
          ---- Computer formatting;
          ---- Administrative routines;
          ---- Technical support campus staff.
      * 
      *   
      *   
      ** IT Intern
      * National Indigenous People Foundation
      * 
      * July 2022 – December 2023.
          ---- Python script coding for data processing.
          ---- Python script coding for automation.
          ---- Development of solutions using JavaScript.
      * 
      * 
      *          
      ** IT Intern
      * National Indigenous People Foundation
      *          
      * July 2022 – December 2023.
          ---- Python script coding for data processing.
          ---- Python script coding for automation.
          ---- Development of solutions using JavaScript.
     *          

  `;

  const university = `
      * University
      *
      * Graduated in Superior in Analysis and 
      * Development of Systems by the 
      * Institute of Superior Education of Brasilia.
      * 
      * Finished in December 2023.
`;

  
  const [openText, setOpenText] = useState(aboutMe);
  const [fileName, setFileName] = useState('about-me');

  const handleClick = (text: string, fileName: string) => {
    setOpenText(text);
    setFileName(fileName);
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
                personal-info
            </FolderName>

              <div>
              <Folder onClick={() => setBioIsOpen(!bioIsOpen)}>
                  <PrimeiraParte>
                    {bioIsOpen ? <img src={`/arrow-open.png`} /> : <img src={`/arrow-right.png`} />}

                    <NomePasta>
                      <img src='/pink-icon.png' />
                      bio
                    </NomePasta>
                  </PrimeiraParte>

                  {bioIsOpen ? (
                    <div onClick={(e) => { e.stopPropagation();  handleClick(aboutMe, 'about-me')}}>
                        <SubPasta>
                          <img src='/file.png' />
                          about-me
                        </SubPasta>
                    </div>
                  ) : null}

                  {bioIsOpen ? (
                    <div onClick={(e) => { e.stopPropagation();  handleClick(experience, 'experience')}}>
                        <SubPasta>
                          <img src='/file.png' />
                          experience
                        </SubPasta>
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

                      <NomePasta >
                        <img src='/blue-icon.png' />
                        education
                      </NomePasta>
                      </PrimeiraParte>
                    
                    {educationIsOpen ? (
                      <div onClick={(e) => { e.stopPropagation();  handleClick(university, 'university')}}>
                        <SubPasta>
                          <img src='/file.png' />
                          university
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
                {fileName}
                <img src='/close-icon.png' />
            </FileName>

            <Code>
                <Numbers>
                  {numberOfLines.map((line) => (
                    <span>{line}</span>
                  ))}
                </Numbers>

                <Text>
                /**
                 {openText.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                  ))}
                */
                </Text>
            </Code>
            
        </CodeSection>


        <TechnologiesSection>
            <Post>
                <User>
                    <div>
                      <Profile src='/profile.jpg' />
                    </div>

                    <div>

                    </div>
               </User>
            </Post>
        </TechnologiesSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe