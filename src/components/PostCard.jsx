import React from 'react'
import styles from "@/styles/PostCard.module.scss"
import CustomButton from './CustomButton';

const PostCard = () => {
  return (
    <div className={styles.postCard__wrapper}>
      <div className={styles.postCard__inner}>
        <h2 className={styles.postCard__title}>bananas & chocolate</h2>
        <p className={styles.postCard__text}>I’m baby schlitz bodega boys affogato food truck. Gatekeep locavore pour-over, sartorial glossier cronut lyft XOXO affogato palo Santo.</p>
        <p className={styles.postCard__date}>01/23</p>
        <div className={styles.postCard__button}>
          <CustomButton 
          title="read more"
          />
        </div>
      </div>
    </div>
  )
}

export default PostCard 