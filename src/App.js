import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './components/Layout/ScrollToTop'
import Nav from './components/Layout/Nav'
import Login from './components/Auth/Login'
import Banner from './components/Layout/Banner'

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Nav />
        <Banner />
        <div style={{ paddingTop: 60 }}>
          <Switch>
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/abc" render={() => <div>xxx</div>} />
          </Switch>
        </div>
      </Suspense>
    </ConnectedRouter>
  )
}

export default App
