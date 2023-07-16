import React from 'react'
import Image from 'next/image'
import image from '@/assets/me.jpg'
import styles from '@/styles/About.module.scss'
import CustomButton from '@/components/CustomButton'
import CustomSocial from '@/components/CustomSocial'
const About = () => {
  return (
    <main className={styles.about__wrapper}>
      <div className={styles.about__filler}></div>
      <div className={styles.about__image}>
        <Image 
          src={image}
          alt="image"
        />
      </div>
      <section className={styles.about__content}>
        <aside className={styles.about__text}>
          <h2>about me.</h2>
          <p>Lorem ipsum dolor sit…. Or as they say in English, I have an eclectic background. I have a degree in sculpture. I lived abroad in Asia. I worked as an academic advisor, a web developer and a software engineer. From pushing brooms in high school to pushing pixels now, there’s not a whole lot I haven’t done!</p>
        </aside>
        <aside className={styles.about__details}>
          <p className={styles.about__details__p}>my experience</p>
          <div className={styles.about__lists}>
            <h3>Google UX Design Professional Certificate UX/UI Certificate Course</h3>
            <p>summer 2022</p>
          </div>
          <div className={styles.about__lists}>
            <h3>Verizon</h3>
            <h4>Software Engineer</h4>
            <p>summer 2022</p>
          </div>
          <div className={styles.about__lists}>
            <h3>General Assembly - Software Engineering Bootcamp</h3>
            <p>spring 2020</p>
          </div>
          <div className={styles.about__lists}>
            <h3>Noble Desktop Web Design Bootcamp</h3>
            <p>fall 2016</p>
          </div>
        </aside>
        <div className={styles.about__contact}>
         
          <div className={styles.about__socials}>
            <CustomSocial />
            <CustomSocial />
            <CustomSocial />
          </div>
         <CustomButton 
          title="contact me"
          />
        </div>
      </section>
    </main>
  )
}

export default About