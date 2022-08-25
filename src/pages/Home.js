import React, { useState } from 'react';
import { MainPageLayout } from '../component/MainPageLayout';
import { Title } from '../component/Title';


export const Home = () => {
  const [Input, setInput] = useState('');
  const onSearch=()=>{
    const LinkPromise=fetch(`https://api.tvmaze.com/search/shows?q=${Input}`)
    const jsonArray=LinkPromise.then((j)=>j.json())
    jsonArray.then((Result)=>{console.log(Result)})

  }
  const onKey=(evt)=>{
    console.log(evt.keyCode)
    if (evt.keyCode===13) {
      onSearch()
    }
  }
  return (<>
      <Title title={"Box Office"} subtitle={"Are you looking for a movie or an actor?"}/>
      <MainPageLayout/>
      <input type="text" onChange={(e)=>setInput(e.target.value)} onKeyDown={onKey} value={Input}></input>
      <button type="button" onClick={onSearch}>Search</button>
      </>
  );
};
