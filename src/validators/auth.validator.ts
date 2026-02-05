import { UserSignupInterface } from '../interfaces/user.interface.js'

class AuthError extends Error {
  name = 'AuthenticationError'
}

class InvalidNameError extends AuthError {
  constructor(val: string) {
    super(`Invalid name: ${val}`)
    this.name = 'InvalidNameError'
  }
}

class InvalidUsernameError extends AuthError {
  constructor(val: string) {
    super(`Invalid username: ${val}`)
    this.name = 'InvalidUsernameError'
  }
}

class InvalidEmailError extends AuthError {
  constructor(val: string) {
    super(`Invalid email: ${val}`)
    this.name = 'InvalidEmailError'
  }
}

class InvalidPasswordError extends AuthError {
  constructor(val: string) {
    super(`Invalid password: ${val}`)
    this.name = 'InvalidPasswordError'
  }
}

export default class AuthValidator {
  private readonly NAME_REGEX = /^[\p{L}\s'-]{2,50}$/u
  private readonly USERNAME_REGEX = /^[a-zA-Z0-9_]{3,16}$/
  private readonly EMAIL_REGEX =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  private readonly PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  private isValidName(name: string): boolean {
    if (!this.NAME_REGEX.test(name)) {
      throw new InvalidNameError(name)
    }
    return true
  }

  private isValidUsername(username: string): boolean {
    return this.USERNAME_REGEX.test(username)
  }

  private isValidEmail(email: string): boolean {
    return this.EMAIL_REGEX.test(email)
  }

  private isValidPassword(password: string): boolean {
    return this.PASSWORD_REGEX.test(password)
  }

  public signUpValidator(user: UserSignupInterface) {
    if (!this.isValidName(user.getName())) {
      throw new InvalidNameError(user.getName())
    }
    if (!this.isValidEmail(user.getEmail())) {
      throw new InvalidEmailError(user.getEmail())
    }
    if (!this.isValidUsername(user.getUsername())) {
      throw new InvalidUsernameError(user.getUsername())
    }
    if (!this.isValidPassword(user.getPassword())) {
      throw new InvalidPasswordError(user.getPassword())
    }
  }
}
