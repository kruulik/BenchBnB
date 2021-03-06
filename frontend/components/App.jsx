import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { Route, Link } from 'react-router-dom';
import {AuthRoute} from '../util/route_util.jsx';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Bench BnB</h1>
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
