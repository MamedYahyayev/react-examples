import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './App.css';
function App() {
    let language: string[];
    language = ['en', 'az'];
    const [locale, setLocale] = useState<string>('en');

    const { t } = useTranslation();

    function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        i18next.changeLanguage(e.target.value);
        setLocale(e.target.value);
    }

    return (
        <div className="App">
            <h1>Current Language: {locale}</h1>
            <select className="languages" onChange={(e) => handleLanguageChange(e)} defaultValue={locale}>
                {language.map((lang, index) => {
                    return (
                        <option key={index} value={lang}>
                            {lang}
                        </option>
                    );
                })}
            </select>

            <div className="navigation">
                <a href="#home">{t('navigation.home')}</a>
                <a href="#about">{t('navigation.about')}</a>
                <a href="#services">{t('navigation.services')}</a>
                <a href="#cards">{t('navigation.cards')}</a>
                <a href="#transfer">{t('navigation.transfer')}</a>
            </div>
        </div>
    );
}

export default App;
