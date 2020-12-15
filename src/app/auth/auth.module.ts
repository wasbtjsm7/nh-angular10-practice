import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginComponent as LoginPageComponent } from './page/login/login.component';
import { MessageInlineErrorComponent } from './components/message-inline-error/message-inline-error.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
    MessageInlineErrorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
