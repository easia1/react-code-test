import React, { useContext } from 'react';
import { Context } from './context/Context';
import './App.css';
import { Load } from './api';
import List from './components/results/List';
import Search from './components/search/Search';
import logo from './components/logo.svg';

function App() {
    const { query, offset, error } = useContext(Context);

    Load(query, offset);

    return (
        <main>
            {error ? (
                <div class="error">
                    An error has occurred, please refresh the page.
                </div>
            ) : (
                ''
            )}
            <img src={logo} alt="space x logo" />
            <Search />
            <List />
        </main>
    );
}

export default App;
