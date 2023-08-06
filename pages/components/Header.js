import styles from '/styles/Home.module.css';
import LanguageSwitcher from './LanguageSwitcher';
import Head from 'next/head';

const Heading = ({ Headers }) => {

    const Header = () => {
        return (
            <>
                <Head>
                    <title>Career Scouter</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.header}>
                    <img src="/main_logo_2.png" alt="JAMK" className={styles.headerlogo} />
                    <div className={styles.header_right}>
                        <LanguageSwitcher />
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <Header />
        </div>
        )
}

export default Heading