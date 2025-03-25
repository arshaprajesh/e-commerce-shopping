import React from "react";
import myVideo from './assets/video.mp4';
import "./Banner.css";

function Banner(){
    return(
      
        <div className="video__wrap">
          <video src={myVideo}  autoPlay muted loop className="img1"></video>
          <div>
          <h1>𝙀𝙡𝙚𝙫𝙖𝙩𝙚 𝙨𝙩𝙮𝙡𝙚...</h1>
          <h2>✌𝓣𝓻𝓮𝓷𝓭𝓲𝓷𝓰 𝓒𝓸𝓵𝓵𝓮𝓬𝓽𝓲𝓸𝓷𝓼✌</h2>
          <p>𝕲𝖊𝖙 𝟑𝟎% 𝖔𝖋𝖋 𝖋𝖔𝖗 𝖓𝖊𝖜 𝕬𝖗𝖗𝖎𝖛𝖆𝖑𝖘✍</p>

          </div>
        </div>
    )
}
export default Banner;
        
            
         