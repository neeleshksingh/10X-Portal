import React from "react"
const PerformanceChild = (props) =>{
    return(
        <>
            {props.heading}
        </>
    )
}
export default React.memo(PerformanceChild)