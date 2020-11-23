import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {TOAST_TOKEN, ToastInterface} from 'src/app/shared/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private  authService: AuthService,
              private router: Router,
              @Inject(TOAST_TOKEN) private injectedToastService: ToastInterface) {
  }

  ngOnInit(): void {
    let fname = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.minLength(5)]);
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
    console.log("ProfileComponent.update()");
    console.log(profileForm);
    this.authService.updateCurrentUser(
      profileForm.controls.firstName.value,
      profileForm.controls.lastName.value,
    )
    //this.injectedToastService.success("Profile Saved");
  }
}
