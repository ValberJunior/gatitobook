import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private newUserService : NewUserService) { }

  userAlreadyExists(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName)=> this.newUserService.checkUser(userName)), //para trocar o fluxo
        map((exists)=>(exists?{userExists: true}: null)),  //para trocar o resultado
        first()        //para encerrar o fluxo
      )
    };
  }

}
