"use client"
import React, {useState, Fragment} from 'react'
import useToggle from '@/hooks/useToggle'
import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'
import Link from 'next/link'
import { links } from '@/constants'
import { motion } from 'framer-motion'
import styles from "@/styles/MobileNav.module.scss"
const menuVariants = {
  hidden: {
    x: '150%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    },
  },
};




const MobileNav = () => {
  const [openMenu, setOpenMenu] = useToggle(null);
  


  return (
    <header className={styles.mobileNav__header}>
      <div className={styles.mobileNav__iconContainer}>
        {/* <span className={`${styles.mobileNav__icons} ${styles.open}`} onClick={()=> setOpenMenu(true)}>
          <CgMenuRight />
        </span> */}
        <span className={`${styles.mobileNav__icons} ${styles.close}`} onClick={()=> setOpenMenu(!openMenu)}>
          <IoMdClose />
        </span>
      </div>
      <motion.nav 
        className={styles.mobileNav}
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ''}
      >
      <ul className={styles.mobileNav__ul}>
        {links.map((item)=> (
          <li className={styles.mobileNav__li} key={item.label}>
            <Link className={styles.mobileNav__link} as={item} href={`${item.href}`} onClick={()=> setOpenMenu(!openMenu)}>{item.label}</Link></li>
        ))}
      </ul>
    </motion.nav>
    </header>
  )
}

export default MobileNav