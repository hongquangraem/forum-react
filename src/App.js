import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './components/Layout/ScrollToTop'
import Header from './components/Layout/Header'
import Login from './components/Auth/Login'
import GeneralLayout from './components/Layout/GeneralLayout'

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Header />
        <Switch>
          <Route
            path="/"
            render={props => (
              <GeneralLayout>
                <Login {...props} />
              </GeneralLayout>
            )}
          />
          <Route
            path="/stream"
            render={props => (
              <GeneralLayout>
                <Login {...props} />
              </GeneralLayout>
            )}
          />
          <Route path="/abc" render={() => <div>xxx</div>} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  )
}

export default App
