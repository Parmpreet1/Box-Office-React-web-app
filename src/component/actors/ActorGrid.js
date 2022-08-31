import React from 'react';
import { ActorCard } from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../Styled';
export const ActorGrid = ({ data }) => {
  return <FlexGrid>
  {data.map(({ person }) => {
    return (
      <ActorCard
        key={person.id}
        id={person.id}
        name={person.name}
        counrty={person.counrty ? person.counrty.name : 'NO COUNTRY KNOWN'}
        birthday={person.birthday}
        deathday={person.deathday}
        image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        gender={person.gender}
      />
    );
  })
  }
  </FlexGrid>
};
