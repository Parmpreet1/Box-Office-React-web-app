import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetApi } from '../misc/config';

export const Show = () => {
  const { id } = useParams();
  const [Show, setShow] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(() => {
    GetApi(`/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`).then(
      r => {
        setTimeout(()=>{
            setShow(r);
            setIsLoading(false)
        },2000)
        
      }
    ).catch(err=>{
        setError(err.message);
        setIsLoading(false)
    })
  }, [id]);
  console.log(id, Show);

  if(IsLoading){
    return <h2>Content is loading</h2>
  }
  if(Error){
    return <h2>{Error}</h2>
  }
  return <h2>This is show page</h2>;
};
