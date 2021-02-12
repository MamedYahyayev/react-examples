import React, { useState } from 'react';
import './App.css';

function App() {
    let language: string[];
    language = ['en', 'az'];
    const [currentLang, setCurrentLang] = useState<string>('en');

    function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        setCurrentLang(e.target.value);
    }

    return (
        <div className="App">
            <h1>Current Language: {currentLang}</h1>
            <select className="languages" onChange={(e) => handleLanguageChange(e)} defaultValue={currentLang}>
                {language.map((lang, index) => {
                    return (
                        <option key={index} value={lang}>
                            {lang}
                        </option>
                    );
                })}
            </select>

            <div className="navigation">
                <a href="#home">Home</a>
                <a href="#home">About</a>
                <a href="#home">Services</a>
                <a href="#home">Cards</a>
                <a href="#home">Transfer</a>
            </div>
        </div>
    );
}

export default App;
