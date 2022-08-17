import { useEffect } from "react";
import { useState } from "react"

const useServices=()=>{
    const [services , setServices]= useState([]);
    useEffect(()=>{
        fetch('https://warm-chamber-50271.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
      } ,[])
      return [services,setServices]
}
export default useServices;