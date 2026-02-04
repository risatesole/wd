import UserSignup from '../../models/user-signup.model.js'
import UserSignIn from '../../models/user-signin.model.js'

export default class AuthService {
  constructor() {}
  async signUp(user: UserSignup) {
    console.log('so you are trying to signup this user: ')
    console.log(user.getName())
  }
  async signIn(user: UserSignIn) {
    console.log('trying to sign in with username: ')
    console.log(user.getEmail())
  }
}
