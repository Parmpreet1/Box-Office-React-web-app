import React, { useState } from 'react';
import { MainPageLayout } from '../component/MainPageLayout';
import { Title } from '../component/Title';
import { GetApi } from '../misc/config';


export const Home = () => {
  const [Input, setInput] = useState('');
  const [Result, setResult] = useState(null);
  const onSearch=()=>{

    const jsonArray =GetApi(`/search/shows?q=${Input}`)
    jsonArray.then((R)=>{setResult(R)})
    console.log(Result)
  }
  const onKey=(evt)=>{
    if (evt.keyCode===13) {
      onSearch()
    }
  }
  const RenderResult=()=>{
    if (Result && Result.length===0) {
      return <div><h3>No Result</h3></div>
    }
    if (Result && Result.length>0) {
      return (
        Result.map((item,index)=>{
           return <div key={item.show.name}>{index} {item.show.name}</div>
        })
        )
    }
   
  }
  return (<>
      <Title title={"Box Office"} subtitle={"Are you looking for a movie or an actor?"}/>
      <MainPageLayout/>
      <input type="text" onChange={(e)=>setInput(e.target.value)} onKeyDown={onKey} value={Input}></input>
      <button type="button" onClick={onSearch}>Search</button>
      {RenderResult()}
      </>
  );
};
