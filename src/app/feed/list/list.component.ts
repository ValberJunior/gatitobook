import { ActivatedRoute } from '@angular/router';
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

  items! : Items;

  constructor( private activateRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      param => {
        this.items = this.activateRoute.snapshot.data['items'];
      }
    )
  }

}
