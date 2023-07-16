import React from 'react'
import styles from "@/styles/Footer.module.scss"
const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer__inner}>
        <p className={styles.footer__text}>@2023 scottpick</p>
      </div>
    </footer>
  )
}

export default Footer