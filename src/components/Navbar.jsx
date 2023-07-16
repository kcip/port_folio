import React from 'react'
import styles from "@/styles/Navbar.module.scss"
import Link from 'next/link'
import { links } from '@/constants'

const Navbar = () => {
 
  return (
    <nav className={styles.nav}>
     <ul className={styles.nav__ul}>
       {links.map((item)=> (
        <li className={styles.nav__li} key={item.label}><Link as={item} href={`${item.href}`}>{item.label}</Link></li>
      ))} 
     
     </ul>
    </nav>
  )
}

export default Navbar