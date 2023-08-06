import styles from '../styles/Home.module.css';
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>

      <Header />
      <Nav />

      <main className={styles.content_wrapper}>
        <h1 className={styles.title}>
          404 - Page Not Found
        </h1>
        <p className={styles.description}>
          The page you are looking for does not exist.
        </p>
        <p className={styles.generic_button_base}>
          <a href='/' className={styles.generic_button_object}>Return to homepage</a>
        </p>

      </main>

      <Footer />
      
    </div>
  );
};

export default NotFoundPage;