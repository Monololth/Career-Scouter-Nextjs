import styles from '../styles/Home.module.css';
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import './i18n';
import { useTranslation } from 'react-i18next';

function GetTranslation (asd) {
  const { t, i18n } = useTranslation();
  return <>{t(asd)}</>
}

export default function Home() {
  return (
    <div className={styles.container}>

      <Header />
      <Nav />

      {/* Main content begins here */}
      <main className={styles.content_wrapper}>

        <h1 className={styles.title}>
          {GetTranslation("greet1")}<highlight> {GetTranslation("greet2")}</highlight>
        </h1>

        <p className={styles.description}>
          {GetTranslation("description1")}
        </p>

        <div className={styles.grid2}>
          <a href="/careers" className={styles.card2}>
            <h3>Career &rarr;</h3>
            <p>Career description</p>
          </a>
        </div>

        <p className={styles.description}>
          <>{GetTranslation("quizdesc")}</>
        </p>

        <div className={styles.grid}>
          <a href="/quiz" className={styles.card}>
            <h3>Career Scouter Quiz &rarr;</h3>
            <p>{GetTranslation("quizcard")}</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Career Scouter</p>
          </a>
        </div>
      </main>

      <Footer />

    </div>
  )
}
