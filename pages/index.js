import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar/NavBar";
import styles from "../styles/Home.module.css";
import Logo from "../resources/Sponge-Text-Logo.png";
import HeroPhoto from "../resources/Home-Photo-1.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Study Sponge</title>
        <meta name="Sponge" content="Product Introduction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Image
          src={HeroPhoto}
          alt="Product Image"
          height={1250}
          position={"fixed"}
        ></Image>
        <h1 className={styles.title}>Revolutionizing Online Math Help.</h1>
        <p className={styles.description}>Check back soon for more updates!</p>
      </main>

      <footer className={styles.footer}>
        <a>Study Sponge 2022</a>
      </footer>
    </div>
  );
}
