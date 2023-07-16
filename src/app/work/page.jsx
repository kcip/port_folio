import React from 'react'
import styles from "@/styles/WorkPage.module.scss"
import WorkCard from '@/components/WorkCard';
const Work = () => {
  return (
    <main className={styles.workPage__wrapper}>
      <section className={styles.workPage__inner}>
        <div className={styles.workPage__text}>
          <h2>work.</h2>
        </div>
        <div className={styles.workPage__content}>
          <div className={styles.workPage__cardWrapper}>
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Work