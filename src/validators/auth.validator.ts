export default class AuthValidator {
  private readonly NAME_REGEX = /^[\p{L}\s'-]{2,50}$/u
  private readonly USERNAME_REGEX = /^[a-zA-Z0-9_]{3,16}$/
  private readonly EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  private readonly PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  public isValidName(name: string): boolean {
    return this.NAME_REGEX.test(name)
  }

  public isValidUsername(username: string): boolean {
    return this.USERNAME_REGEX.test(username)
  }

  public isValidEmail(email: string): boolean {
    return this.EMAIL_REGEX.test(email)
  }

  public isValidPassword(password: string): boolean {
    return this.PASSWORD_REGEX.test(password)
  }
}