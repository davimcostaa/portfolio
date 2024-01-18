"use client"
import Card from '@/src/components/Card';
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import TechnologyCheck from '@/src/components/TechnologyCheck';
import React, { useState } from 'react'
import { Body, Folders, FolderName, CodeSection, FileName, Code, Filters, Projects } from './styles';
import projects from '../../data/projects.json'

const AboutMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
          <div>

            <FolderName>
                <img src='/arrow-down.png' />
                projects
            </FolderName>

            <Filters>
                <TechnologyCheck icon='html' name='HTML' changeIcon />
                <TechnologyCheck icon='javascript' name='JavaScript' changeIcon />
                <TechnologyCheck icon='react' name='React' changeIcon />
                <TechnologyCheck icon='python' name='Python' changeIcon />
                <TechnologyCheck icon='next' name='Next' changeIcon />
                <TechnologyCheck icon='adonis' name='AdonisJS' changeIcon />
            </Filters>
  
          </div>


        </Folders>

        <CodeSection>
          
            <FileName>
                React, Vue
                <img src='/close-icon.png' />
            </FileName>

            <Code>
              <Projects>
                {projects.map((project, index) => (
                  <Card 
                    nomeDoProjeto={project.nomeDoProjeto}
                    imagem={project.imagem}
                    descricao={project.descricao}
                    tecnologia={project.tecnologia}
                    link={project.link}
                    key={index}
                    index={index + 1}
                  />
                ))}
              </Projects>
            </Code>
            
        </CodeSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe