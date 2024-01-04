import React from 'react';
import styled from 'styled-components';

interface Props {
  titulo: string;
  nome: string;
  url: string;
}

const Titulo = styled.p`
  color: #607B96;
  font-size: 16px;
  font-weight: 450;
  margin-bottom: 9px;
`;

const Variavel = styled.p`
  color: #4D5BCE;
  font-size: 16px;
  font-weight: 500;
`;

const Nome = styled.span`
  color: #43D9AD;
`;

const Link = styled.span`
  color: #E99287;
`;

const Url = styled.a`
  color: inherit; 
  text-decoration: none;
  cursor: pointer;
`;

const ContactVariables = ({ titulo, url, nome }: Props) => {
  return (
    <div>
      <Titulo>// {titulo}</Titulo>
      <Variavel>
        const <Nome>{nome}</Nome> = <Link>"<Url href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </Url>"</Link>
      </Variavel>
    </div>
  );
};

export default ContactVariables;
