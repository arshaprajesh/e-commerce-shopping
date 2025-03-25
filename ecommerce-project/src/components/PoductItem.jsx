function ProductItem({product}){
    return(
        <div className="product-item">
            <img src={product.imageUrl}/>
            <h2>{product.name}</h2>
           
        </div>
    )
        
}
export default ProductItem;