import React from "react";
import styles from '@/styles/WorkSlug.module.scss'
import Image from "next/image";
import image2 from '@/assets/placeholder2.jpg'
import CustomSocial from "@/components/CustomSocial";
import Carousel from "@/components/Carousel";
const Page = () => {
  return (
    <main className={styles.workSlug__wrapper}>
      <section className={styles.workSlug__inner}>
        <div className={styles.workSlug__content}>
          <div className={styles.workSlug__imagesWrapper}>
            <div className={styles.workSlug__image}>
              {/* <Image src={image2} alt="image"/> */}
              <Carousel />
            </div>
            
          </div>
          <div className={styles.workSlug__details}>
            <h2 className={styles.workSlug__title}>title</h2>
            <p className={styles.workSlug__description}>stuff goes here for description</p>
            <div className={styles.workSlug__tech}>
              <p>built with:</p>
              <ul>
                <li>item one</li>
                <li>item one</li>
                <li>item one</li>
                <li>item one</li>
                <li>item one</li>
              </ul>
            </div>
            <div className={styles.workSlug__socials}>
              <CustomSocial />
              <CustomSocial />
              <CustomSocial />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
