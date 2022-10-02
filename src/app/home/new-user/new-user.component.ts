import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { lowercaseValidator } from './validators/lowercase.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUserForm! : FormGroup;

  //injetamos dentro do constructor
  constructor(private formBuilder: FormBuilder, private newUserService : NewUserService) { }

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
      userName:['', [lowercaseValidator]],
      password:[''],
    })
  }

  NewAccount(){
    const newUser = this.newUserForm.getRawValue();
    console.log(newUser);
  }


}
