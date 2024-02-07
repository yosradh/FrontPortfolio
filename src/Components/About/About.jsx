import React from 'react'
import './AboutStyle.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } =useTranslation();
  return (
    <div>
        <h1 className='Titre'>{t('about.ABOUTME')}</h1>
        <p className='Description'>{t('about.description')}</p>
    
        <div className='iconsApropos'>
            <div className="MailContact icon-mail " />
            <div className="icon-twitter"/>
            <div className="icon-linkedin1"/>
            <div className="icon-github githubHerro"/>
        </div>

    </div>
  )
}
