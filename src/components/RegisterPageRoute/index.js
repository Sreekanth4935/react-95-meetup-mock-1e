import {Component} from 'react'
import MeetContext from '../MeetContext'
import {
  MainContainer,
  NavImage,
  RegisterContainer,
  RegisterImage,
  Heading,
  InputLabel,
  NameInput,
  InputSelect,
  FormSubmitButton,
  ErrorMsg,
} from './styledComponents'

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

let inputName = ''

class RegisterPageRoute extends Component {
  state = {
    errorMsg: '',
  }

  updateActiveTopic = () => (
    <MeetContext.Consumer>
      {value => {
        const {updateMeetName} = value
        const updateNewName = event => {
          updateMeetName(event.target.value)
        }
        return (
          <>
            <InputSelect onChange={updateNewName}>
              {topicsList.map(eachTopic => (
                <option value={eachTopic.id} key={eachTopic.id}>
                  {eachTopic.displayText}
                </option>
              ))}
            </InputSelect>
          </>
        )
      }}
    </MeetContext.Consumer>
  )

  updateInputName = () => (
    <MeetContext.Consumer>
      {value => {
        const {updateName, name} = value
        const updateNewName = event => {
          updateName(event.target.value)
        }
        inputName = name
        return (
          <>
            <InputLabel>
              Name
              <NameInput onChange={updateNewName} type="text" />
            </InputLabel>
          </>
        )
      }}
    </MeetContext.Consumer>
  )

  handleSubmit = event => {
    event.preventDefault()

    if (inputName === '') {
      this.setState({
        errorMsg: 'Please enter your name',
      })
    } else {
      this.setState({
        errorMsg: '',
      })
      const {history} = this.props
      history.replace('/')
    }
    console.log(this.props)
  }

  render() {
    const {errorMsg} = this.state
    return (
      <MainContainer>
        <nav>
          <NavImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </nav>
        <RegisterContainer>
          <RegisterImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <div>
            <form onSubmit={this.handleSubmit}>
              <Heading>Let Us Join</Heading>

              {this.updateInputName()}
              <InputLabel>
                TOPICS
                {this.updateActiveTopic()}
              </InputLabel>
              <FormSubmitButton type="submit">Register Now</FormSubmitButton>
            </form>

            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </div>
        </RegisterContainer>
      </MainContainer>
    )
  }
}

export default RegisterPageRoute
