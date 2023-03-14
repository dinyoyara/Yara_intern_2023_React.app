import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global.css';
import Header from './components/Header';
import Main from './components/Main';
import ErrorPage from './components/ErrorPage';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/not-found' component={ErrorPage} />
                <Route path='/' component={Main} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
