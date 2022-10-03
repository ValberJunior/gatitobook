import { FooterModule } from './../components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../components/message/message.module';
import { NewUserComponent } from './new-user/new-user.component';


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
    MessageModule,
    ReactiveFormsModule,
    FooterModule
  ],
  //para poder expor o componente
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
