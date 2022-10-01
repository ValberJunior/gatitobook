import { Component, OnInit } from '@angular/core';
import { ISignIn } from 'src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //propertys
  credential : ISignIn = {
    user: "",
    password:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.credential);
  }

}
