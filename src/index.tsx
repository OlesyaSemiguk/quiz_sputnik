import React from 'react'
import { App } from 'app/App'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from 'reducers/store'
const root = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
console.log(store)
ReactDOM.render(root, document.getElementById('root'))
