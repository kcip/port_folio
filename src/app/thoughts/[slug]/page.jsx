import React from 'react'
import styles from '@/styles/ThoughtsSlug.module.scss'
import Image from 'next/image'
import image1 from '@/assets/placeholder1.jpg'
import image2 from '@/assets/placeholder2.jpg'
const Page = () => {
  return (
    <main className={styles.thoughtsSlug__wrapper}>
      <section className={styles.thoughtsSlug__inner}> 
        <aside className={styles.thoughtsSlug__content}>
          <div className={styles.thoughtsSlug__mainImage}>
            <Image src={image1} placeholder="image"/>
            <div className={styles.thoughtsSlug__introText}>
              <h1>blog title</h1>
              <p>sub heading</p>
              <div className={styles.thoughtsSlug__date}>
                <p><span>01</span><span>/</span><span>23</span></p>
              </div>
            </div>
          </div>
          <div className={styles.thoughtsSlug__text}>
              <p>I'm baby vinyl edison bulb subway tile prism lo-fi blue bottle blackbird spyplane etsy quinoa biodiesel chartreuse. Kogi tonx XOXO, paleo cred gentrify humblebrag tumblr lyft quinoa grailed bitters chambray listicle pour-over. Grailed blackbird spyplane intelligentsia, glossier godard bespoke shabby chic roof party photo booth solarpunk twee master cleanse drinking vinegar tilde DSA. Ennui affogato gentrify irony YOLO hexagon jianbing banh mi tofu pug hammock squid shabby chic. Lyft umami raclette seitan plaid put a bird on it adaptogen 3 wolf moon roof party humblebrag lo-fi occupy. Scenester slow-carb lomo, godard tbh sartorial viral fam authentic VHS vegan tattooed. Skateboard gentrify ennui pickled, iPhone bodega boys shaman copper mug grailed tonx.</p>
              <div className={styles.thoughtsSlug__text_image}>
                <Image src={image2} placeholder="image"/>
                <Image src={image2} placeholder="image"/>
              </div>
              <p>I'm baby vinyl edison bulb subway tile prism lo-fi blue bottle blackbird spyplane etsy quinoa biodiesel chartreuse. Kogi tonx XOXO, paleo cred gentrify humblebrag tumblr lyft quinoa grailed bitters chambray listicle pour-over. Grailed blackbird spyplane intelligentsia, glossier godard bespoke shabby chic roof party photo booth solarpunk twee master cleanse drinking vinegar tilde DSA. Ennui affogato gentrify irony YOLO hexagon jianbing banh mi tofu pug hammock squid shabby chic. Lyft umami raclette seitan plaid put a bird on it adaptogen 3 wolf moon roof party humblebrag lo-fi occupy. Scenester slow-carb lomo, godard tbh sartorial viral fam authentic VHS vegan tattooed. Skateboard gentrify ennui pickled, iPhone bodega boys shaman copper mug grailed tonx.</p>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Page