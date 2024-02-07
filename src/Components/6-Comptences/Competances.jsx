import { useTranslation } from 'react-i18next';
import './CompetanceStyle.css';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useGetQuerryByNameQuery } from '../../Redux/QuerryAPI';

export default function Competances() {

  const { t } = useTranslation();

  // API pour languages 
  const { data: dataLng, error: errorLng, isLoading: isLoadingLng } = useGetQuerryByNameQuery('languages?populate=*');

  // API pour experiences 
  const { data: dataExp, error: errorExp, isLoading: isLoadingExp } = useGetQuerryByNameQuery('experiences?populate=*');


  return (
    <div className="competences-container">
      <div className="left-section">
        <h1 className="titreComp">{t('competances.titre1')}</h1>
        <p className="SubComp">
          {t('competances.description')}
        </p>
      </div>


      <div className="right-section">
        <div className="skills-container">
          <ul className="skills-list">
            {errorLng ? (
              <>Oh no, there was an error</>
            ) : isLoadingLng ? (
              <>Loading...</>
            ) : dataLng ? (
              <>
                {dataLng.data.map((lang, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-icon">{lang.attributes.nom}</span>
                    <span className="experience-years">{lang.attributes.years}</span>
                  </li>

                ))} </>
            ) :
              null
            }
          </ul>
        </div>


        <h1 className="titreComp">{t('competances.titre2')}</h1>
        <VerticalTimeline>
          {errorExp ? (
            <>Oh no, there was an error</>
          ) : isLoadingExp ? (
            <>Loading...</>
          ) : dataExp ? (
            <>
              {dataExp.data.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#83A2FF', color: 'var(--color-text-date)' }}
                  contentArrowStyle={{ borderRight: '7px solid  #83A2FF' }}
                  date={item.attributes.annee.split('-')[0]}//pour avoir l annee seulement
                  iconStyle={{ background: '#83A2FF', width: '30px', height: '30px', marginLeft: '-15px' }}
                >

                  {/* Use an <img> tag for the icon */}
                  <div className="vertical-timeline-element-icon" style={{ marginTop: '-45px' }}>
                    <img
                      src={item.attributes.logoSociete.data.attributes.name}
                      alt="Timeline icon"
                      style={{ width: '100%', height: '100%', background: 'gray', borderRadius: '45px' }}
                    />
                  </div>

                  <h3 className="vertical-timeline-element-title" style={{ textAlign: 'center' }}>{item.attributes.poste} <br/>
                  <p style={{ color: 'blue' }}>{item.attributes.dateDebut.split('-')[0]}/{item.attributes.dateDebut.split('-')[1]} - {item.attributes.dateFin.split('-')[0]}/{item.attributes.dateFin.split('-')[1]}</p></h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{ color: '#FFE3BB', textAlign: 'center' }} ><br /> {item.attributes.societe} &nbsp; 
                  <a href={item.attributes.linkSociete} target="_blanc" className="icon-link" style={{ fontSize: '18px' }} /></h4>
                  <p style={{ color: '#994D1C',marginBottom:'-1.5em' }}>Achievements/Tasks</p>
                  <p style={{ color: '#200E3A' }}>
                     {item.attributes.tasks.split('/').map((part, index) => (
                      <span key={index}>
                        {index > 0 && <br />} <br />
                        - {part.trim()}{/* Affiche chaque partie et trim() pour enlever les espaces supplémentaires */}
                      </span>
                    ))}
                  </p>
                </VerticalTimelineElement>
              ))} </>
          ) :
            null
          }
        </VerticalTimeline>

      </div>

    </div>
  );
}