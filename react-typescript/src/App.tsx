import React, { useState } from 'react';
import './App.css';
import { Content } from './Content';
import Header from './Header';
import { Movie } from './Movie';

const App: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const onClickHandler = (): void => {
        setCounter(counter + 1);
    };

    return (
        <div className="App">
            <h1>Hello From TypeScript</h1>
            <button onClick={onClickHandler}>Increment Counter</button>
            <Header name="Samir" surname="Samirov" age={223} isActive={true} />
            <Content counter={counter} />
            <Movie ratings={8.9}/>
        </div>
    );
};

export default App;
