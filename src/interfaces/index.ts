export interface ISignIn{
  userName: string;
  password: string
}

export interface INewUser{
  userName: string;
  email: string;
  fullName: string;
  password: string
}

export interface IUser{
  id?: number;
  name?:string;
  email?:string
}

export interface IItem{
  id:number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number
}

export interface IComments{
  date: Date,
  text: string,
  userName: string
}
