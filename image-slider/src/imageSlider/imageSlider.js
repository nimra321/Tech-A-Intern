import React from 'react'
import { IoMdQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ImageSlider = (props) => {
    const { position, stars, comment, name, image } = props.item;
    return (
      <div className='slider-container'>
        <header className='header'>
          
            <span className='qoute'><IoMdQuote/></span>
          
          <div className='staar-flex'>
            {Array(stars).fill().map((_, i) => (
                      <span className='star' key={i}>
                          <AiOutlineStar/>
                      </span>
                  ))}
          </div>
                  
        </header>
        <p className='body'>
            {comment}
        </p>
        <div className='end'>
            <img src={image} alt={name} />
            <div className='details'>
              <h1>{name}</h1>
              <p>{position}</p>
            </div>
        </div>
      </div>
    )
}

export default ImageSlider