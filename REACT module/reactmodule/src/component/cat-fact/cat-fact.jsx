import { useEffect } from "react"
import useFetch from "../custom-hooks/fetch-hook"
const CatFact = () =>{
    const data = useFetch("https://catfact.ninja/fact")
    console.log(data)
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