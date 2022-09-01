import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { GetApi } from '../misc/config';



export const Show = () => {
    const {id}=useParams();
    const [Show, setShow] = useState(null)

    useEffect(() => {
        GetApi(`/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`).then(r=>setShow(r))
      
    
    }, [id])
    console.log(id,Show)
    
  return (
    <div>
        This is show page 
    </div>
  )
}
