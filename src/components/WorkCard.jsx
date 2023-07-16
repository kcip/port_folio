import React from 'react'
import Image from 'next/image'
import OutArrow from './OutArrow';
import image1 from '@/assets/placeholder1.jpg'
import styles from '@/styles/WorkCard.module.scss'
const WorkCard = () => {
  return (
    <div className={styles.workCard__wrapper}>
      <div className={styles.workCard__image}>
        <Image src={image1} placeholder="image"/>
      </div>
      <h2 className={styles.workCard__text}>name</h2>
      <div className={styles.workCard__out}>
        <OutArrow />
      </div>
     
    </div>
  )
}

export default WorkCard