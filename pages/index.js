import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Study Sponge</title>
        <meta name="Study Sponge" content="Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Study Sponge!</a>
        </h1>

        <p className={styles.description}>
          Check back soon for some exciting news!
        </p>

      </main>

      <footer className={styles.footer}>
        <a>
        Study Sponge 2022
        </a>
      </footer>
    </div>
  )
}
