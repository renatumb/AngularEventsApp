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
    console.log('isAutenticated :' + !!this.currentUser);
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: any, LastName: any) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = LastName;

  }
}
