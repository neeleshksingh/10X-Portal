import { useFetch } from "../custom-hooks/fetch-hook"
import { useEffect } from "react"
const CatFact = () =>{
    // useEffect(()=>{
    //     fetch("https://catfact.ninja/fact").then((res)=>{
    //         return res.json()
    //     }).then((data)=>{
    //         console.log(data)
    //     })
    // },[])
    return(
        <>
            I am cat fact component !
        </>
    )
}
export default CatFact