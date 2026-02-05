export class AuthError extends Error {
  name = 'AuthenticationError'
}

export class InvalidNameError extends AuthError {
  constructor(val: string) {
    super(`Invalid name: ${val}`)
    this.name = 'InvalidNameError'
  }
}

export class InvalidUsernameError extends AuthError {
  constructor(val: string) {
    super(`Invalid username: ${val}`)
    this.name = 'InvalidUsernameError'
  }
}

export class InvalidEmailError extends AuthError {
  constructor(val: string) {
    super(`Invalid email: ${val}`)
    this.name = 'InvalidEmailError'
  }
}

export class InvalidPasswordError extends AuthError {
  constructor(val: string) {
    super(`Invalid password: ${val}`)
    this.name = 'InvalidPasswordError'
  }
}
