import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNameInput: any;
  passwordInput: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    console.log(loginForm);
  }
}
