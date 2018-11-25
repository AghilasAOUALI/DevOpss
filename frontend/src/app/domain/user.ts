export interface IUser {
  lastName?
  firstName?
  login?
  password?
}
export class User implements IUser {

  constructor(public lastName?, public firstName?, public login?, public password?) {
  }
}
