
import { useParams } from 'react-router-dom';

import { ShowMainData } from '../component/shows/ShowMainData';
import { Details } from '../component/shows/Details';
import { Seasons } from '../component/shows/Seasons';
import { Cast } from '../component/shows/Cast';
import { InfoBlock,  ShowPageWrapper } from './Show.Styled';
import { useShowPage } from '../misc/Custom-hooks';
export const Show = () => {
  const { id } = useParams();

  const { Show, IsLoading, Error } = useShowPage(id);

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
