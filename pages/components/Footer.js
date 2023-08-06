import styles from '/styles/Home.module.css';

const Footer = ({ Footer }) => {

    const Foot = () => {
        return (
            <footer>
                <a
                href="https://www.jamk.fi/fi"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src="/jamk_logo.png" alt="JAMK" className={styles.logo} />
                </a>
                <a
                href="https://www.wimmalab.org/"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src="/wimma.png" alt="WimmaLab" className={styles.logo} />
                </a>
                <a
                href="https://www.wimmalab.org/"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src="/logo-pengwin.png" alt="WimmaLab-Pengwin-Media" className={styles.logo} />
                </a>
            </footer>
        )
    }

    return (
        <div>
            <Foot />
        </div>
        )
}

export default Footer