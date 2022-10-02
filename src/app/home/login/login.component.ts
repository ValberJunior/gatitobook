import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { ISignIn } from 'src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //propertys
  credential : ISignIn = {
    userName: "",
    password:""
  }

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  login(){
   this.authService.authenticate(this.credential).subscribe(()=>{
    console.log("autenicado com sucesso!")
   },(err)=>{
    alert("Usuário ou senha inválidos");
    console.log(err);
   })
  }

}
