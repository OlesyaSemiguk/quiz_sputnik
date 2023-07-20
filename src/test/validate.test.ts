import { square } from './vaildate'

describe('square', () => {
  test('Корректное значение', () => {
    expect(square(2)).toBe(4)
  })
})
