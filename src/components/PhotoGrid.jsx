import React from 'react'
import Image from 'next/image'
import image1 from '@/assets/placeholder1.jpg'
import image2 from '@/assets/placeholder2.jpg'
import image3 from '@/assets/placeholder3.jpg'
import image4 from '@/assets/placeholder4.jpg'
import image5 from '@/assets/placeholder5.jpg'
import image6 from '@/assets/placeholder2.jpg'
import styles from '@/styles/PhotoGrid.module.scss'
const PhotoGrid = () => {
  return (
    <aside className={styles.photogrid__wrapper}>
      <div className={styles.photogrid__item}>
        <Image 
          src={image1}
          placeholder="image"
        />  
        <div className={styles.photogrid__itemText}>
          <p>something will go here</p>
        </div>
        <div className={styles.photogrid__gradient}></div>
      </div>
       <div className={styles.photogrid__item}>
        <Image 
          src={image2}
          placeholder="image"
        />  
        <div className={styles.photogrid__itemText}>
          <p>something will go here</p>
        </div>
        <div className={styles.photogrid__gradient}></div>
      </div>
       <div className={styles.photogrid__item}>
        <Image 
          src={image3}
          placeholder="image"
        />  
        <div className={styles.photogrid__itemText}>
          <p>something will go here</p>
        </div>
        <div className={styles.photogrid__gradient}></div>
      </div>
       <div className={styles.photogrid__item}>
        <Image 
          src={image4}
          placeholder="image"
        />  
        <div className={styles.photogrid__itemText}>
          <p>something will go here</p>
        </div>
        <div className={styles.photogrid__gradient}></div>
      </div>
       <div className={styles.photogrid__item}>
        <Image 
          src={image5}
          placeholder="image"
        />  
        <div className={styles.photogrid__itemText}>
          <p>something will go here</p>
        </div>
        <div className={styles.photogrid__gradient}></div>
      </div>
       <div className={styles.photogrid__item}>
        <Image 
          src={image6}
          placeholder="image"
        />  
        <div className={styles.photogrid__itemText}>
          <p>something will go here</p>
        </div>
        <div className={styles.photogrid__gradient}></div>
      </div>
    </aside>
  )
}

export default PhotoGrid