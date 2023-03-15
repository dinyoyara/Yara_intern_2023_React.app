import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';
import GlobalStyle from './styles/global.css';
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
