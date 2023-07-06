export interface Question {
  id: number
  questionText: string
  answers: {
    textAnswer: string
    correct: number
  }[]
}

export const questionsData: Question[] = [
  {
    id: 1,
    questionText: 'Столица Индии?',
    answers: [
      { textAnswer: 'Берлин', correct: 0 },
      { textAnswer: 'Нью-Дели', correct: 1 },
      { textAnswer: 'Дели', correct: 0 },
      { textAnswer: 'Лион', correct: 0 },
    ],
  },
  {
    id: 2,
    questionText: 'Столица Мексики?',
    answers: [
      { textAnswer: 'Антананариву', correct: 0 },
      { textAnswer: 'Мексика', correct: 1 },
      { textAnswer: 'Копенгаген', correct: 0 },
      { textAnswer: 'Мехико', correct: 0 },
    ],
  },
  {
    id: 3,
    questionText: 'Столица Греции?',
    answers: [
      { textAnswer: 'Берн', correct: 0 },
      { textAnswer: 'Вадуц', correct: 1 },
      { textAnswer: 'Вена', correct: 0 },
      { textAnswer: 'Афины', correct: 0 },
    ],
  },
  {
    id: 4,
    questionText: 'Столица Перу?',
    answers: [
      { textAnswer: 'Берлин', correct: 0 },
      { textAnswer: 'Варшава', correct: 1 },
      { textAnswer: 'Дели', correct: 0 },
      { textAnswer: 'Лима', correct: 0 },
    ],
  },
  {
    id: 5,
    questionText: 'Столица Мьянмы?',
    answers: [
      { textAnswer: 'Мехико', correct: 0 },
      { textAnswer: 'Нейпьидо', correct: 1 },
      { textAnswer: 'Дели', correct: 0 },
      { textAnswer: 'Мапуту', correct: 0 },
    ],
  },
  {
    id: 6,
    questionText: 'Столица Абхазии?',
    answers: [
      { textAnswer: 'Мехико', correct: 0 },
      { textAnswer: 'Нейпьидо', correct: 0 },
      { textAnswer: 'Сухум', correct: 1 },
      { textAnswer: 'Мапуту', correct: 0 },
    ],
  },
  {
    id: 7,
    questionText: 'Столица Бельгии?',
    answers: [
      { textAnswer: 'Брюссель', correct: 1 },
      { textAnswer: 'Нейпьидо', correct: 0 },
      { textAnswer: 'Дели', correct: 0 },
      { textAnswer: 'Мапуту', correct: 0 },
    ],
  },
]
