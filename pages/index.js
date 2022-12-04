import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar/NavBar";
import styles from "../styles/Home.module.css";
import Logo from "../resources/Sponge-Text-Logo.png";
import HeroPhoto from "../resources/Home-Photo-1.png";
import Mailchimp from "react-mailchimp-subscribe";

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
        <p className={styles.buttonHeader}>
          Help us design our platform for YOUR needs by taking 30 seconds to
          answer a few easy questions.
        </p>
        <button
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAc13tdlUN0M3T0tJQ0M2QzNYVE5TTEtITldKV0dHTi4u"
          className={styles.emailButton}
        >
          Share my input.
        </button>
        <p className={styles.buttonHeader}>
          Want to be notified when we release our beta?
        </p>
        <button href="http://eepurl.com/ifk9gX" className={styles.emailButton}>
          Sign me up!
        </button>
      </main>

      <footer className={styles.footer}>
        <a>Study Sponge 2022</a>
      </footer>
    </div>
  );
}
