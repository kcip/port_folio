"use client"
import { use, useState, useEffect } from "react";
import apiFetch from "@/hooks/fetchData";
import Image from "next/image";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import styles from '@/styles/Carousel.module.scss'
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
    <div className={styles.carousel__wrapper}>
      <div className={styles.carousel__inner}>
        {images && (    
          <img src={images[currentSlide].url} alt="image" className={styles.carousel__image}/> 
        )}
      </div>
      <div className={styles.carousel__buttonsWrapper}>
              <button className={`${styles.carousel__buttons} ${styles.carousel__previous}`} onClick={prevSlide}><LeftButton /></button>
      <button className={`${styles.carousel__buttons} ${styles.carousel__next}`} onClick={nextSlide}><RightButton /></button>
      </div>

    </div>
  );

}

