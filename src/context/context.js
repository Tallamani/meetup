import React from 'react'

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

const Context = React.createContext({
  name: '',
  activeCapitalId: topicsList[0].id,
  onChangeName: () => {},
  onChangeCapital: () => {},
  onChangeShowError: () => {},
  showSubmitError: false,
})

export default Context
