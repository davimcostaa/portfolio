"use client"
import Footer from '@/src/components/Footer';
import Input from '@/src/components/Input';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import React, { useState, FormEvent } from 'react'
import { Body, Folders, FolderName, Folder, PrimeiraParte, NomePasta, SubPasta, DivContact, FolterContact, Contact, ContactText, CodeSection, FileName, Code, Numbers, TechnologiesSection, Post, User, UserTop, Profile, UserData, UserName, PostContent, Text, Button, Message, OrangeText } from './styles';
import * as yup from "yup";

const AboutMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [emailFolder, setEmailOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [erros, setErros] = useState([]);
  const [numberOfLines, setNumberOfLines] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  let dataAtual = new Date();
  let nomeDoDia = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' });
  let dia = dataAtual.getDate();
  let nomeDoMes = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });
  let emailMessage = {}

  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required()
  });

  const handleClick = (text: string, fileName: string) => {
    contarLinhas(text);
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

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    emailMessage = {
      name,
      email,
      message
    };
  
    schema
    .validate(emailMessage, { abortEarly: false })
    .then((responseData) => {
      console.log("no validation errors");
      console.log(responseData);
  })
    .catch((err) => {
      console.log(err);
      console.log(err.name); // ValidationError
      console.log(err.errors);
      setErros(err.errors)

  });
  }


  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
          <div>

            <FolderName>
                <img src='/arrow-down.png' />
                contacts
            </FolderName>

              <div>
              <Folder onClick={() => setEmailOpen(!emailFolder)}>
                  <PrimeiraParte>
                    {emailFolder ? <img src={`/arrow-open.png`} /> : <img src={`/arrow-right.png`} />}

                    <NomePasta>
                      <img src='/pink-icon.png' />
                      email
                    </NomePasta>
                  </PrimeiraParte>

                  {emailFolder ? (
                    <div onClick={(e) => { e.stopPropagation();}}>
                        <SubPasta>
                          <img src='/file.png' />
                          write
                        </SubPasta>
                    </div>
                  ) : null}
                </Folder>
              </div>
            </div>
            <DivContact isOpen={contactIsOpen} onClick={() => setContactIsOpen(!contactIsOpen)}>
                  <FolterContact>
                      <img src='/arrow-down.png' />
                      contacts
                  </FolterContact>

                  <Contact isOpen={contactIsOpen}>
                    <img src='/mail-icon.png' />
                    <ContactText> davim.costa@outlook.com</ContactText>
                  </Contact>

                  <Contact isOpen={contactIsOpen}>
                    <img src='/phone-icon.png' />
                    <ContactText> (61) 99391-5306</ContactText>
                  </Contact>
            </DivContact>

        </Folders>

        <CodeSection>
          
            <FileName>
                contact
                <img src='/close-icon.png' />
            </FileName>


            <Code>
              <form onSubmit={sendEmail}>
                <Input label='name:' onChange={(e) => setName(e.target.value)} />
                <span>{erros[0]}</span>
                <Input label='email:' onChange={(e) => setEmail(e.target.value)} />
                <span>{erros[1]}</span>
                <Input label='message:' size='big' onChange={(e) => setMessage(e.target.value)} />
                <span>{erros[2]}</span>
                <Button type='submit'>
                  submit-message
                </Button>
              </form>

                    
            </Code>
            
        </CodeSection>

        <TechnologiesSection>
          <div>
              <Message>const <span>button</span> = <span>document.querySelector('<OrangeText>#textBtn</OrangeText>');</span></Message>
              <Message>const <span>message</span> = 
                <span> &#123; <br />
                  &nbsp;name: <OrangeText>"{name}",</OrangeText> <br />
                  &nbsp;email: <OrangeText>"{email}",</OrangeText> <br />
                  &nbsp;message: <OrangeText>"{message}",</OrangeText> <br />
                  &nbsp;date: <OrangeText>{nomeDoDia}, {dia} {nomeDoMes} </OrangeText> <br />
                  &#125;  
                </span>
              </Message>
          </div>


              <Message>
                  <span>
                      button.addEventListener('<OrangeText>click</OrangeText>', () =&#62; &#123;
                      <br/>
                      &nbsp;form.send(message);
                      <br /> 
                      &#125;);
                  </span>
              </Message>
            
        </TechnologiesSection>

      </Body>

      <Footer />
    </>
  )
}

export default AboutMe