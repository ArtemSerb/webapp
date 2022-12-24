import { auth, db } from "../init.js"

// Модель-контейнер для операций авторизации
export class AuthModel {
  // Регистрация
  static async signup(email, password) {
    const cred = await auth.createUserWithEmailAndPassword(email, password)

    return await db.collection('users').doc(cred.user.uid).set({
      email, password
    })
  }

  // Авторизация
  static async signin(email, password) {
    return await auth.signInWithEmailAndPassword(email, password).catch(err => console.log(err))
  }

  // Выход
  static logout() {
    auth.signOut()
  }
}
