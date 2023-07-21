import {
  ChooseAnswer,
  CurrentQuestion,
  DeleteAnswer,
  FinishQuiz,
} from './quizActions'
import quizReducer from './quizReducer'
import { Quiz } from './quizState'

let state: Quiz

describe('Тест Reducer', () => {
  beforeEach(() => {
    state = {
      currentQuestion: 0,
      answers: { 0: 0, 1: 0, 2: 1 },
      isFinish: false,
    }
  })

  test('Текущий вопрос', () => {
    const stateTest = quizReducer(state, CurrentQuestion(3))
    expect(stateTest.currentQuestion).toBe(3)
  })
  test('Финиш теста', () => {
    const stateTest = quizReducer(state, FinishQuiz())
    expect(stateTest.isFinish).toBeTruthy()
  })
  test('Выбор ответа', () => {
    const stateTest = quizReducer(state, ChooseAnswer(2))
    expect(stateTest.answers).toStrictEqual({ 0: 2, 1: 0, 2: 1 })
  })
  test('Удаление ответа', () => {
    const stateTest = quizReducer(state, DeleteAnswer(0))
    expect(stateTest.answers).toStrictEqual({ 1: 0, 2: 1 })
  })
})
