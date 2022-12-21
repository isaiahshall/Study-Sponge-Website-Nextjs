import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar/NavBar";
import styles from "../styles/Home.module.css";
import Link from "next/link";


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
        <span className={styles.hero}>
          <Image
            src="/resources/Home-Photo-1.png"
            alt="Product Image"
            
            objectFit='contain'
            height={500}
            width={500}
  
            
          ></Image>
        </span>
        <h1 className={styles.title}>Revolutionizing Online Math Help.</h1>
        <p className={styles.buttonHeader}>
          Help us design our platform for YOUR needs by taking 30 seconds to
          answer a few easy questions.
        </p>
        <Link href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAc13tdlUN0M3T0tJQ0M2QzNYVE5TTEtITldKV0dHTi4u">
          <button className={styles.emailButton}>Share my input.</button>
        </Link>
        <p className={styles.buttonHeader}>
          Want to be notified when we release our beta?
        </p>
        <Link href="http://eepurl.com/ifk9gX">
          <button className={styles.emailButton}>Sign me up!</button>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a>Study Sponge 2022</a>
      </footer>
    </div>
  );
}
