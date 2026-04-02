import { UserSignupInterface } from '../interfaces/user.interface.js'
import {
  InvalidNameError,
  InvalidEmailError,
  InvalidUsernameError,
  InvalidPasswordError,
} from '../error/authentication/authError.js'

export default class AuthValidator {
  private static readonly RULES = {
    name: {
      regex: /^[\p{L}\s'-]{2,50}$/u,
      error: InvalidNameError,
    },
    username: {
      regex: /^[a-zA-Z0-9_]{3,16}$/,
      error: InvalidUsernameError,
    },
    email: {
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      error: InvalidEmailError,
    },
    password: {
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      error: InvalidPasswordError,
    },
  } as const

  private validate(value: string, rule: { regex: RegExp; error: any }) {
    if (!rule.regex.test(value)) {
      throw new rule.error(value)
    }
  }

  public signUpValidator(user: UserSignupInterface) {
    this.validate(user.getName(), AuthValidator.RULES.name)
    this.validate(user.getUsername(), AuthValidator.RULES.username)
    this.validate(user.getEmail(), AuthValidator.RULES.email)
    this.validate(user.getPassword(), AuthValidator.RULES.password)
  }
}
