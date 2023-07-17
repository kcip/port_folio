"use client"
import { use, useState, useEffect } from "react";
import apiFetch from "@/hooks/fetchData";
import Image from "next/image";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

export default function Carousel() {

  const [images, setImages] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(()=> {
   const fetchData = async ()=> {
    const data = await apiFetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_US5GcFynn6U6Q0vyKu7acNovoq1fbPS9kMzX4TsxTGEDM0dAVYeo6rFwjdlQ6Dq3`);

    setImages(data)

   }
   
   fetchData()
  }, [])


const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };






  return (
    <div className="carousel">
      <div className="carousel-viewport">
        {images && (    
          <img src={images[currentSlide].url} alt="image" /> 
        )}
      </div>
      
      <button className="carousel-prev" onClick={prevSlide}><LeftButton /></button>
      <button className="carousel-next" onClick={nextSlide}><RightButton /></button>
    </div>
  );

}

