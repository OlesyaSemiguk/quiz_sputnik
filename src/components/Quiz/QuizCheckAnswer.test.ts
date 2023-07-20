import { QuizCheckAnswer } from './QuizCheckAnswer'

describe('QuizCheckAnswer', () => {
  test('Функция проверки ответов', () => {
    expect(QuizCheckAnswer({ 1: 1, 2: 3, 3: 3, 4: 3, 5: 1, 6: 2, 7: 0 })).toBe(
      7,
    )
    expect(QuizCheckAnswer({})).toBe(0)
    expect(QuizCheckAnswer({ 1: 0, 2: 2, 3: 2, 4: 1, 5: 0, 6: 1, 7: 1 })).toBe(
      0,
    )
    expect(QuizCheckAnswer({ 1: 1, 2: 3, 3: 3, 4: 1, 5: 2 })).toBe(3)
  })
})
