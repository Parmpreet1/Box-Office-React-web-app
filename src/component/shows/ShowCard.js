import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.Styled';

export const ShowCard = ({ id, name, image, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';
   // ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
  return (
    
    <StyledShowCard>
      <div>
        <img className="img-wrapper"src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" >Star me</button>
      </div>
    </StyledShowCard>
  );
};
