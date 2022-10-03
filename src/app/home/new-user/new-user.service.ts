import { Observable } from 'rxjs';
import { INewUser } from './../../../interfaces/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }

  //service para criar usuário
  register(newUser : INewUser): Observable<any>{
    return this.httpClient.post(`${API}/user/signup`,newUser);
  }

  //validar se o usuário existe
  checkUser(userName: string){
    return this.httpClient.get(`${API}/user/exists/${userName}`)
  }
}
