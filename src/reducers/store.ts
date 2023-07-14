import { combineReducers, createStore, applyMiddleware } from 'redux'
import quizReducer, { Quiz } from './quizReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer, { Auth } from './authReducer'

export interface RootState {
  stateQuiz: Quiz
  stateAuth: Auth
}

const rootReducer = combineReducers<RootState>({
  stateQuiz: quizReducer,
  stateAuth: authReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
