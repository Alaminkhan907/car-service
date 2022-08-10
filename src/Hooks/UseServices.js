import { useEffect } from "react";
import { useState } from "react"

const useServices=()=>{
    const [service , setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
      } ,[])
      return [service]
}
export default useServices;