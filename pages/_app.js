import '../styles/globals.css';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}