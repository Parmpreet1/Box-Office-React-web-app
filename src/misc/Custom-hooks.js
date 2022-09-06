import { useReducer,useEffect } from "react"

const showsReducer=(preState,action)=>{
    switch (action.type) {
        case "Add":
            return [...preState,action.showId]
        case "REMOVE":
            return preState.filter(showId=>showId!==action.showId)
        default:
            return preState;
    }
}


export const usePresistedReducer = (reducer,initialState,key) => {
    
    const [state, dispatch] = useReducer(reducer, initialState,(initial)=>{
        const presisted=localStorage.getItem(key)
        return presisted? JSON.parse(presisted) : initial
    })
    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(state))
    }, [state,key])
    
  return (
    [state,dispatch]
  )
}

export const useShow= (key="shows")=>{
    return usePresistedReducer(showsReducer,[],key)
}
