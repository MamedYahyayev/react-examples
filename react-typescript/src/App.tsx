import React from 'react';
import './App.css';
import Header from './Header';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Hello From TypeScript</h1>
            <Header name="Samir" surname="Samirov" age={223} isActive={true} />
        </div>
    );
};

export default App;
