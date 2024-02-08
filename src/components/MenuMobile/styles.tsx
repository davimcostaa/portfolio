import styled, { css } from "styled-components";

interface ContainerProps {
  isvisible: string;
}

export const Container = styled.section<ContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;

  > img {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

   ${({isvisible}) => isvisible == 'true' && css`
        opacity: 1; 
        pointer-events: auto;
   `}

`;
