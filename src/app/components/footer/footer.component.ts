import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  isLogged(): boolean{
    if(this.userService.isLogged()) return true;
    return false;
  }

}
