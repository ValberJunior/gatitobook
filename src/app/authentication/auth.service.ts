import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ISignIn } from 'src/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    //propertys
    credential : ISignIn = {
      userName: "",
      password:""
    }

  constructor(
    private httpClient : HttpClient,
    private userService : UserService) { }

  authenticate(credential :ISignIn):Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:3000/user/login',credential,
    { observe : 'response'}
    ).pipe(
      tap((res)=>{
        const authToken = res.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken);
      })
    )
  }
}
