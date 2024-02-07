import React, { useState,useEffect } from 'react';
import './HeaderStyle.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export default function Header() {
  const location = useLocation();
  
  const { t } = useTranslation();

  const MenuDiv = [
    {link:t('header.Accueil'), to :"/"},
    {link:t('header.Compétences'), to :"/competances"},
    {link:t('header.Projets'), to :"/project"},
    {link:t('header.Outils'), to :"/tools"},
    {link:t('header.Contact'), to :"/contact"}
  ]

  const [MoodLight, setMoodLight] = useState(localStorage.getItem('currentMode') || 'dark');
  const [Langue,  setLangue] = useState(localStorage.getItem('Lng') || 'en');
  
  useEffect(() => {
    const activeIndex = MenuDiv.findIndex(item => item.to === location.pathname);    // Trouver l'index de l'élément actif basé sur le chemin actuel (location.pathname)
    setActiveItem(activeIndex);
  }, [location.pathname]); 

  useEffect(()=>{
    if (MoodLight === "light"){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  },[MoodLight])

  const changeMood = () => {
    const newMode = MoodLight === "light" ? "dark" : "light";
    localStorage.setItem('currentMode', newMode);
    setMoodLight(newMode);
  }

  const ChangeLangue = (Lng) => {
    if (Lng === "fr") {
      setLangue('fr');
      localStorage.setItem('Lng', 'fr'); 
    } else {
      setLangue('en');
      localStorage.setItem('Lng', 'en'); 
    }
    window.location.reload();
  };

  const [activeItem, setActiveItem] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const ShowMenu = () => {
    setToggle(true);
  };

  const FermerModal = () => {
    setToggle(false);
  };


  return (
    <header className="MoodLight" style={{display:'flex'}}>
      <div className="MenuDiv">
        <button className='Menu icon-menu' onClick={ShowMenu} />
      </div>

      <div className='ImgParty'>
        <Link to="/"><img src='./Maher.png' className='Avatar' alt="" /></Link>
      </div>

      <nav className="navbar">
        <ul className='flex'>
        {MenuDiv.map((item, index) => (
            <li key={index} className={index === activeItem ? 'active' : ''} onClick={() => handleItemClick(index)}>
              <Link to={item.to}>{item.link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="Mood" onClick={changeMood}>
        <button
          onClick={() => {
            // Send value to LS
            localStorage.setItem("currentMode",MoodLight === "dark"? "light" : "dark");
            // get value from LS
            setMoodLight(localStorage.getItem("currentMode"));
          }}
          className="mode flex">
            
          {MoodLight === "dark" ? (
            <span className="icon-sun"> </span>
          ) : (
            <span className="icon-moon-stars"> </span>
          )}
        </button>
      </div>

      <select id="Langue" name="Langue" className="Langue" value={Langue} onChange={(e) => ChangeLangue(e.target.value)}>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>

      {toggle && (
        <div className="fixed">
          <div className="modal">
            <div className='headerModal'>
              <p className="navigationTitle">{t('header.Navigation')}</p>
              <button className="closeBtn icon-close" onClick={FermerModal} />
            </div>
            
            <ul className='UlModal'>
              {MenuDiv.map((item, index) => (
                <>
                  <li key={index} className={index === activeItem ? 'active' : ''} onClick={() => handleItemClick(index)}>
                    <Link to={item.to}>{item.link}</Link>
                  </li>
                  {index !== 4 && <div className="dividerModal" />}
                </>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
