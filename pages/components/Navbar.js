import styles from '/styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function GetTranslation (asd) {
    const { t, i18n } = useTranslation();
    return <>{t(asd)}</>
}

const Navbar = ({ Nav }) => {

    const Navititle = ({ active, children }) => {
        return (
          <div className={`custom-link ${active ? 'active' : ''}`}>
            {children}
          </div>
        );
      };

    const Bar = () => {
        const router = useRouter();
        return (
            <navibar>
                    <Link href="/">
                        <navititle className={router.pathname === '/' ? 'active' : ''}>{GetTranslation("home")}</navititle>
                    </Link>
                    <Link href="/careers">
                        <navititle className={router.pathname === '/careers' ? 'active' : ''}>{GetTranslation("careers")}</navititle>
                    </Link>
                    <Link href="/quiz">
                        <navititle className={router.pathname === '/quiz' ? 'active' : ''}>{GetTranslation("quiz")}</navititle>
                    </Link>
                    <Link href="/contact">
                        <navititle className={router.pathname === '/contact' ? 'active' : ''}>{GetTranslation("contact")}</navititle>
                    </Link>
                    <Link href="/about">
                        <navititle className={router.pathname === '/about' ? 'active' : ''}>{GetTranslation("about")}</navititle>
                    </Link>
                {/* Add more navigation items as needed */}
            </navibar>
        )
    }

    return (
        <div>
            <Bar />
        </div>
        )
}

export default Navbar