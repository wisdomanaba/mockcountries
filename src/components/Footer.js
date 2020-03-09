import React, { Component } from 'react'

class Footer extends Component {
      render() {
            const date = new Date()
            return (
                  <div className="header">
                        <p>Copyright &copy; Wisdom Anaba {date.getFullYear()}. All right reserved </p>
                  </div>
            )
      }
}

export default Footer
