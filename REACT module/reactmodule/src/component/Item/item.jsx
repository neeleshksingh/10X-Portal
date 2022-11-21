const Item = (props)=>{
    console.log(props)
    return (
        <div>
            <header>{props.itemText}</header>
            <main>
                <img src="" alt="" />
            </main>
            <a href="#">{props.itemLink}</a>
        </div>
    )
}
export default Item