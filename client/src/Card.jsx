import React, {useEffect, useState} from 'react'
import $ from 'jquery';

export default function Card({ picBank }) {
    const [ranImg, setRanImg] = useState({id: "", img: null})
    const [active, setActive] = useState([])
    let tempNum = Math.floor(Math.random() * 20)

  async function fetchCard() {
    fetch("https://pixabay.com/api/?key=35904460-6da0f483724d8177c3f681e67&q=photo")
        .then((response) => response.json())
        .then((data) => {picBank.push(data.hits[tempNum])
          setRanImg({id: data.hits[tempNum].id, img: data.hits[tempNum].largeImageURL})
        })
      }
    useEffect(() => {
        fetchCard()
    }, [])

    function handleClick(event){
      event.target.parentElement.style.transform = "rotateY(0deg)"
      setActive(prev => [...prev, event.target])
      // active.push(event.target)
      // console.log(active)
    }

    useEffect(() =>{
      if(active.length === 2){
        if(active[0].className === active[1].className){
          // setActive(...prev => [prev, ])
          console.log("equal")
          // active = []
        } else {
          setTimeout(()=>{
            active[0].parentElement.style.transform = "rotateY(180deg)"
            active[1].parentElement.style.transform = "rotateY(180deg)"
            // active = []
            console.log("wrong")
          }, 1000)
        }
        setActive([])
        // active = []
      }
      console.log(active)
    }, [active])

  return (<>
    <div className="card" >
      <div className="card-inner">
        <div className="card-front">
        <img className="img" alt="card" src={ranImg.img} />
        </div>
        <div className={`card-back ${ranImg.id}`} onClick={(e)=> handleClick(e)}>
          this is the back
        </div>
      </div>
    </div>

    <div className='card'>
      <div className="card-inner">
        <div className="card-front">
        <img className="img" alt="card" src={ranImg.img} />
        </div>
        <div className={`card-back ${ranImg.id}`} onClick={(e)=> handleClick(e)}>
          this is the back
        </div>
      </div>
    </div>
    </>)
}
