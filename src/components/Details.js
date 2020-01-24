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
                        <div style={{height: "30%"}}>
                              <img style={{width: "100%", height: "100%"}} src={country.flag} alt="Country flag" />
                              <div style={{width: "100%", height: "100%", background: "red", zIndex: 1000}}></div>
                        </div>
                        <h1>country name: {country.name}</h1>
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