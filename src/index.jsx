import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Error404 from './pages/Error';
import Home from './pages/Home';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/error404">
                <Error404 />
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

