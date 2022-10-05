import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UserService } from 'src/app/authentication/user/user.service';
import { Items } from 'src/utils';
import { ItemsService } from '../items.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Items> {

  constructor(private itemsService : ItemsService,
              private userService : UserService
              ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Items> {
    return this.userService.returnUser().pipe(
      switchMap((user)=>{
        const userName = user.name ?? '';
        return this.itemsService.userList(userName);
      }),
      take(1)  //para o subject ser resolvido
    )
  }
}
