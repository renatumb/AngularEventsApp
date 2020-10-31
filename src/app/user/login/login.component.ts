import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNameInputXX: any;
  passwordInput: any;

  get userNameInput() {
    console.log("GET userNameInputXX");
    return this.userNameInputXX
  }

  set userNameInput(value) {
    console.log("SET userNameInputXX");
    this.userNameInputXX = value;
  }

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    this.authService.loginUser(loginForm.value.userNameInput, loginForm.value.passwordInput.value);
    this.navigateBackToEvents();
  }

  navigateBackToEvents(): void {
    this.router.navigate(['events'])
  }
}
