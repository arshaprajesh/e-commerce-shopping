import TopBar from './components/topBar'
import Catogories from './components/Catogories'
import Head from './components/Head'
import Banner from './components/Banner';
import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css'
import AllItem from './components/AllItem';


function App() {

  const[products]=useState([
    {id:1, name:"Dresses",imageUrl:"https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1200"},
    {id:2, name:"Accessories",imageUrl:"https://images.pexels.com/photos/16940629/pexels-photo-16940629/free-photo-of-boxes-with-rings.jpeg?auto=compress&cs=tinysrgb&w=1200"},
    {id:3, name:"sports",imageUrl:"https://images.pexels.com/photos/19294576/pexels-photo-19294576/free-photo-of-store-display-with-nike-sneakers.jpeg?auto=compress&cs=tinysrgb&w=1200"},
    
    
  ]);
  const[item,setItem]=useState([
    { id: 1, name: "Dress", price: "$99", description: "Clasi Summer Casual Floral dress",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bv10J2SL1iqaJde4fQdIyNTLac2_e4P2YA&s"},
    { id: 2, name: "Watch", price: "$50", description: "Tissot Classic Dream Women's Watch",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRfvdIc1DRQ7Z6O_eUeSpkvr_IHdxuWIXHQ&s"},
    { id: 3, name: "Sports wear", price: "$38", description: "2-piece Casual sports wear suit",imageUrl:"https://static.fibre2fashion.com/MemberResources/LeadResources/1/2022/9/Seller/22206269/Images/22206269_0_women-sportswear.jpg"},
    { id: 4, name: "Hand Bag", price: "$105", description: "Female real Leather Shoulder bag ",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2p_K-yzB3sk2P_4YLRYNPE_vzOL1KuacRrA&s"},
    { id: 5, name: "Shoes", price: "$109", description: "New Balance Running shoe",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7NSpQcM_N-gw1paKBBXVfAxpiJU0CmjQmg&s"},
    { id: 6, name: "Jacket", price: "$130", description: " Elegant Double-Breasted Long Sleeve",imageUrl:"https://i5.walmartimages.com/seo/Qiaocaity-Womens-Fall-Fashion-Long-Trench-Coat-2022-Womens-Lapel-Woolen-Cloth-Coat-Trench-Jacket-Long-Overcoat-Outerwear-Cardigan-Khaki-S_2e8bee51-26e4-4636-a67e-c051fdf440cc.795552c5de9e16d043ef436200058cf7.jpeg"},
    { id: 1, name: "Ring", price: "$500", description: "Ruby white stone ring",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiwB5MI_QexgxOAIGk9D28DtOAJPzj3I08w&s"},
    { id: 1, name: "Hat", price: "$25", description: "Adjustable workout spots cap",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8cfJEnXFLP1wl-lt0Kwv6j1j6DdpPXPSlg&s"},
    { id: 1, name: "Bottom", price: "$65", description: "Elegant twist waist slim straight",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ-B6iW6Fy0k_tbPVQ39MZeuUU1FijwsOQQ&s"},
    { id: 1, name: "Skirt", price: "$40", description: "Clasi Summer Casual gene skirt",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyo60Qv-0DBeRriORwi9ugoqxjCgrDTpqQg&s"},
  
  
  ]);
    const handleAddToCart = (item) => {
      setItem([...item, item]);
      alert(`${item.name} added to cart!`);
    };
    
  const[visible,setVisible]= useState(false);
 const hidingCharacter=()=> {
  if(visible){
    setVisible(false);
  }
  else{
    setVisible(true);
  }
 }

  return (
    <div>
       <TopBar/>
       <Head/>
       <Catogories/>
       <Banner/>
      
       <ProductList products={products}/>

       <div>
        <button onClick={hidingCharacter}>Show All</button>
       </div>
      {visible ? (
        <AllItem item={item} onAddToCart={handleAddToCart}/>
      
      
       ):(
        <div className="container">
          <p></p>
        </div>
       )}
    </div>
  )
}

export default App;
