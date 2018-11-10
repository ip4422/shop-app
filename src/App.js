import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Authorization from './hoc/Authorization'
import { routes } from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar routes={routes.filter(route => route.isNavBar)} />
          <Switch>
            {routes.map(route => {
              const component = route.isPrivate ? Authorization(route.component) : route.component;
              return (
                <Route
                  key={route.path}
                  exact={route.isExact}
                  path={route.path}
                  component={component}
                />
              );
            })}
          </Switch>

        </React.Fragment>
      </Router>
    );
  }
}

export default App
