import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

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

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    console.log(loginForm);
    this.authService.loginUser(loginForm.value.userNameInput, loginForm.value.passwordInput.value);
  }
}
