import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from './components/NotFound'
import Register from './components/Register'
import Home from './components/Home'
import context from './context/context'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

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

// Replace your code here
class App extends Component {
  state = {
    name: '',
    activeCapitalId: topicsList[0].id,
    showSubmitError: false,
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeCapital = activeCapitalId => {
    this.setState({activeCapitalId})
  }

  onChangeShowError = () => {
    this.setState({showSubmitError: true})
  }

  render() {
    const {name, activeCapitalId, showSubmitError} = this.state
    return (
      <context.Provider
        value={{
          name,
          activeCapitalId,
          showSubmitError,
          onChangeName: this.onChangeName,
          onChangeCapital: this.onChangeCapital,
          onChangeShowError: this.onChangeShowError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </context.Provider>
    )
  }
}

export default App
