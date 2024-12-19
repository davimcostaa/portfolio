"use client"
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import TechnologyCheck from '@/src/components/TechnologyCheck';
import React, { useState } from 'react'
import { Body, Folders, FolderName, Folder, PrimeiraParte, NomePasta, SubPasta, DivContact, FolterContact, Contact, ContactText, CodeSection, FileName, Code, Numbers, TechnologiesSection, Post, User, UserTop, Profile, UserData, UserName, PostContent, Text } from './styles';
import { useTranslations } from 'next-intl';

const AboutMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [bioIsOpen, setBioIsOpen] = useState(false);
  const [educationIsOpen, setEducationIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const texts: {
    [key: string]: string;
  } = {
    'about-me': `
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
    `,
    'sobre-mim': `
    * Sobre mim
    * Profissional de 20 anos com formação técnica 
    * em TI e graduação em Análise e Desenvolvimento 
    * de Sistemas, mesclando habilidades em React, 
    * Next.js, Python, React Native, Express e 
    * AdonisJS. Experiência em suporte de TI, 
    * proficiência avançada  em inglês e especialização 
    * em automação e processamento de dados com Python, 
    * além da criação de aplicações com React.
    `,
    'experience': `
        ** IT Intern
        * National Indigenous People Foundation
        * 
        * July 2022 – December 2023.
            ---- Python script coding for data processing.
            ---- Python script coding for automation.
            ---- Development of solutions using JavaScript.
            ---- Creation of queries for Postgres database.
        * 
        * 
      *          
        ** Fullstack developer
        * Freelancer
        * 
        * March 2024 – December 2024.
            ---- Development of web interfaces with React.
            ---- Version control with Git.
            ---- API integration.
            ---- API development with Express.

            Delivered projects:
                ---- Banking management system for affiliate accounts managed by administrator accounts.
                ---- Highway control system.
        *      
       *         
       *          
    `,
    'experiencia': `
        ** Estágio em TI
        * Fundação Nacional do Índio
        * 
        * Julho de 2022 – Dezembro de 2023.
            ---- Codificação de scripts Python para processamento de dados.
            ---- Codificação de scripts Python para automação.
            ---- Desenvolvimento de soluções utilizando JS.
            ---- Criação de querys para banco de dados Postgres.
        * 
        *          
       *          
        ** Desenvolvedor full-stack
        * Freelancer
        * 
        * Março de 2024 – Dezembro de 2024.
            ---- Desenvolvimento de interfaces web com React.
            ---- Versionamento com Git. 
            ---- Integração com API. 
            ---- Desenvolvimento de APIs com Express.

            Projetos entregues: 
                ---- Sistema de gerenciamento bancário para contas de afiliados por contas 
                administradoras  
                ---- Sistema de Controle Rodoviário.
        *      
       *          
    `,
    'university': `
        * University
        *
        * Graduated in Superior in Analysis and 
        * Development of Systems by the 
        * Institute of Superior Education of Brasilia.
        * 
        * Finished in December 2023.
        * 
        * Awarded as the best student of the course 
        * in the class of the 2nd semester of 2023.
    `,

    'universidade': `
    * Universidade
    *
    * Graduado em Superior de Análise /n
    * e Desenvolvimento de Sistemas pelo
    * Instituto de Educação Superior de Brasília.
    * 
    * Concluído em dezembro de 2023.
    * 
    * Laureado como melhor aluno do curso
    * da turma do 2° semestre de 2023.
`,
  };
  
  const t = useTranslations("About");
  
  const [openText, setOpenText] = useState(texts[t("about-me")]);
  const [fileName, setFileName] = useState(t("bioSubFolder"));

  const handleClick = (text: string, fileName: string) => {
    setOpenText(texts[text]);
    setFileName(fileName);
    contarLinhas(texts[text]);
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
      <MenuMobile $menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
          <div>

            <FolderName>
                <img src='/arrow-down.png' />
                {t("folderTitle")}
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
                    <div onClick={(e) => { e.stopPropagation();  handleClick(t("about-me"), t("bioSubFolder"))}}>
                        <SubPasta>
                          <img src='/file.png' />
                          {t("bioSubFolder")}
                        </SubPasta>
                    </div>
                  ) : null}

                  {bioIsOpen ? (
                    <div onClick={(e) => { e.stopPropagation();  handleClick(t("experience"), t("bioSubFolder2"))}}>
                        <SubPasta>
                          <img src='/file.png' />
                          {t("bioSubFolder2")}
                        </SubPasta>
                    </div>
                  ) : null}
                </Folder>

                 

                  <Folder onClick={() => setEducationIsOpen(!educationIsOpen)}>

                    <PrimeiraParte>
                      {
                      educationIsOpen ? <img src={`/arrow-open.png`} /> : <img src={`/arrow-right.png`} />
                      }

                      <NomePasta >
                        <img src='/blue-icon.png' />
                        {t("educationFolder")}
                      </NomePasta>
                      </PrimeiraParte>
                    
                    {educationIsOpen ? (
                      <div onClick={(e) => { e.stopPropagation();  handleClick(t("educationSubFolder"), t("educationSubFolder"))}}>
                        <SubPasta>
                          <img src='/file.png' />
                          {t("educationSubFolder")}
                        </SubPasta>
                      </div>
                    ) : null}

                      
                  </Folder>
              </div>
            </div>
            <DivContact $isOpen={contactIsOpen} onClick={() => setContactIsOpen(!contactIsOpen)}>
                  <FolterContact>
                      <img src='/arrow-down.png' />
                      {t("contact")}
                  </FolterContact>

                  <Contact $isOpen={contactIsOpen}>
                    <img src='/mail-icon.png' />
                    <ContactText> davim.costa@outlook.com</ContactText>
                  </Contact>

                  <Contact $isOpen={contactIsOpen}>
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
                    <span key={line}>{line}</span>
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
        
            <Text> // {t("technologiesTitle")}</Text>
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
                  <TechnologyCheck icon='postgres' name='Postgres' />
                  <TechnologyCheck icon='java' name='Java' />
                  <TechnologyCheck icon='spring' name='Spring' />
               </PostContent>
               
            </Post>
        </TechnologiesSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe