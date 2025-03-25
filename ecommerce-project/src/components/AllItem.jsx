import SingleItem from "./SingleItem";

function AllItem({ item }) {
    return (
        
        <div className="item-container">
            
            {item.map((item) => (
                <SingleItem key={item.id} item={item}
                
                />  
            ))}
            
        </div>
    );
}

export default AllItem;