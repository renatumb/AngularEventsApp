import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private  authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    let fname = new FormControl(this.authService.currentUser.firstName);
    let lname = new FormControl(this.authService.currentUser.lastName);


    this.profileForm = new FormGroup({
      firstName: fname,
      lastName: lname
    })
  }

  navigateBack() {
    this.router.navigate(['events'])
  }

  update(profileForm: FormGroup) {
    console.log("here");
    this.authService.updateCurrentUser(
      profileForm.controls.firstName.value,
      profileForm.controls.lastName.value,
    )
  }
}
