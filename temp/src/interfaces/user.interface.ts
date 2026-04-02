interface User {
  email: string
  password: string
  getEmail(): string
  getPassword(): string
}

export interface UserSignInInterface extends User {}

export interface UserSignupInterface extends User {
  name: string
  username: string
  getName(): string
  getUsername(): string
}
