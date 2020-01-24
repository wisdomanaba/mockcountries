import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Countries from './components/Countries'
import Details from './components/Details'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <Countries />
        </div>
      </div>
      <Footer />
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
