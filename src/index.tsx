import React from 'react'
import { App } from 'app/App'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from 'reducers/store'
import 'firebase'

const root = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(root, document.getElementById('root'))
