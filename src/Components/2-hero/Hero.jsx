import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroStyle.css';
import Lottie from "lottie-react";
import anim from "./anim";

import { useTranslation } from 'react-i18next';

export default function Hero() {


  const { t }= useTranslation();
  const navigate = useNavigate();

  const style = {height: '28em',marginTop: '-4em'};

  return (
    <section className='container'>
      <div className='LeftParty'>
        <h1 className='title'>{t('hero.Bonjour')} <p className="Nom">{t('hero.Nom')}</p><br />
          {t('hero.title')}<br />
        </h1>

        <p className='sub-title'>{t('hero.subTitle')} <span className="VoirPlusBtn" onClick={() => navigate('/about')}>{t('hero.seeMore')}</span> </p>

        <span className="GroupContact">
          <img src="./anim.gif" alt="" className="AnimBtn" />
          <p className="BtnConatct" onClick={() => navigate('/contact')}>{t('hero.contactMe')} </p>
        </span>
      </div>

      <Lottie style={style} animationData={anim} />
    </section>
  )
}
