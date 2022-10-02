import { Observable } from 'rxjs';
import { INewUser } from './../../../interfaces/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  url = 'http://localhost:3000/user/signup';

  constructor(private httpClient: HttpClient) { }

  register(newUser : INewUser): Observable<any>{
    return this.httpClient.post(this.url,newUser);
  }

}
