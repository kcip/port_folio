import React from 'react'
import styles from '@/styles/PostSegment.module.scss'
const PostSegment = () => {
  return (
    <aside className={styles.postsegment__wrapper}>
      <h2>Bananas & Chocolate</h2>
      <p>I’m baby schlitz bodega boys affogato food truck. Gatekeep locavore pour-over, sartorial glossier cronut lyft XOXO affogato palo Santo.
      <span className={styles.postsegment__date}>
        01/23
      </span>
      </p>
      
    </aside>
  )
}

export default PostSegment;