import React from 'react'
import styles from '@/styles/PhotosPage.module.scss'
import image1 from '@/assets/placeholder1.jpg'
import image2 from '@/assets/placeholder2.jpg'
import image3 from '@/assets/placeholder3.jpg'
import image4 from '@/assets/placeholder4.jpg'
import image5 from '@/assets/placeholder5.jpg'
import Image from 'next/image'
const Photos = () => {
  return (
    <main className={styles.photoPage__wrapper}>
      <section className={styles.photoPage__inner}>
        <div className={styles.photoPage__text}>
          <h2>photography.</h2>
          <div className={styles.photoPage__categories}>
            <ul className={styles.photoPage__categories_list}>
              <li className={styles.photoPage__categories_item}>random</li>
              <li className={styles.photoPage__categories_item}>taiwan</li>
              <li className={styles.photoPage__categories_item}>artwork</li>
              <li className={styles.photoPage__categories_item}>architecture</li>
            </ul>
          </div>
        </div>
        <div className={styles.photoPage__photosWrapper}>
          <div className={styles.photoPage__masonry}> 
            <div className={styles.photoPage__image}>
              <Image src={image1} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image2} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image3} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image4} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image5} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image1} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image2} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image3} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image4} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image5} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image1} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image2} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image3} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image4} placeholder="image"/>
            </div>
             <div className={styles.photoPage__image}>
              <Image src={image5} placeholder="image"/>
            </div>
            
         
          </div>
        </div>
      </section>
    </main>
  )
}

export default Photos