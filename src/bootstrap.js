import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
// import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Layout from './components/layout';

import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import history from './history';

import requireAuth from './components/requireAuth';

class Dashboard extends Component {
  render() {
    return (
      <div>
        hey there
      </div>
    )
  }
}

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch >
          <Layout>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signIn'component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>

             <Route path='/dashboard' component={requireAuth(Dashboard)}/>
          </Layout>

        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
