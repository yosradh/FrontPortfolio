import React from 'react'
import './FooterStyle.css';
import { useTranslation } from 'react-i18next';


export default function Footer() {
  const { t }= useTranslation();
  const currentDate =  new Date();
  const currentYear = currentDate.getFullYear();


  return (
    <footer>
      <p>
        {currentYear} {t('footer.droits')}
      </p>
    </footer>
  )
}
