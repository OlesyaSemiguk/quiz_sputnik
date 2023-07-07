export interface Question {
  id: number
  questionText: string
  answers: {
    textAnswer: string
    isCorrect: number
  }[]
}

export const questionsData: Question[] = [
  {
    id: 1,
    questionText: 'Столица Индии?',
    answers: [
      { textAnswer: 'Берлин', isCorrect: 0 },
      { textAnswer: 'Нью-Дели', isCorrect: 1 },
      { textAnswer: 'Дели', isCorrect: 0 },
      { textAnswer: 'Лион', isCorrect: 0 },
    ],
  },
  {
    id: 2,
    questionText: 'Столица Мексики?',
    answers: [
      { textAnswer: 'Антананариву', isCorrect: 0 },
      { textAnswer: 'Мексика', isCorrect: 0 },
      { textAnswer: 'Копенгаген', isCorrect: 0 },
      { textAnswer: 'Мехико', isCorrect: 1 },
    ],
  },
  {
    id: 3,
    questionText: 'Столица Греции?',
    answers: [
      { textAnswer: 'Берн', isCorrect: 0 },
      { textAnswer: 'Вадуц', isCorrect: 0 },
      { textAnswer: 'Вена', isCorrect: 0 },
      { textAnswer: 'Афины', isCorrect: 1 },
    ],
  },
  {
    id: 4,
    questionText: 'Столица Перу?',
    answers: [
      { textAnswer: 'Берлин', isCorrect: 0 },
      { textAnswer: 'Варшава', isCorrect: 1 },
      { textAnswer: 'Дели', isCorrect: 0 },
      { textAnswer: 'Лима', isCorrect: 0 },
    ],
  },
  {
    id: 5,
    questionText: 'Столица Мьянмы?',
    answers: [
      { textAnswer: 'Мехико', isCorrect: 0 },
      { textAnswer: 'Нейпьидо', isCorrect: 1 },
      { textAnswer: 'Дели', isCorrect: 0 },
      { textAnswer: 'Мапуту', isCorrect: 0 },
    ],
  },
  {
    id: 6,
    questionText: 'Столица Абхазии?',
    answers: [
      { textAnswer: 'Мехико', isCorrect: 0 },
      { textAnswer: 'Нейпьидо', isCorrect: 0 },
      { textAnswer: 'Сухум', isCorrect: 1 },
      { textAnswer: 'Мапуту', isCorrect: 0 },
    ],
  },
  {
    id: 7,
    questionText: 'Столица Бельгии?',
    answers: [
      { textAnswer: 'Брюссель', isCorrect: 1 },
      { textAnswer: 'Нейпьидо', isCorrect: 0 },
      { textAnswer: 'Дели', isCorrect: 0 },
      { textAnswer: 'Мапуту', isCorrect: 0 },
    ],
  },
]
