import CatogoryItems from "./CatogoryItems";
import "./Catogory.css";
function Catogories(){
return(
    <div className="container1">
        {/*Adding props*/}
        <CatogoryItems name="Dresses"/>    
        <CatogoryItems name="Tops"/>
        <CatogoryItems name="Botoms"/>
        <CatogoryItems name="Sports Wears"/>
        <CatogoryItems name="Accessaries"/>
        
    </div>
)   
}
export default Catogories;