import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/post/:postId">
          <PostPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
