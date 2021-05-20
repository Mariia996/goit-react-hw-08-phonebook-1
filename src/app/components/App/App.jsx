import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCurrentUser } from '../../../redux/phonebook/reducer/auth/operations';
import { routes } from './routes';

import Navbar from '../../../client/Phonebook/components/Navbar/components/Navbar';
import Loading from '../../../shared/components/Loading';

const HomePage = lazy(() => import('../../../client/Phonebook/pages/HomePage'  /* webpackChunkName: "HomePage" */));
const PrivateRoute = lazy(() => import('../../components/PrivateRoute' /* webpackChunkName: "PrivateRoute" */));
const PhonebookPage = lazy(() => import('../../../client/Phonebook/pages/PhonebookPage/AppPhonebook' /* webpackChunkName: "PhonebookPage" */));
const RegisterPage = lazy(() => import('../../../client/Phonebook/pages/RegisterPage/Register' /* webpackChunkName: "RegisterPage" */));
const PublicRoute = lazy(() => import('../../components/PublicRoute' /* webpackChunkName: "PublicRoute" */));
const LoginPage = lazy(() => import('../../../client/Phonebook/pages/LoginPage/Login' /* webpackChunkName: "LoginPage" */));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
  const { home, phonebook, register, login } = routes;
  return (
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={home} component={HomePage}/>
            <PublicRoute exact path={register} restricted component={RegisterPage} redirectTo={phonebook}/>
            <PublicRoute exact path={login} restricted component={LoginPage} redirectTo={phonebook}/>
            <PrivateRoute exact path={phonebook} component={PhonebookPage} redirectTo={login}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

const mapDispatchToProp = dispatch => ({
    onGetCurrentUser: () => dispatch(getCurrentUser())
  })


export default connect(null, mapDispatchToProp)(App);