"use client"
import styles from '@/styles/CustomButton.module.scss'
const CustomButton = ({ btnType, title}) => {
  return (
    <button
      type={btnType || "button"}
      className={styles.customButton}
    >
      <span>{title}</span>
    </button>
  )
}

export default CustomButton