"use client"
import React, {useState, useEffect} from 'react'

import { photos } from '@/utils/images';

console.log(photos)

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = [];
  
 const nextSlide = ()=> {
    const newIndex = (currentIndex + 1) % image.length;
    setCurrentIndex(newIndex)
  }

  const previousSlide = ()=> {
    const newIndex = (currentIndex - 1 + image.length) % image.length;
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <button onClick={previousSlide}>previous</button>
    
      {image && image.map((item) => (
        console.log('28', item)
      ))}
      <button onClick={nextSlide}>next</button>
    </div>
  )
}

export default Carousel