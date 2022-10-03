export interface ISignIn{
  userName: string,
  password: string
}

export interface INewUser{
  userName: string,
  email: string,
  fullName: string,
  password: string
}

export interface IUser{
  id?: number;
  name?:string,
  email?:string
}
