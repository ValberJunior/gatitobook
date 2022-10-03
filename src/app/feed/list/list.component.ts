import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/authentication/user/user.service';
import { Items } from 'src/utils';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items$! : Observable<Items>;

  constructor(private userService : UserService,
              private itemsService : ItemsService
              ) { }

  ngOnInit(): void {
    this.items$ = this.userService.returnUser().pipe(
        switchMap(user =>{
          const userName = user.name ?? '';
          return this.itemsService.userList(userName);
        })
      )
  }

}
