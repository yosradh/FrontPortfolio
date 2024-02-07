import React from 'react';
import './ToolStyle.css';
import { useGetQuerryByNameQuery } from '../../Redux/QuerryAPI';


export default function Tools() {

  const { data, error, isLoading } = useGetQuerryByNameQuery('tools?populate=*');

  return (
    <div className="containerTools">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.data.map((item, index) => (
            <div className='cardTools' key={index}>
              <div className='image'>
                <img src={item.attributes.imageTool.data.attributes.name} />
              </div>
              <div className='content'>
                <h3>{item.attributes.title}</h3>
                <a href={item.attributes.link} target='_blank'>Link</a>
              </div>
            </div>
          ))}

        </>
      ) : null
      }
    </div>


  )
}
