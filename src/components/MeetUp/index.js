import {Component} from 'react'
import {Link} from 'react-router-dom'
import MeetContext from '../MeetContext'
import {
  MainContainer,
  NavImage,
  MeetUpContainer,
  Heading,
  Para,
  RegisterButton,
  HomeImage,
} from './styledComponents'

class MeetUp extends Component {
  renderWelcomeText = () => (
    <MeetContext.Consumer>
      {value => {
        const {name, meetName} = value

        return (
          <>
            {name === '' ? (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Para>Please register for the topic</Para>
                <Link to="/register">
                  <RegisterButton type="button">Register</RegisterButton>
                </Link>
              </>
            ) : (
              <>
                <h1>Hello {name}</h1>
                <p>Welcome to {meetName}</p>
              </>
            )}
          </>
        )
      }}
    </MeetContext.Consumer>
  )

  render() {
    return (
      <MainContainer>
        <nav>
          <NavImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </nav>
        <MeetUpContainer>
          {this.renderWelcomeText()}
          <HomeImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </MeetUpContainer>
      </MainContainer>
    )
  }
}

export default MeetUp
