import React from 'react'
import Image from 'next/image'
import styles from "@/styles/Hero.module.scss"
import heroImage from '@/assets/me-2.jpg'
import CustomButton from './CustomButton'
import CustomSocial from './CustomSocial';
const Hero = () => {
  return (
    <div className={styles.hero__wrapper}>
      <div className={styles.hero__inner}>
      <div className={styles.hero__textWrapper}>
        <div className={styles.hero__content}>
          <p className={styles.hero__paragraphStyle}>Hello, my name is</p>
          <p className={styles.hero__text}>
            <span className={styles.hero__textSpan}>S</span>
            <span className={styles.hero__textSpan}> c</span> 
            <span className={styles.hero__textSpan}>o</span>
            <span className={styles.hero__textSpan}>t</span>
            <span className={styles.hero__textSpan}>t</span>
          </p>
          <p className={styles.hero__paragraphStyle}>I’m a developer, UI/UX designer, & photographer based in New York City.</p>
        </div>
        <div className={styles.hero__contactInfo}>
          <CustomButton 
            title="contact me"
          />
          <div className={styles.hero__socials}>
            <CustomSocial />
            <CustomSocial />
            <CustomSocial />
          </div>
        </div>
        
      </div>
      <div className={styles.hero__image}>
        <Image 
          src={heroImage}
          alt="Hero Image"
          priority
        
        />
      </div>
      </div>

    </div>
  )
}

export default Hero