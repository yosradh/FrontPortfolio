import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import './ContactStyle.css';
import Lottie from "lottie-react";
import email from "./email";
import { useTranslation } from 'react-i18next';


export default function Contact() {
    
  const { t }= useTranslation();
  const style = {height: '25em',marginTop:'-4em'};

  const [state, handleSubmit] = useForm("xpzvpywq");


  return (
    <section className="containerContact">

        <span className="sectionTitle">          
          <div className="icon-mail"/>{t('contact.contactTitle')}
        </span>

        <p className="paragraphe">{t('contact.subtitle')}</p>

        <div className="SectionB">          
          <form className="form" onSubmit={handleSubmit} > 

          <div className="NomSection">
            <label htmlFor="nomPrenom">{t('contact.NomPrénom')}</label>
            <input required type="text" id="nomPrenom" placeholder={t('contact.PlaceholderNom')} name="Nom" />
            <ValidationError prefix="NomPrenom" field="nomPrenom"  errors={state.errors} />
          </div>


            <div className="ObjectSection">
              <label htmlFor="ObjectEmail" >{t('contact.ObjectEmail')}</label>
              <input required type="text"  id="ObjectEmail" placeholder={t('contact.PlaceholderObject')} name="ObjectEmail" />
              <ValidationError prefix="ObjectEmail" field="ObjectEmail"  errors={state.errors} />
            </div>

            <div className="emailSection">
              <label htmlFor="email" >{t('contact.EmailAdresse')}</label>
              <input required type="email" name="email" id="email" placeholder={t('contact.PlaceholderEmail')} />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            
            <div className="AdresseSection">
              <label htmlFor="message">{t('contact.Yourmessage')}</label>
              <textarea required name="message"  id ="message" placeholder={t('contact.PlaceholderMessage')} />
              <ValidationError prefix="message" field="message" errors={state.errors} />
            </div>

            <div className="SubmitSection">
              <div />
              <button id="BtnSubmit" type="submit" disabled={state.submitting}>
                {state.submitting ? t('contact.Submitting') : t('contact.Submit')}
              </button>
            </div>

            {state.succeeded && (
            <p className="messageSucces">              
              {t('contact.Your message has been sent successfully')}
            </p>
          )}
        </form>

          <Lottie className='AnimContact' style={style} animationData={email}/>   
        </div>

        <p className="ChampObligatoire">{t('contact.Champ obligatoire')}</p>
      
    </section>
  )
}
