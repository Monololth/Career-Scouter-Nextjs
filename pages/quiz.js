import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import { useTranslation } from 'react-i18next';

function GetTranslation (asd) {
  const { t, i18n } = useTranslation();
  return <>{t(asd)}</>
}

export default function Quizt() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Career Scouter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />

      {/* Main content begins here */}
      <main className={styles.content_wrapper}>

        <h1 className={styles.title}>
          <highlight>{GetTranslation("quiz")}</highlight>
        </h1>

        <h3 className={styles.title_h3}>
          {GetTranslation("quiz1")}
        </h3>
        <p className={styles.description}>
          {GetTranslation("quiz2")}
        </p>

        {/* Placeholder for <iframe> script */}

        <div className={styles.grid}>
          <a href="https://forms.office.com/e/yivawJfnqR" className={styles.card}>
            <h3>Placeholder &rarr;</h3>
            <p>Currently links to the form.</p>
          </a>
        </div>
      </main>

      <Footer />

    </div>
  )
}