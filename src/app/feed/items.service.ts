import { TokenService } from './../authentication/token.service';
import { catchError, map, mapTo, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from 'src/utils';
import { environment } from 'src/environments/environment';
import { IItem } from 'src/interfaces';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

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

  deleteItem(id:number):Observable<IItem>{
    return this.httpClient.delete<IItem>(`${API}/photos/${id}`);
  }

  like(id: number):Observable<boolean>{
    return this.httpClient.post(`${API}/photos/${id}/like`,{},
    { observe: 'response'}).pipe(
      map(() => true),
      catchError((error)=>{
        return error.status === NOT_MODIFIED ? of(false) : throwError(()=> new Error (error)); //check
      })
    )
  }

  upload(description: string, allowComments: boolean, imageFile: File){
      const formData = new FormData();
      formData.append('description',description);
      formData.append('allowComments',allowComments ? 'true' : 'false');
      formData.append('imageFile',imageFile);

     return this.httpClient.post(`${API}/photos/upload`, formData, {
            observe: 'events',
            reportProgress: true
          });
      }

}
