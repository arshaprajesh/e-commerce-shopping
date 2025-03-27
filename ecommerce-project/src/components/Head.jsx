    import "./Head.css";
    import { useState } from "react";
    


    function Head(){

const[isLogin,setIsLogin]=useState(false);

const handleLoginClick = ()=>{
    setIsLogin(true);
}
const handleLogoutClick = ()=>{
    setIsLogin(false);
}


        return(
            <div className="container">
        <div className="contact">
            <h4>Contact Us :📞 309-734-4788</h4>

        </div>
        <div className="logo">
            <h1>ᒪᖻᑢᗩ</h1>

        </div>
        <p className="icons">
          {isLogin ?(
            <button onClick={handleLogoutClick}>Log out</button>
          ):(
            <button onClick={handleLoginClick}>Log in</button>
          )
          }
           
        </p>
            </div>
        )
    

    }
    export default Head;