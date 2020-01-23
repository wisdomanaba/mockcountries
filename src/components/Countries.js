import React, { Component } from 'react'
import axios from 'axios'
import Mockoffline from './Mockoffline'

class Countries extends Component {

      constructor(props){
            super(props)
            this.state = {  
                  countries: [

                  ]
            }
      }

      componentDidMount(){
            axios.get('https://restcountries.eu/rest/v2/all')
                  .then(response => {
                        this.setState({...this.state, countries: response.data})
                  })
                  .catch(err => {
                        this.setState({...this.state, countries: Mockoffline})
                  })
      }

      render() {
            return (
                        this.state.countries.map((country, index) => (
                              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={index}>
                                    <div className="card" style={{width: '15rem', margin: '30px'}}>
                                          <img src={country.flag} className="card-img-top" alt="Country flag" />
                                          <div className="card-body">
                                                <h5 className="card-title" style={{color: '#28a745', textAlign: 'center'}}>{country.name}</h5>
                                          </div>
                                          <ul className="list-group list-group-flush" style={{textAlign: 'center'}}>
                                                <li className="list-group-item"><b>Capital:</b> {country.capital}</li>
                                                <li className="list-group-item"><b>Population:</b> {country.population}</li>
                                                <li className="list-group-item"><b>Timezones:</b> {country.timezones}</li>
                                          </ul>
                                          <button className="btn btn-success">Read more</button>
                                    </div>
                              </div>
                        ))
            );
      }
}

export default Countries