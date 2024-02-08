import styled from "styled-components"
import Button from "./Button"

const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    gap: 14.79px;
`

const Title = styled.div`
    display: flex;
    gap: 12px;

    > h3 {
      font-size: 16px;
      color: #5565E8;
    }

    > p {
      font-size: 16px;
      color: #607B96;
    }
`

const ProjectCard = styled.div`
    width: 370.348px;
    height: 314.817px;
    background: #011221;
    border-radius: 15px;
    border: 1px solid #1E2D3D;

    @media (max-width: 640px) {
      width: 291px;
      height: 328px;
    }
`

const Info = styled.div`
    border-radius: 15px;
    background: #011221;
    position: relative;
    > div {
      background: #011221;
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 21px;
    }
`

const Icon = styled.img`
    background: none;
    position: absolute; 
    right: 17px;
    top: 17px;
`;


const CardImage = styled.img`
    position: relative;
    width: 100%;
    height: 145.44px;
    border-radius: 12px 12px 0px 0px;
`

const CardText = styled.p`
    background: #011221;
    color: #607B96;
`

interface PropsCard {
  nomeDoProjeto: string,
  imagem: string,
  descricao: string,
  tecnologia: string,
  link: string,
  index: number
}

const Card = ({nomeDoProjeto, imagem, descricao, tecnologia, link, index}: PropsCard) => {
  return (
    <Project>
    <Title>
        <h3>Project {index}</h3>
        <p>// _{nomeDoProjeto}</p>
    </Title>
    <ProjectCard>
      <Info>
        <CardImage src={`/projects/images/${imagem}`} />
        <Icon src={`/projects/icons/${tecnologia}.png`} />
        <div>
          <CardText> {descricao} </CardText> 
          <Button url={link} />
        </div>
      </Info>
    </ProjectCard>
    </Project>
  )
}

export default Card