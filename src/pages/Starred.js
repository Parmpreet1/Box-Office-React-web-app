import React, { useState, useEffect } from 'react';
import { MainPageLayout } from '../component/MainPageLayout';
import { ShowGrid } from '../component/shows/ShowGrid';
import { Title } from '../component/Title';
import { GetApi } from '../misc/config';
import { useShow } from '../misc/Custom-hooks';
export const Starred = () => {
  const [Show, setShow] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);
  const [starredShows] = useShow();

  useEffect(() => {
    if (starredShows) {
      const promise = starredShows.map(showId => {
        return GetApi(`/shows/${showId}`);
      });
      Promise.all(promise)
        .then(ApiData => {
          return ApiData.map(show => ({ show }));
        })
        .then(r => {
          setShow(r);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starredShows]);

  return (
    <div>
      <Title
        title={'Box Office'}
        subtitle={'Are you looking for a movie or an actor?'}
      />
      <MainPageLayout />
      {IsLoading && <div>Starred Shows still loading</div>}
      {Error && <div>Error occured {Error}</div>}
      {!IsLoading && !Show && <div>No Starred Shows</div>}
      {!IsLoading && !Error && Show && <ShowGrid data={Show} />}
    </div>
  );
};
