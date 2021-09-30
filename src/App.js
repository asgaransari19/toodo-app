import React from 'react'
import AddUser from './pages/AddUser'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { pagePaths } from './utils/constant'
function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact path={pagePaths.root} to={pagePaths.adduser} />
        <Route path={pagePaths.adduser} component={AddUser} />
      </Switch>
    </Router>
  )
}

export default App
