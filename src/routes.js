import React from 'react'

import { Provider } from 'react-redux'

//define you saga in store file here
import { store, history } from './store';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { isAuthenticated } from './auth';

import Main from './components/Main'
import Login from './components/Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.history.location } }} />
        )
    }
    />
)

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Login /> } />
        <Route exact path='/login' component={() => <Login /> } />
        <Route exact path='/signup' component={() => <Login /> } />
        <PrivateRoute exact path='/dashboard' component={() => <Main /> } />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Routes;
