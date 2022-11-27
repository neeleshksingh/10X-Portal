import { useState } from "react"

const PredictAge = () =>{
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const handlePredictAge = () =>{
        fetch(`https://api.agify.io/?name=${name}`).then((res)=>{
            return res.json()
        }).then((data) =>{
            setAge(data.age)
        }).catch(()=>{

        })
    }
    return(
        <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick = {handlePredictAge}>Predict Age</button>
            {age && <div>Hey {name} your predict age is {age}</div>}
        </div>
    )
}
export default PredictAge