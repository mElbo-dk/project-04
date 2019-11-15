import React from 'react'
import { withRouter } from 'react-router-dom'


class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Version Control Doc</strong> by <a href="https://github.com/mElbo-dk/project-04">Old People</a>. This website is powered by Elbo Grease
          </p>
        </div>
      </footer>
    )
  }
}





export default withRouter(Footer) 