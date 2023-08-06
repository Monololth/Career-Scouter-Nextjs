// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t('English')}</button>
      <button onClick={() => changeLanguage('fi')}>{t('Finnish')}</button>
    </div>
  );
};

export default LanguageSwitcher;