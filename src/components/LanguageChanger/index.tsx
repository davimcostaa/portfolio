import { useRouter } from '@/src/navigation'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Props {
    $pageAccessed: string;
}

const Changer = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
    color: #607B96;
    gap: 5px;


    > span {
        &:hover {
            color: #43D9AD;
            cursor: default; 
        }
    }

    @media (max-width: 640px) {
        margin-bottom: 100px;
      }
`

const Portuguese = styled.p<Props>`
    color: ${(props) => (props.$pageAccessed == 'PT' ? '#43D9AD' : '')};

    &:hover {
        color: #43D9AD;
        cursor: pointer; 
    }

`

const English = styled.p<Props>`

    color: ${(props) => (props.$pageAccessed == 'EN' ? '#43D9AD' : '')};

    &:hover {
        color: #43D9AD;
        cursor: pointer; 
    }

`

const LanguageChanger = () => {

const [pageAccessed, setPageAccessed] = useState('');
const router = useRouter();
const pathname = usePathname();

useEffect(() => {
    pathname == '/pt' ? setPageAccessed('PT') : setPageAccessed('EN') 
}, [])

return (
    <Changer>
        <Portuguese 
            onClick={() => router.push('/', {locale: 'pt'})}
            $pageAccessed={pageAccessed}>
                PT
        </Portuguese>
         <span>----</span> 
        <English 
            onClick={() => router.push('/', {locale: 'en'})}
            $pageAccessed={pageAccessed}>
                EN
        </English>
    </Changer>
  )
}

export default LanguageChanger