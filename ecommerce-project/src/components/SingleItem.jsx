
function SingleItem({item}){
    return(
        <div className="single-item">
            <img src={item.imageUrl}/>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>
            
        </div>
    )

}
export default SingleItem;