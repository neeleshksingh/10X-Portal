const Event = () =>{
    return(
        <div>
            <input onChange={function() {console.log("Triggered")}} />
        </div>
    )
}
export default Event