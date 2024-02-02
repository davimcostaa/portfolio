import styled, { css } from "styled-components"

interface FolterContactProps {
    isOpen: boolean;
  }

export const Body = styled.div`
    padding-top: 56.191px;
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
    justify-content: space-between;
`

export const FolderName = styled.div`
    cursor: pointer;
    height: 41px;
    width: 100%;
    border-bottom: 0.5px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    padding-left: 23px;
    margin-bottom: 16px;
`

export const FileName = styled.div`
    cursor: pointer;
    height: 41px;
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
      width: 630px;
      max-width: 674px;
      border-right: 0.5px solid #1E2D3D;    
      @media screen and (min-width: 1500px) {
        width: 760px;
      }
`

export const Code = styled.section`
    display: flex;
    border-top: 0.5px solid #1E2D3D;
    overflow: auto;
    @media screen and (max-width: 1450px) {
      scrollbar-width: thin;   
      max-height: 470px;
      overflow-y: scroll;
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

export const TechnologiesSection = styled.section`
      margin-top: 40.6px;
      border-top: 0.5px solid #1E2D3D;
      flex: 1;
      width: 740px;
`

export const Post = styled.div`  
      width: 664px;
      margin: 30px;
`

export const User = styled.div`

`

export const UserTop = styled.div`
    display: flex;
    gap: 10.5px;
`

export const UserData = styled.div`
    display: flex;
    flex-direction: column;

    > span {
      color: #607B96;
      font-size: 12px;
    }
`

export const UserName = styled.p`
    color: #5565E8;
    font-size: 14px;
`

export const Profile = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 36px;
`

export const PostContent = styled.div`
    width: 65%;
    height: 215.647px;
    border-radius: 15px;
    border: 1px solid #1E2D3D;
    background: #011221;
    margin-top: 14px;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    padding: 29px;

    @media screen and (min-width: 1500px) {
      width: 100%;
    }
`