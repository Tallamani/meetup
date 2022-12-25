import context from '../../context/context'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <context.Consumer>
    {value => {
      const {
        name,
        activeCapitalId,
        onChangeName,
        onChangeCapital,
        onChangeShowError,
        showSubmitError,
      } = value
      const onChangeNa = event => {
        onChangeName(event.target.value)
      }

      const onChangeCap = event => {
        onChangeCapital(event.target.value)
      }

      const submitForm = event => {
        event.preventDefault()
        if (name === '') {
          onChangeShowError()
        } else {
          const {history} = props
          history.replace('/')
        }
      }

      const renderPasswordField = () => (
        <div className="option-container">
          <label className="input-label" htmlFor="name">
            NAME
          </label>
          <input
            type="text"
            id="name"
            className="password-input-field"
            value={name}
            onChange={onChangeNa}
            placeholder="Your name"
          />
        </div>
      )

      const renderUsernameField = () => (
        <div className="name-container">
          <label className="input-label" htmlFor="topics">
            TOPICS
          </label>
          <select
            className="password-input-field"
            onChange={onChangeCap}
            value={activeCapitalId}
            id="TOPICS"
          >
            {topicsList.map(each => (
              <option key={each.id} value={each.id} className="option">
                {each.displayText}
              </option>
            ))}
          </select>
        </div>
      )

      return (
        <div className="container">
          <nav className="Nav-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="image-logo"
            />
          </nav>
          <div className="cen-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="image"
            />
            <div className="right-container">
              <h1 className="heading">Let us join</h1>
              <form className="form-container" onSubmit={submitForm}>
                {renderPasswordField()}
                {renderUsernameField()}
                <button type="submit" className="button">
                  Register Now
                </button>
                {showSubmitError && (
                  <p className="error">Please Enter Your Name</p>
                )}
              </form>
            </div>
          </div>
        </div>
      )
    }}
  </context.Consumer>
)
export default Register
