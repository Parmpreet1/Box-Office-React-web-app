
const Api_base_url="https://api.tvmaze.com"

export  const GetApi =async  (queary) => {
    const Response= await fetch(`${Api_base_url}${queary}`).then(r=>r.json())
    
    return Response;
  
}
