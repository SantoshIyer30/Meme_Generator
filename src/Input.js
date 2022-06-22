import MemesData from "./MemesData";
import React, { useState } from 'react';



function Input(){
    const [meme, setMeme] = useState("");
    
    function handleClick(){
        const memesArray = MemesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        setMeme(url)
    }
    return(
        <div className="input" >
            <div className="type">
            <input type="text" className="textbox" name="fhalf"/>
            <input type="text" className="textbox" name="shalf"/>
            </div>
            <input type="submit" onClick={handleClick} className="submit-button" value="Get new meme image 🖼️"/>
            <img src = {meme} alt ="" className="meme-image" />
        </div>
    )
}


export default Input;