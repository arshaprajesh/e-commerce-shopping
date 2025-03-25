import { useState } from "react";


function ListOfItem(props){

    const[name]=useState(props.name);
    const[type]=useState(props.type);
    const[add,setAdd]=useState(0);

    const numberUp =() =>{
        setAdd(add+1);
    }

return(
    <div className="card">
        <p>Name : {name}</p>
        <p>Type : {type}</p>
        <p>Number : {add}</p>
        <button onClick={numberUp}>Add</button>
    </div>
)
}export default ListOfItem;