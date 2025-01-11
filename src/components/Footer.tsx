import { useTranslation } from 'react-i18next';
import { FC, useEffect } from 'react';
import ru from '!/flags/ru.png';
import en from '!/flags/en.png';

export const Footer: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    void i18n.changeLanguage(newLang);
    window.localStorage.setItem('language', newLang);
  };

  useEffect(() => {
    void i18n.changeLanguage(window.localStorage.getItem('language')!);
  }, []);

  return (
    <footer className="my-12 flex justify-end mr-14">
      <a href={'#'} onClick={handleLanguageChange}>
        <img
          src={i18n.language === 'ru' ? ru : en}
          className={'w-16 flex h-10 drop-shadow-lg rounded-lg'}
          alt={'flag'}
        />
      </a>
    </footer>
  );
};
