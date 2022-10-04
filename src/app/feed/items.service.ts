import { TokenService } from './../authentication/token.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from 'src/utils';
import { environment } from 'src/environments/environment';
import { IItem } from 'src/interfaces';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient : HttpClient,
              private tokenService : TokenService
              ) { }

  userList(username:string):Observable<Items>{
    return this.httpClient.get<Items>(`${API}/${username}/photos`);
  }

  searchById(id:number):Observable<IItem>{
    return this.httpClient.get<IItem>(`${API}/photos/${id}`);
  }

}
