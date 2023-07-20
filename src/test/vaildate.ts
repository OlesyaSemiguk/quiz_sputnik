export const square = (number: number) => {
  if (number === 1) {
    return 1
  }
  return Math.pow(number, 2)
}
// import { square } from './vaildate'

// describe('square', () => {
//   test('Корректное значение', () => {
//     expect(square(2)).toBe(4)
//   })
// })
