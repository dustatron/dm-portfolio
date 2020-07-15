import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Project from './pages/Project';

function App() {
  return (
    <Fragment>
      <div className='grid-container'>
        <div className='grid-container-left'>
          <NavBar />
        </div>
        <div className='grid-container-center'>
          <Switch>
            <Route path='/proj/:id' component={Project} />
            <Route exact path='/home' component={Home} />
            <Route path='/'>
              <Redirect to={'/home'} />
            </Route>
          </Switch>
        </div>
        <div className='grid-container-right'></div>
      </div>
    </Fragment>
  );
}

export default App;