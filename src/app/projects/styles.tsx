import styled, { css } from "styled-components"

interface FolterContactProps {
    isOpen: boolean;
  }

export const Body = styled.div`
    padding-top: 56.191px;
    box-sizing: border-box;
    display: flex;
    height: 100vh;
`

export const Folders = styled.section`
    color: #FFF;
    height: 100vh;
    width: 244px;
    display: flex;
    flex-direction: column;
    border-right: 0.5px solid #1E2D3D;
    font-size: 16px;
    font-weight: 400;

    @media screen and (max-width: 1674px) {
      width: 221px;
    }
`

export const FolderName = styled.div`
    cursor: pointer;
    height: 40.6px;
    width: 100%;
    border-bottom: 0.5px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    padding-left: 23px;
`

export const FileName = styled.div`
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

export const Folder = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 23px;
    gap: 13px;
    cursor: pointer;
    margin-bottom: 15.8px;
`

export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 22px;
`

export const NomePasta = styled.div`
    display: flex;
    align-items: center;
    gap: 8.92px;
`

export const SubPasta = styled.div`
    display: flex;
    align-items: center;
    gap: 8.92px;
    padding-left: 40px;
`

export const PrimeiraParte = styled.div`
    display: flex;
    width: 100%;
    gap: 13px;
    align-items: center;

    > img {

    }
`

export const FilterTechnology = styled.div`
  display: flex;
  flex-direction: column;
`

export const DivContact = styled.div<FolterContactProps>`
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

export const FolterContact = styled.div`
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

export const Contact = styled.div<FolterContactProps>`
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

export const ContactText = styled.span`
      color: #607B96;
      font-size: 14.5px;
      font-weight: 400;
`;

export const CodeSection = styled.section`
      width: calc(100vw - 244px);
      @media screen and (max-width: 1674px) {
        width: calc(100vw - 221px);
      }
`

export const Code = styled.section`
    padding: 15px 0px 15px 0px;
    display: flex;
    border-top: 0.5px solid #1E2D3D;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      background-color: #607B96;
    }
  
    &::-webkit-scrollbar-track {
      background-color: #011627;
    }
`

export const Projects = styled.section`
    width: 90%;
    display: flex;
    max-height: 75vh;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`

export const Numbers = styled.div`
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

export const Text = styled.div`
      width: 500px;
      margin-top: 17.8px;
      margin-left: 40px;
      color: #607B96;
      line-height: 150%; 

      > p {
        padding-left: 10px;
      }

      @media screen and (max-width: 1400px) {
        margin-left: 20px;
        margin-right: 20px;
        > p {
          padding-left: 10px;
        }
      }
    
`

