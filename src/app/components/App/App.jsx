import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

import Navbar from '../../../client/Phonebook/components/Navbar/components/Navbar';
import Loading from '../../../shared/components/Loading';

const HomePage = lazy(() => import('../../../client/Phonebook/pages/HomePage'  /* webpackChunkName: "HomePage" */));
const PhonebookPage = lazy(() => import('../../../client/Phonebook/pages/PhonebookPage/AppPhonebook' /* webpackChunkName: "AppPhonebook" */));
const RegisterPage = lazy(() => import('../../../client/Phonebook/pages/RegisterPage/Register' /* webpackChunkName: "RegisterPage" */));
const LoginPage = lazy(() => import('../../../client/Phonebook/pages/LoginPage/Login' /* webpackChunkName: "LoginPage" */));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */));

function App() {
    const { home, phonebook, register, login } = routes;
  return (
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={home} component={HomePage}/>
            <Route exact path={phonebook} component={PhonebookPage} />
            <Route exact path={register} component={RegisterPage} />
            <Route exact path={login} component={LoginPage} />
            <Route component={NotFoundPage}/>
            </Switch>
        </Suspense>
      </Router>
  )
}

export default App;