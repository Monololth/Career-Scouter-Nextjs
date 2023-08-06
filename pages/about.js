import styles from '../styles/Home.module.css';
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

export default function About() {
  return (
    <div className={styles.container}>

      <Header />
      <Nav />

      {/* Main content begins here */}
      <main className={styles.content_wrapper}>

        <h1 className={styles.title}>
          About <highlight>Career Scouter</highlight>
        </h1>

        <p className={styles.description}>
          /// WORK IN PROGRESS ///<br />
          Some description of the Careers Scouter, it's aim and purpose etc.
        </p>

      </main>

      <Footer />

    </div>
  )
}