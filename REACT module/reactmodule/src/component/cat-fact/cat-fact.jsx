import { useEffect } from "react"
import useFetch from "../custom-hooks/fetch-hook"
import { useLocalStorage } from "../custom-hooks/localstorage-hook"
const CatFact = () =>{
    const data = useFetch("https://catfact.ninja/fact")
    const [localStorage, updateLocalStorage] = useLocalStorage("name")

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
            <button onClick={()=>{updateLocalStorage("Neelesh")}}>Update Local Storage</button>
            I am cat fact component !
            {localStorage}
        </>
    )
}
export default CatFact