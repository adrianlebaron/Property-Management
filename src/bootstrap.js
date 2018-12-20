import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
// import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';

import Layout from './components/layout';

//AUTH
import requireAuth from './components/requireAuth';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';

//DASHBOARD
import Dashboard from './components/dashboard';
import TabNav from './components/tabnav';
import NewNewsletter from './components/newsletter/newsletterNew';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch >
          <Layout>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signIn'component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
            <Route path='/tabnav' component={TabNav}/>

             <Route path='/dashboard' component={Dashboard}/>
             <Route path='/newsletter/new' component={requireAuth(NewNewsletter)}/>
          </Layout>

        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
