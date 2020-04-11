import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Countries from './components/Countries'
import Details from './components/Details'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AdSense from 'react-adsense';

function App() {
  return (
    <div>
      <Header />
      <br />
      <br />
        <AdSense.Google
          client='ca-pub-1358543966260909'
          slot='2136405413'
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
        />
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
