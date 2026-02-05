import { UserSignupInterface } from '../interfaces/user.interface.js'

export default class UserSignupModel implements UserSignupInterface {
  public email: string
  public password: string
  public name: string
  public username: string

  constructor(email: string, pass: string, name: string, username: string) {
    this.email = email
    this.password = pass
    this.name = name
    this.username = username
  }
  getEmail(): string {
    return this.email
  }
  getPassword(): string {
    return this.password
  }
  getUsername(): string {
    return this.username
  }
  getName(): string {
    return this.name
  }
}
