import React from "react";
import styles from '@/styles/PhotosSlug.module.scss'
import Image from "next/image";
import image1 from '@/assets/placeholder1.jpg'
import image2 from '@/assets/placeholder2.jpg'
import image3 from '@/assets/placeholder3.jpg'
import image4 from '@/assets/placeholder4.jpg'
import image5 from '@/assets/placeholder5.jpg'
const Page = () => {
  return (
    <main className={styles.photoSlug__wrapper}>
      <section className={styles.photoSlug__inner}>
        <div className={styles.photoSlug__hero}>
          <div className={styles.photoSlug__text}>
            <h2>title here</h2>
          </div>
          <div className={styles.photoSlug__heroImage}>
            <Image src={image1} placeholder="image"/>
          </div>
          
        </div>
        
        <div className={styles.photoSlug__masonry}>
          <div className={styles.photoSlug__image}>
            <Image src={image1} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image2} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image3} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image4} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image5} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image1} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image2} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image3} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image4} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image5} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image1} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image2} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image3} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image4} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image5} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image1} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image2} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image3} placeholder="image"/>
          </div>
          <div className={styles.photoSlug__image}>
            <Image src={image4} placeholder="image"/>
          </div>
        </div>

       
      </section>
    </main>
  )
};
  
export default Page;
