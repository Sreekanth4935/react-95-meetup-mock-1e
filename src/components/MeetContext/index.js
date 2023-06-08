import React from 'react'

const MeetContext = React.createContext({
  name: '',
  updateName: () => {},
  meetName: '',
  updateMeetName: () => {},
})

export default MeetContext
