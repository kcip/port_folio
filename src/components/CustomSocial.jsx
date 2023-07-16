"use client"
import React from 'react'
import styles from '@/styles/CustomSocial.module.scss'
const CustomSocial = ({socialType, title}) => {
  return (
    <div className={styles.customSocial}>{title}</div>
  )
}

export default CustomSocial