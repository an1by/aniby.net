import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    void i18n.changeLanguage(newLang);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};

// eslint-disable-next-line import/no-default-export
export default LanguageSwitcher;
