import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Countries from './components/Countries'
import Details from './components/Details'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="container">
      <div className="row">
        <Countries />
      </div>
    </div>
    </div>
  );
}

const AppRoutes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/details" component={Details} />
    </Router>
  )
}

export default AppRoutes;
