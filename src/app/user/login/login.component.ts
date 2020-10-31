import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    console.log(loginForm);
  }
}
