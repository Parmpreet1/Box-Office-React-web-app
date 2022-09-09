import React, { useState,useEffect} from 'react';
import { ActorGrid } from '../component/actors/ActorGrid';
import { MainPageLayout } from '../component/MainPageLayout';
import { Title } from '../component/Title';
import { GetApi } from '../misc/config';
import { ShowGrid } from '../component/shows/ShowGrid';
import { useLastQuery } from '../misc/Custom-hooks';
import { RadioInputsWrapper, RadioWrapper, SearchButtonWrapper, SearchInput } from '../MainAppStyle';
// import { useCallback } from 'react';

export const Home = () => {
  
  
  const [Input, setInput] = useLastQuery();
  const [Result, setResult] = useState(null);
  const [SearchOption, setSearchOption] = useState('shows');
  console.log(Result);
  const onSearch =() => {
    const jsonArray = GetApi(`/search/${SearchOption}?q=${Input}`);
    jsonArray.then(R => {
      setResult(R);
    });
    
  };
  useEffect(() => {
    onSearch()
    console.log(Result)
  }, [Input,SearchOption])
  const onKey = evt => {
    if (evt.keyCode === 13) {
      onSearch();
    }
  };
  const RenderResult = () => {
    if (Result && Result.length === 0) {
      return (
        <div>
          <h3>No Result</h3>
        </div>
      );
    }
    if (Result && Result.length > 0) {
      if (Result[0].show) {
        return <ShowGrid data={Result} />;
      } else {
        return <ActorGrid data={Result} />;
      }
    }
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <>
      <Title
        title={'Box Office'}
        subtitle={'Are you looking for a movie or an actor?'}
      />
      <MainPageLayout />
      <SearchInput
        type="text"
        onChange={e => {
          setInput(e.target.value);
        }}
        onKeyDown={onKey}
        value={Input}
        placeholder="Search for something"
      ></SearchInput>

      <RadioInputsWrapper className="form-check">
        
        <RadioWrapper className="form-check-label" htmlFor="show-search">
          Shows
        </RadioWrapper>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="show-search"
          value="shows"
          onChange={onRadioChange}
          checked={SearchOption === 'shows'}
        />
        <RadioWrapper className="form-check-label" htmlFor="Actor-search">
          Actors
        </RadioWrapper>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Actor-search"
          value="people"
          onChange={onRadioChange}
        />
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button 
        type="button"
        style={{ marginTop: '7px', marginRight: '7px' }}
        onClick={onSearch}
        >
        Search
      </button>
      </SearchButtonWrapper>
      {RenderResult()}
    </>
  );
};
