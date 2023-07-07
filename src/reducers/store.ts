import { combineReducers, createStore, applyMiddleware } from 'redux'
import reposReducer, { Quiz } from './reposReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
export interface RootState {
  state: Quiz
}

const rootReducer = combineReducers<RootState>({
  state: reposReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
