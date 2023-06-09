import React, {useEffect, useState} from 'react'

export default function Card() {
    
    const [ranImg, setRanImg] = useState("")
    let ranNum = Math.floor(Math.random() * 20 + 1);
    function fetchCard() {
        fetch("https://pixabay.com/api/?key=35904460-6da0f483724d8177c3f681e67&q=photo")
            .then((response) => response.json())
            .then((data) => setRanImg(data.hits[ranNum].largeImageURL))
    }
    useEffect(() => {
        fetchCard()
    }, [])
    
    
  return (
    <div>
        <img className="img" src={ranImg} />
    </div>
  )
}
