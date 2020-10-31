import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule {
}
