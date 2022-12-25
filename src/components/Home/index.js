import {Link} from 'react-router-dom'
import context from '../../context/context'
import './index.css'

/*
`Welcome to ${activeCapitalId}`
*/

const Home = () => (
  <context.Consumer>
    {value => {
      const {name, activeCapitalId} = value
      const Greet = name === '' ? 'Welcome to Meetup' : `Hello ${name}`
      const Para =
        name === '' ? 'Please register for the Topic' : activeCapitalId
      const Value = name === ''
      return (
        <>
          <nav className="Nav-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="image-logo"
            />
          </nav>
          <div className="container1">
            <h1 className="heading1">{Greet}</h1>
            <p className="para">{Para}</p>
            {Value && (
              <Link to="/register">
                <button type="button" className="button">
                  Register
                </button>
              </Link>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="image1"
            />
          </div>
        </>
      )
    }}
  </context.Consumer>
)
export default Home
