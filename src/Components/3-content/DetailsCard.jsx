import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailsStyle.css';
import { useGetQuerryByNameQuery } from '../../Redux/QuerryAPI';


export default function DetailsCard() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, isLoading } = useGetQuerryByNameQuery(`projects/${id}`);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (

        <div className="containerDetails">
          <div className="icon-circle-left" onClick={() => navigate("/project")} />
          {/*<img width={266} src={`./../${project.img}`} alt="" />*/}
          <h2>{data.data.attributes.title}</h2>
          <p>{data.data.attributes.description}</p>
        </div>
      ) : null
      }
    </>

  )
}