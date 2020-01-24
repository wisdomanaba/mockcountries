import React, { Component } from 'react'

export class Details extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  
            }
      }
      
      render() {
            const {history} = this.props
            const {country} = history.location

            return (
                  <div>
                        <h1 className="countryname" style={{top: 130, right: 550, color: "#fff", position: "absolute", zIndex: 10 }}>{ country.name }</h1>
                        <div className="countryimage" style={{ height: "60vh" }}>
                              <img style={{ width: "100%", height: "100%", filter: "brightness(20%)" }} src={ country.flag } alt="Country flag" />
                        </div>
                        <br />
                        <br />
                        <div>
                              <ul className="list-group">
                                    <li className="list-group-item"><b>TopLevelDomain:</b> { country.topLevelDomain }</li>             <li className="list-group-item"><b>Alpha2Code:</b> { country.alpha2Code }</li>
                                    <li className="list-group-item"><b>Alpha3Code:</b> { country.alpha3Code }</li>
                                    <li className="list-group-item"><b>CallingCodes:</b> { country.callingCodes }</li>
                                    <li className="list-group-item"><b>Capital:</b> { country.capital }</li>
                                    <li className="list-group-item"><b>Region:</b> { country.region }</li>
                                    <li className="list-group-item"><b>Subregion:</b> { country.region }</li>
                                    <li className="list-group-item"><b>Population:</b> { country.population }</li>
                                    <li className="list-group-item"><b>Timezones:</b> { country.timezones }</li>
                                    <li className="list-group-item"><b>Currency Name:</b> { country.currencies.map(currency => currency.name ) }</li>
                                    <li className="list-group-item"><b>Currency Code:</b> { country.currencies.map(currency => currency.code ) }</li>
                                    <li className="list-group-item"><b>Currency Symbol:</b> { country.currencies.map(currency => currency.symbol ) }</li>
                                    <li className="list-group-item"><b>Language:</b> { country.languages.map(language => language.name ) }</li>
                              </ul>
                        </div>
                        
                  </div>
            )
      }
}

export default Details


// import React from 'react'

// function Details({history}) {
//       const {country} = history.location
//       return (
//         <div>
//             <h1>country name: {country.name}</h1>
//             <h1>Holla</h1>
//         </div>
//       );
// }


// export default Details