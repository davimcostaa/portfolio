"use client"
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import TechnologyCheck from '@/src/components/TechnologyCheck';
import React, { useState } from 'react'
import { Body, Folders, FolderName, CodeSection, FileName, Code, Filters } from './styles';

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
                <TechnologyCheck icon='HTML' name='HTML' changeIcon />
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
              
            </Code>
            
        </CodeSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe