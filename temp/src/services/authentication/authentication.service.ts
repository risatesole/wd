import UserSignupModel from '../../models/user-signup.model.js'
import UserSignInModel from '../../models/user-signin.model.js'

export default class AuthService {
  constructor() {}
  async signUp(user: UserSignupModel) {
    console.log('so you are trying to signup this user: ')
    console.log(user.getName())
  }
  async signIn(user: UserSignInModel) {
    console.log('trying to sign in with username: ')
    console.log(user.getEmail())
  }
}
