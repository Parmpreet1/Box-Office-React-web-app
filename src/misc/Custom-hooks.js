import { useReducer, useEffect, useState } from 'react';
import { GetApi } from './config';
//Presisted Hook for starred shows
const showsReducer = (preState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...preState, action.showId];
    case 'REMOVE':
      return preState.filter(showId => showId !== action.showId);
    default:
      return preState;
  }
};

const usePresistedReducer = (reducer, initialState, key) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const presisted = localStorage.getItem(key);
    return presisted ? JSON.parse(presisted) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

export const useShow = (key = 'shows') => {
  return usePresistedReducer(showsReducer, [], key);
};

// presisted last Search query in session

export const useLastQuery = (key = 'LastQuery') => {
  const [Input, setInput] = useState(() => {
    const presisted = sessionStorage.getItem(key);
    return presisted ? JSON.parse(presisted) : '';
  });
  const setLastQueary = newState => {
    setInput(newState);
    sessionStorage.setItem(key, JSON.stringify(newState));
  };
  return [Input, setLastQueary];
};

// logic hook for handle show page
const reducer = (preState, action) => {
    switch (action.type) {
      case `FETCH_SUCCESS`:
        return { IsLoading: false, Error: null, Show: action.Show };
      case `FETCH_FAILED`:
        return { ...preState, IsLoading: false, Error: action.error };
      default:
        return preState;
    }
  };
export const useShowPage=(id)=>{
      const [state, dispatch] = useReducer(
        reducer,
        {
          Show: null,
          IsLoading: true,
          Error: null
        }
      );
      useEffect(() => {
        GetApi(`/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`)
          .then(r => {
            
              dispatch({ type: `FETCH_SUCCESS`, Show: r });
            
          })
          .catch(err => {
            dispatch({ type: `FETCH_FAILED`, error: err.message });
          });
      }, [id]);
      return state;
};
