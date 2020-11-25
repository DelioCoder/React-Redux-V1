import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Results from './components/results';
import Details from './components/details';

import store from './redux/store';

const Root = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/results" component={Results}></Route>
                <Route path="/details/:itemId" component={Details}></Route>
                <Redirect from="/" to="/results"></Redirect>
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));