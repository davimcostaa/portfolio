"use client"
import Card from '@/src/components/Card';
import Footer from '@/src/components/Footer';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import TechnologyCheck from '@/src/components/TechnologyCheck';
import { useEffect, useState } from 'react'
import { Body, Folders, FolderName, CodeSection, FileName, Code, Filters, Projects } from './styles';
import projectsData from '../../../data/projetos.json';
import projectsEnglishData from '../../../data/projects.json';
import { useUpdateEffect } from 'react-use';
import { useTranslations } from 'next-intl';

const ProjectsPage = () => {

  interface Project {
    projectName: string;
    image: string;
    description: string;
    technology: string;
    link: string;
  }

  const projects: Project[] = projectsData;
  const projectsEnglish: Project[] = projectsEnglishData;


  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [projectsLista, setProjectsLista] = useState<Project[] | null>();
  const [repeated, setRepeated] = useState<string[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [auxFilters, setAuxFilters] = useState<string[]>([]);

  const t = useTranslations("Projects");

  useEffect(() => {
    if (t("projects") === 'pt') {
      setProjectsLista(projects)
    } else {
      setProjectsLista(projectsEnglish)
    }
  }, [])

  function filterList(technology: string): void {
    // estado auxiliar para evitar o loop infinito
    setAuxFilters(prevFilters => {
      const newFilters = [...prevFilters, technology];
      return newFilters; 
    });

    setFilters(prevFilters => {
      const newFilters = [...prevFilters, technology];
      return newFilters; 
    });
  }

  useUpdateEffect(() => {

    // verificar se o filtro está sendo clicado de novo
    const uniqueFilters = filters.filter(function(elemento, i) {
        if(filters.indexOf(elemento) !== i) {
            repeated.push(elemento)
        }
        return filters.indexOf(elemento) == i;
    })

    // verificar se os filtros estão no array de repetidos para filtrar ou tirar o filtro
    const filteredProjects = uniqueFilters.flatMap((filter) => {
      if (t("projects") === "pt") {
        return projects.filter((project) => {
          if (repeated.includes(filter)) {
            return false;
          }
          return project.technology === filter;
        });
      } else {
        return projectsEnglish.filter((project) => {
          if (repeated.includes(filter)) {
            return false;
          }
          return project.technology === filter;
        });
      }
    });
    
    if (filteredProjects.length != 0) {
      setProjectsLista(filteredProjects);
    } else {
      if (t("projects") === 'pt') {
        setProjectsLista(projects)
      } 
      setProjectsLista(projectsEnglish)
      setFilters([]);
      setRepeated([]);
    }

    // checar se o estado repeated possui itens duplicados
    
  }, [auxFilters]);

  
  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile $menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
          <div>

            <FolderName>
                <img src='/arrow-down.png' />
                projects
            </FolderName>

            <Filters>
                <TechnologyCheck icon='html' name='HTML' changeIcon onClick={() => filterList('HTML')} />
                <TechnologyCheck icon='javascript' name='JavaScript' changeIcon onClick={() => filterList('Javascript')} />
                <TechnologyCheck icon='react' name='React' changeIcon onClick={() => filterList('React')} />
                <TechnologyCheck icon='next' name='Next' changeIcon onClick={() => filterList('Next')} />
                <TechnologyCheck icon='python' name='Python' changeIcon onClick={() => filterList('Python')} />
                <TechnologyCheck icon='adonis' name='AdonisJS' changeIcon onClick={() => filterList('Adonis')}/>
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
                {projectsLista?.map((project, index) => (
                  <Card 
                    nomeDoProjeto={project.projectName}
                    imagem={project.image}
                    descricao={project.description}
                    tecnologia={project.technology}
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

export default ProjectsPage