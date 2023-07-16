import React from 'react'
import styles from '@/styles/PhotosComponent.module.scss';
import CustomButton from './CustomButton';
import PhotoGrid from '@/components/PhotoGrid'
const Photos = () => {
  return (
     <section className={styles.photoscomponent__wrapper}>
       <div className={styles.photoscomponent__text}>
          <h2>photography.</h2>
        </div>
      <div className={styles.photoscomponent__inner}>
        <PhotoGrid />
       
      </div>
       {/* <div className={styles.photoscomponent__button}>
           <CustomButton 
            title="read more"
          />
          </div> */}
    </section>
  )
}

export default Photos