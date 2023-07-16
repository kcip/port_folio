import React from 'react'
import styles from '@/styles/Thoughts.module.scss'
import PostSegment from './PostSegment'
import CustomButton from './CustomButton'
const Thoughts = () => {
  return (
    <section className={styles.thoughts__wrapper}>
       <div className={styles.thoughts__text}>
          <h2>thoughts.</h2>
        </div>
      <div className={styles.thoughts__inner}>
        <div className={styles.thoughts__text}>
          <p>most recent</p>
        </div>
        <div className={styles.thoughts__postsegment}>
          <PostSegment />
          <PostSegment />
        </div>
      </div>
       <div className={styles.thoughts__button}>
           <CustomButton 
            title="read more"
          />
          </div>
    </section>
  )
}

export default Thoughts