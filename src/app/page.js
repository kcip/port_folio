import Image from "next/image";
//STYLES
import styles from "@/styles/Home.module.scss";
import HERO from "@/assets/me-2.jpg";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className={styles.home__main}>
      <div className={`image_container ${styles.home__image}`}>
        <Image src={HERO} alt="me" fill priority />
      </div>
      <div className={styles.home__navigation}>
        <Navbar />
      </div>
    </main>
  );
}
