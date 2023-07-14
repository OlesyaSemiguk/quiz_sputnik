import { initializeApp } from 'firebase/app'

// console.log(process.env, 'aasda')
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BASKET,
//   messagingSenderId: process.env.MESSAGING_SENDLER_ID,
//   appId: process.env.APP_ID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyBssxDFsV1iClMXg_cvpudDZj52566q6B0',
  authDomain: 'quiz-4122a.firebaseapp.com',
  projectId: 'quiz-4122a',
  storageBucket: 'quiz-4122a.appspot.com',
  messagingSenderId: '917876704889',
  appId: '1:917876704889:web:801be71dda0b9f3d25f6a8',
}
const app = initializeApp(firebaseConfig)
