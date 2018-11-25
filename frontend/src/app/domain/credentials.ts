export interface ICredentials {
  login?
  password?
}
export class Credentials implements ICredentials {
  //todo add other attribute
  constructor(public username?, public password?) {
  }
}
