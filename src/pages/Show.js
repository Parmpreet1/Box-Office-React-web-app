import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { GetApi } from '../misc/config';
import { ShowMainData } from '../component/shows/ShowMainData';
import { Details } from '../component/shows/Details';
import { Seasons } from '../component/shows/Seasons';
import { Cast } from '../component/shows/Cast';
import { InfoBlock,  ShowPageWrapper } from './Show.Styled';
export const Show = () => {
  const { id } = useParams();
  const reducer = (preState, action) => {
    switch (action.type) {
      case `FETCH_SUCCESS`:
        return { IsLoading: false, Error: null, Show: action.Show };
      case `FETCH_FAILED`:
        return { ...preState, IsLoading: false, Error: action.error };
      default:
        return preState;
    }
  };
  const InitialState = {
    Show: null,
    IsLoading: true,
    Error: null,
  };
  const [{ Show, IsLoading, Error }, dispatch] = useReducer(
    reducer,
    InitialState
  );

  useEffect(() => {
    GetApi(`/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`)
      .then(r => {
        
          dispatch({ type: `FETCH_SUCCESS`, Show: r });
        
      })
      .catch(err => {
        dispatch({ type: `FETCH_FAILED`, error: err.message });
      });
  }, [id]);
  console.log(id, Show);

  if (IsLoading) {
    return <h2>Content is loading</h2>;
  }
  if (Error) {
    return <h2>{Error}</h2>;
  }
  return (
    <ShowPageWrapper>
      
        <ShowMainData
          image={Show.image}
          name={Show.name}
          rating={Show.rating}
          summary={Show.summary}
          tags={Show.genres}
        />
     
      <InfoBlock>
        <h2>Details</h2>
        <Details  status={Show.status} network={Show.network} premiered={Show.premiered}/>
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={Show._embedded.seasons}/>
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={Show._embedded.cast}/>
      </InfoBlock>
    </ShowPageWrapper>
  );
};
