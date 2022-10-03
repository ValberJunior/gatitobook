import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/user/user.service';
import { Items } from 'src/utils';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items! : Items;

  constructor(private userService : UserService,
              private itemsService : ItemsService
              ) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe(
      user => {
        const userName = user.name ?? '';
        this.itemsService.userList(userName).subscribe(
          (items) => {
            this.items = items;
          }
        )
      }
    )
  }

}
