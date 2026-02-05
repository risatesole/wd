import { UserSignInInterface } from '../interfaces/user.interface.js'

export default class UserSignInModel implements UserSignInInterface {
  public email: string
  public password: string

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
  getEmail(): string {
    return this.email
  }
  getPassword(): string {
    return this.password
  }
}
