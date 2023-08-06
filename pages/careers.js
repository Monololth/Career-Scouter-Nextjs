import Nav from './components/Navbar'
import styles from '../styles/Home.module.css';
import Footer from './components/Footer'
import Header from './components/Header'
import CareersData from './components/CareerData';

export default function Careers() {
  return (
    <div className={styles.container}>

      <Header />
      <Nav />

      {/* Main content begins here */}
      <main className={styles.content_wrapper}>

          <CareersData />
        
      </main>

      <Footer />

    </div>
  )
}