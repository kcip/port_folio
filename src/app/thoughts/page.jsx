import PostCard from '@/components/PostCArd';
import React from 'react'
import styles from '@/styles/ThoughtsPage.module.scss'
import CustomButton from '@/components/CustomButton';
const Thoughts = () => {
  return (
    <main className={styles.thoughtsPage__wrapper}>
      <section className={styles.thoughtsPage__inner}>
        <div className={styles.thoughtsPage__text}>
          <h2>thoughts.</h2>
        </div>
        <div className={styles.thoughtsPage__content}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />

        </div>
        <div className={styles.thoughtsPage__button}>
          <CustomButton title="more" />
        </div>
      </section>
    </main>
  )
}

export default Thoughts