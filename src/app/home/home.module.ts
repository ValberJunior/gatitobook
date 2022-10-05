import { FooterModule } from './../components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    FooterModule,
    SharedModule
  ],
  //para poder expor o componente
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
