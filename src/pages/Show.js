import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { GetApi } from '../misc/config';

export const Show = () => {
  const { id } = useParams();
  const reducer=(preState,action)=>{
    switch (action.type) {
      case `FETCH_SUCCESS`:
        return {IsLoading:false,Error: null,Show: action.Show}
      case `FETCH_FAILED`:
        return {...preState,IsLoading: false, Error: action.error}
      default:
        return preState
    }
  }
  const InitialState={
    Show :null,
    IsLoading: true,
    Error : null
  }
  const [state, dispatch] = useReducer(reducer, InitialState)



  useEffect(() => {
    GetApi(`/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`).then(
      r => {
        setTimeout(()=>{
            dispatch({type:`FETCH_SUCCESS`, Show: r})
        },2000)
        
      }
    ).catch(err=>{
        dispatch({type:`FETCH_FAILED`,error: err.message})
    })
  }, [id]);
  console.log(id, state.Show);

  if(state.IsLoading){
    return <h2>Content is loading</h2>
  }
  if(state.Error){
    return <h2>{state.Error}</h2>
  }
  return <h2>This is show page</h2>;
};
