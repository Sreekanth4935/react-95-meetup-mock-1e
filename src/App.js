import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MeetUp from './components/MeetUp'
import NotFound from './components/NotFound'
import RegisterPageRoute from './components/RegisterPageRoute'
import MeetContext from './components/MeetContext'
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
    meetName: topicsList[0].displayText,
  }

  updateName = newName => {
    this.setState({
      name: newName,
    })
  }

  updateMeetName = newMeet => {
    this.setState({
      meetName: newMeet,
    })
  }

  render() {
    const {name, meetName} = this.state
    console.log('Name:', name)
    console.log('Meet Name:', meetName)

    return (
      <MeetContext.Provider
        value={{
          name,
          meetName,
          updateName: this.updateName,
          updateMeetName: this.updateMeetName,
        }}
      >
        <Switch>
          <Route exact path="/" component={MeetUp} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/register" component={RegisterPageRoute} />
          <Redirect to="not-found" />
        </Switch>
      </MeetContext.Provider>
    )
  }
}

export default App
