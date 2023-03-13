import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global.css';
import Header from './Header';
import Main from './main';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Main />
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
