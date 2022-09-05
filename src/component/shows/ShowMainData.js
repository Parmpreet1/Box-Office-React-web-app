import React from 'react'
import IMG_PLACEHOLDER from "../../images/not-found.png"
import {  Headline, MainDataWrapper, TagList } from '../../pages/Show.Styled';
import {Star} from '../Styled'
export const ShowMainData = ({ name, rating, summary, tags, image }) => {
    return (
      <MainDataWrapper>
        <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
        <div className='text-side'>
          <Headline>
            <h1>{name}</h1>
            <div>
            <Star />
              <span>{rating.average || 'N/A'}</span>
            </div>
          </Headline>
          <div className="summary" dangerouslySetInnerHTML={{ __html: summary }} />
  
          <div>
            Tags:{' '}
            <TagList>
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </TagList>
          </div>
        </div>
      </MainDataWrapper>
    );
  };