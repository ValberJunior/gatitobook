import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignIn } from 'src/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    //propertys
    credential : ISignIn = {
      userName: "",
      password:""
    }

  constructor(private httpClient : HttpClient) { }

  authenticate(credential :ISignIn):Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login',credential)
  }
}
