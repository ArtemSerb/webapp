// Карта соответствия URL загруженного файла - режиму
export const C_PATH_TO_MODE = {
  'index.html': 'signup',
  'login.html': 'signin',
  'users.html': 'main',
}

// Конфиг FireBase
const firebaseConfig = {
  apiKey: "AIzaSyDmvpEsnA6GvvcibDYAMNHNoeJ8adtK3c8",
  authDomain: "todos-c73e8.firebaseapp.com",
  projectId: "todos-c73e8",
  storageBucket: "todos-c73e8.appspot.com",
  messagingSenderId: "1085779113165",
  appId: "1:1085779113165:web:f2b5c064439393476b6584",
  measurementId: "G-6LY9HPVFCH",
}

// Инициализация FireBase объектов и экспорт для использования извне
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
