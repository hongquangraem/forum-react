import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import './index.css'
import store, { persistor } from './store'
import App from './App'
import { AppTheme } from './theme'
import { history } from './utils/history'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={AppTheme}>
        <App history={history} />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
