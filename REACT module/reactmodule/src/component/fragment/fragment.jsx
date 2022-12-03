const Fragment = () =>{
    return(
        <>
            {['span1', 'span2', 'span3'].map((value,i)=>{
                return(
                    <span key={'${value}---${i}'}>
                        {value}
                    </span>
                )
            })}
        </>
    )
}
export default Fragment