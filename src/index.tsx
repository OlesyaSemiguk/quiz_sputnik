import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from 'reducers/store'
import 'firebase'
import { App } from 'app/App'

const root = (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

ReactDOM.render(root, document.getElementById('root'))
