import { useEffect, useState } from "react"

export const useLocalStorage = (key) =>{
    const [state, setState] = useState(window.localStorage.getItem(key))
    // useEffect(()=>{
    //     setState(window.localStorage.getItem())
    // },[])
    return [state, setState]
}