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
      firstName: 'john',
      lastName: 'papa'
    }
  }

  isAutenticated(): boolean {
    return !!!this.currentUser;
  }
}
