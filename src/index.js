import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import TopBar from 'components/topBar'
import {CurrentUserProvider} from 'contexts/currentUser'
import CurrentUserCheker from 'components/currentUserChecker'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserCheker>
      <Router>
        <TopBar />
        <Routes />
      </Router>
      </CurrentUserCheker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
