import { useEffect } from "react";

function useFetch(url){
    useEffect(()=>{
        fetch(url).then((res)=>{
            return res.json()
        }).then((data)=>{
            
        })
    },[url])
}