import { TokenService } from './../authentication/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from 'src/utils';

const API = 'http://localhost:300';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient : HttpClient,
              private tokenService : TokenService
              ) { }

  userList(username:string):Observable<Items>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.httpClient.get<Items>(`${API}/${username}/photos`,{
      headers
    });
  }
}
