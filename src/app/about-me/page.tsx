"use client"
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import TechnologyCheck from '@/src/components/TechnologyCheck';
import React, { useState } from 'react'
import { Body, Folders, FolderName, Folder, PrimeiraParte, NomePasta, SubPasta, DivContact, FolterContact, Contact, ContactText, CodeSection, FileName, Code, Numbers, TechnologiesSection, Post, User, UserTop, Profile, UserData, UserName, PostContent, Text } from './styles';

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
      * Systems Analysis and Development, blending 
      * skills in React, Next.js, Python,
      * React Native, Express, and AdonisJS. 
      * Experienced in IT support, advanced
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
        
            <Text> // Languages and technologies I have learned</Text>
            <Post>
                <User>
                    <UserTop>
                      <Profile src='/profile.jpg' />
                      <UserData>
                        <UserName>@davimcostaa</UserName>
                        <span>Created 5 months ago</span>
                      </UserData>
                    </UserTop>
               </User>
               
               <PostContent>
                  <TechnologyCheck icon='html' name='HTML' />
                  <TechnologyCheck icon='css' name='CSS' />
                  <TechnologyCheck icon='javascript' name='JavaScript' />
                  <TechnologyCheck icon='react' name='React' />
                  <TechnologyCheck icon='typescript' name='TypeScript' />
                  <TechnologyCheck icon='next' name='Next.js' />
                  <TechnologyCheck icon='adonis' name='AdonisJS' />
                  <TechnologyCheck icon='selenium' name='Selenium' />
                  <TechnologyCheck icon='python' name='Python' />
                  <TechnologyCheck icon='sql' name='SQL' />
                  <TechnologyCheck icon='express' name='Express' />
               </PostContent>
               
            </Post>
        </TechnologiesSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe