import {Injectable} from '@angular/core';
import {IUser} from "./iuser";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  currentUser: IUser;

  constructor() {
  }

  loginUser(username: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'John',
      lastName: 'Papa',
      password: password
    }
  }

  isAutenticated(): boolean {
    return !!!this.currentUser;
  }
}
