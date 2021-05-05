import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollToTop from './components/Layout/ScrollToTop'
import Nav from './components/Layout/Nav'
import Header from './components/Layout/Header'

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Nav />
        <Switch>
          <Route path="/" component={Header} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  )
}

export default App
