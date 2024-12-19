"use client"
import Footer from '@/src/components/Footer';
import Input from '@/src/components/Input';
import Menu from '@/src/components/Menu'
import MenuMobile from '@/src/components/MenuMobile';
import React, { useState, FormEvent, useRef, RefObject } from 'react'
import { Body, Folders, FolderName, Folder, PrimeiraParte, NomePasta, SubPasta, DivContact, FolterContact, Contact, ContactText, CodeSection, FileName, Code, Numbers, TechnologiesSection, Post, User, UserTop, Profile, UserData, UserName, PostContent, Text, Button, Message, OrangeText, Error, ThanksSection } from './styles';
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import Loader from '@/src/components/Loader';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslations } from 'next-intl';

const ContactMe = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [emailFolder, setEmailOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
  });  
  const captchaRef: RefObject<ReCAPTCHA> = useRef(null);

  const t = useTranslations("Contact");

  let dataAtual = new Date();
  let nomeDoDia = dataAtual.toLocaleDateString('en', { weekday: 'long' });
  let dia = dataAtual.getDate();
  let nomeDoMes = dataAtual.toLocaleDateString('en', { month: 'long' });
  let emailMessage = {}
  let token = ''

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const siteKey = process.env.NEXT_PUBLIC_SITE_KEY;

  let schema = yup.object().shape({
    name: yup.string().required(t("nameError")).min(3, t("nameValidError")),
    email: yup.string().email(t("emailValidError")).required(t("emailError")),
    message: yup.string().required(t("messageError")).min(10, t("messageValidError"))
  });


  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

      token = captchaRef.current?.getValue() ?? '';
      captchaRef.current?.reset();

    emailMessage = {
      name,
      email,
      message
    };
  
    schema
    .validate(emailMessage, { abortEarly: false })
    .then(() => {

        setLoading(true)

        if (token) {
        setErrors({name: '',
        email: '',
        message: '',
        captcha: ''})

        const params = {
          emailMessage,
          'g-recaptcha-response': token,
        };
        
        if (serviceId && templateId) {
        emailjs.send(serviceId, templateId, params, publicKey)
            .then(function(response) {
              console.log(response.status, response.text)
              response.status == 200 ? setLoading(false) : null;
              setEmail('');
              setName('');
              setMessage('');
              token = '';
              setEmailSent(true);
          }, function(error) {
              console.log('FAILED...', error);
          });
        }
        } 
  })
    .catch((err) => {
      const errorsCopy = { ...errors };
      err.errors?.forEach((error: string) => {
        if (error.includes('name') || error.includes('nome') ) {
          errorsCopy.name = error;
        } else if (error.includes('email')) {
          errorsCopy.email = error;
        } else {
          errorsCopy.message = error;
        }
      });

      if (!token) {
        errorsCopy.captcha = t("captchaError")
      }
      
      setErrors(errorsCopy);
  });
  }

  return (
    <>
      <Menu setMenuIsVisible={setMenuIsVisible} />
      <MenuMobile $menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />

      <Body>
        <Folders>
          <div>

            <FolderName>
                <img src='/arrow-down.png' />
                {t("folderTitle")}
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
                          {t("subFolderTitle")}
                        </SubPasta>
                    </div>
                  ) : null}
                </Folder>
              </div>
            </div>
            <DivContact $isOpen={contactIsOpen} onClick={() => setContactIsOpen(!contactIsOpen)}>
                  <FolterContact>
                      <img src='/arrow-down.png' />
                      {t("folderTitle")}
                  </FolterContact>

                  <Contact $isOpen={contactIsOpen}>
                    <img src='/mail-icon.png' />
                    <ContactText> davim.costa@outlook.com</ContactText>
                  </Contact>

                  <Contact $isOpen={contactIsOpen}>
                    <img src='/phone-icon.png' />
                    <ContactText> (61) 99391-5306</ContactText>
                  </Contact>
            </DivContact>

        </Folders>

        <CodeSection>
          
            <FileName>
                {t("folderTitle")}
                <img src='/close-icon.png' />
            </FileName>
            <Code>
              {
               loading 
                ? <Loader /> 
                : 
                emailSent ? 
                <ThanksSection>
                  <h3>{t("thank")}</h3>
                  <p>{t("messageEmailSent")}</p>
                </ThanksSection>
                :
                <form onSubmit={sendEmail}>
                <Input label={t("inputName")} value={name} onChange={(e) => setName(e.target.value)} />
                <Error>{errors.name}</Error>
                <Input label='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Error>{errors.email}</Error>
                <Input label={t("inputMessage")} value={message} size='big' onChange={(e) => setMessage(e.target.value)} />
                <Error>{errors.message}</Error>
                <br />
                <ReCAPTCHA
                  sitekey={siteKey || ''}
                  theme='dark'
                  ref={captchaRef}
                  hl={t("lang") == 'en' ? 'en' : 'pt-BR'}
                />
                <Error>{errors.captcha}</Error>
                <br />
                <Button type='submit'>
                  submit-message
                </Button>
              </form>       
              }
                
            </Code>
            
        </CodeSection>

        <TechnologiesSection>
          <div>
              <Message>const <span>button</span> = <span>document.querySelector('<OrangeText>#textBtn</OrangeText>');</span></Message>
              <Message>const <span>message</span> = 
                <span> &#123; <br />
                  &nbsp;&nbsp;name: <OrangeText>"{name}",</OrangeText> <br />
                  &nbsp;&nbsp;email: <OrangeText>"{email}",</OrangeText> <br />
                  &nbsp;&nbsp;message: <OrangeText>"{message}",</OrangeText> <br />
                  &nbsp;&nbsp;date: <OrangeText>{nomeDoDia}, {dia} {nomeDoMes} </OrangeText> <br />
                  &#125;  
                </span>
              </Message>
          </div>

              <Message>
                  <span>
                      button.addEventListener('<OrangeText>click</OrangeText>', () =&#62; &#123;
                      <br/>
                      &nbsp;&nbsp;form.send(message);
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

export default ContactMe