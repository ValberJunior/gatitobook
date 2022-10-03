import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

 returnToken(){
  return localStorage.getItem(KEY) ?? '';
 }

saveToken(token: string){
  localStorage.setItem(KEY,token);
}

destroyToken(){
  localStorage.removeItem(KEY);
}

hasToken(){
  return !!this.returnToken(); //!! para retornar apenas o booleano do método
}

}
