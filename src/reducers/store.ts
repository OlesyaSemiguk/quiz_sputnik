import { combineReducers, createStore, applyMiddleware } from 'redux'
import quizReducer from './quiz/quizReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer, { AuthState } from './auth/authReducer'
import { Quiz } from './quiz/quizState'

export interface RootState {
  stateQuiz: Quiz
  stateAuth: AuthState
}

const rootReducer = combineReducers<RootState>({
  stateQuiz: quizReducer,
  stateAuth: authReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
