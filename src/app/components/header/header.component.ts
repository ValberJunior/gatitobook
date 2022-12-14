import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/authentication/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  user$ = this.userService.returnUser();
  mobileState : boolean = false;

  ngOnInit(): void {
  }

  logout(){
    this.userService.Logout();
    this.router.navigate(['']);
  }

  mobile(){
    return this.mobileState = !this.mobileState;
  }

}
