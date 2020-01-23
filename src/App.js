import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Countries from './components/Countries'

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

export default App;
