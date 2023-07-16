import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import styles from '@/styles/Work.module.scss'
import image1 from '@/assets/placeholder1.jpg'
import image2 from '@/assets/placeholder2.jpg'
import image3 from '@/assets/placeholder3.jpg'
import image4 from '@/assets/placeholder4.jpg'
import image5 from '@/assets/placeholder5.jpg'
import OutArrow from './OutArrow';
const Work = () => {
  return (
    <section className={styles.work__wrapper}>
       <div className={styles.work__text}>
          <h2>work.</h2>
        </div>
      <div className={styles.work__inner}>
       
          <div className={styles.work__content}>
            <div className={styles.work__item}>
              <Image 
                src={image1}
                placeholder="image"
              />
              <div className={styles.work__arrow}>
                <OutArrow />
              </div>
              <div className={styles.work__itemText}>
                <p>ec english test</p>
              </div>
              <div className={styles.work__gradient}></div>
            </div>
            <div className={styles.work__item}>
               <Image 
                src={image2}
                placeholder="image"
              />
            </div>
            <div className={styles.work__item}>
               <Image 
                src={image3}
                placeholder="image"
              />
            </div>
            <div className={styles.work__item}>
               <Image 
                src={image4}
                placeholder="image"
              />
            </div>
            <div className={styles.work__item}> 
             <Image 
                src={image5}
                placeholder="image"
              />
            </div>
    
          </div>
        
        
      </div>
        <div className={styles.work__button}>
           <CustomButton 
            title="see more"
          />
          </div>
    </section>
  )
}

export default Work