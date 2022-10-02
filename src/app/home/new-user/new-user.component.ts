import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { UserExistsService } from './user-exists.service';
import { lowercaseValidator } from './lowercase.validator';
import { SameUserAndPasswordValidator } from './userAndPassword.validator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUserForm! : FormGroup;

  //injetamos dentro do constructor
  constructor(
                private formBuilder: FormBuilder,
                private newUserService : NewUserService,
                private userExistsService : UserExistsService,
                private router: Router
                ) { }

  //ciclo do angular que ocorre após a classe efetuar a injeção de todos os serviços e sua construção ser totalmente completa.
  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email:['',[
        Validators.required,
        Validators.email
      ]],
      fullName:['',[
        Validators.required,
        Validators.minLength(4),
      ]],
      userName:['', [lowercaseValidator],
      [this.userExistsService.userAlreadyExists()]],
      password:[''],
    },
    {
      validators: [SameUserAndPasswordValidator]
    }
    )
  }

  NewAccount(){
    if(this.newUserForm.valid){
      const newUser = this.newUserForm.getRawValue();
      this.newUserService.register(newUser).
      subscribe(()=> { this.router.navigate([''])},
      error => {
        console.log(error)
        }
      )
    }
  }


}
