import React, { useState } from 'react';
import { MainPageLayout } from '../component/MainPageLayout';
import { Title } from '../component/Title';
import { GetApi } from '../misc/config';

export const Home = () => {
  const [Input, setInput] = useState('');
  const [Result, setResult] = useState(null);
  const [SearchOption, setSearchOption] = useState('shows');
  const onSearch = () => {
    const jsonArray = GetApi(`/search/${SearchOption}?q=${Input}`);
    jsonArray.then(R => {
      setResult(R);
    });
    console.log(Result);
  };
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
        return Result.map((item, index) => {
          return(
            <div key={item.show.name}>
              {index} {item.show.name}
            </div>
        )
        });
      }
      if(Result[0].person) {
        return Result.map((item, index) => {
          return(
            <div key={item.person.name}>
              {index} {item.person.name}
            </div>
        )
        });
      }
      
    }
  };
  const onRadioChange=(ev)=>{
    setSearchOption(ev.target.value)
  }
 
  return (
    <>
      <Title
        title={'Box Office'}
        subtitle={'Are you looking for a movie or an actor?'}
      />
      <MainPageLayout />
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKey}
        value={Input}
        placeholder="Search for something"
      ></input>

      <div className="form-check">
      <label className="form-check-label" htmlFor="show-search">
          Shows
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="show-search"
          value="shows"
          onChange={onRadioChange}
          checked={SearchOption==='shows'}
        />
        <label className="form-check-label" htmlFor="Actor-search">
        Actors
        </label>
          <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="Actor-search"
          value="people"
          onChange={onRadioChange}
        />
      </div>

      <button type="button" style={{marginTop:"7px"}} onClick={onSearch}>
        Search
      </button>
      {RenderResult()}
    </>
  );
};
