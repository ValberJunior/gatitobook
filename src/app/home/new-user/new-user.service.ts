import { Observable } from 'rxjs';
import { INewUser } from './../../../interfaces/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  url = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }

  //service para criar usuário
  register(newUser : INewUser): Observable<any>{
    return this.httpClient.post(`${this.url}/signup`,newUser);
  }

  //validar se o usuário existe
  checkUser(userName: string){
    return this.httpClient.get(`${this.url}/exists/${userName}`)
  }
}
