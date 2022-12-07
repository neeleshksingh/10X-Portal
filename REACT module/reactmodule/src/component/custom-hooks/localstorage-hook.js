import { useEffect, useState } from "react"

export const useLocalStorage = (key) =>{
    const [state, setState] = useState(window.localStorage.getItem(key))
    // useEffect(()=>{
    //     setState(window.localStorage.getItem())
    // },[])
    useEffect(()=>{
        window.localStorage.setItem(key, state)
    },[state])
    return [state, setState]
}