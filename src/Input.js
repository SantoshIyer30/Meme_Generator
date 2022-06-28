import MemesData from "./MemesData";
import React, { useState } from 'react';



function Input(){
    const [meme, setMeme] = useState({
        image:"https://i.imgflip.com/1ii4oc.jpg",
        topText: "",
        bottomText:""
    });

    const [allMemeImages,setAllMemeImages] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        console.log(url)
        setMeme(prevState => ({
                ...prevState,
                image : url
        }))
    }

    function handleChange (event){
        const {name,value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name]: value
            }
        })
    }
    return(
        <div className="input" >
            <div className="form">

                <input 
                type="text" 
                className="textbox" 
                name="topText" 
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                type="text" 
                className="textbox" 
                name="bottomText" 
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button 
                onClick={handleClick} 
                className="submit-button" 
                value="">
                    Get new meme image 🖼️
                </button>

            </div> 
            <div className="meme">
                <h2 className="meme--text top"> {meme.topText} </h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                <img src = {meme.image} alt ="" className="meme-image" />
            </div>
        </div>
    )
}


export default Input;