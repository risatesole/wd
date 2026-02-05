import AuthValidator from './auth.validator' // adjust path
import { UserSignupInterface } from '../interfaces/user.interface.js'
import UserSignup from '../models/user-signup.model'

describe('Auth validator test', () => {
  let validator: AuthValidator
  let user: UserSignup
  beforeEach(() => {
    validator = new AuthValidator()
  })
  it('should pass if all data is valid', () => {
    const user = new UserSignup(
      'user@example.com',
      'strongPassworD1@',
      'user',
      'usersName'
    )

    // Testing that it does NOT throw any error
    expect(() => validator.signUpValidator(user)).not.toThrow()
  })
})
