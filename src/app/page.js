import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Thoughts from "@/components/Thoughts";
import Photos from "@/components/Photos";
export default function Home() {
  return (
    <main className={styles.home__main}>
      <Hero />
      <Work />
      <Thoughts />
      <Photos />
    </main>
  );
}
