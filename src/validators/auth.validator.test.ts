import AuthValidator from './auth.validator'
import UserSignupModel from '../models/user-signup.model'

describe('Auth validator test', () => {
  let validator: AuthValidator
  let user: UserSignupModel
  beforeEach(() => {
    validator = new AuthValidator()
  })
  it('should pass if all data is valid', () => {
    const user = new UserSignupModel(
      'user@example.com',
      'strongPassworD1@',
      'user',
      'usersName'
    )
    expect(() => validator.signUpValidator(user)).not.toThrow()
  })
})
