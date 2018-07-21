import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required)
  });
  constructor(private _router: Router, private _userService: UserService) {}
  logInError: any = null;
  formError: boolean = false;

  ngOnInit() {}

  moveToLogin() {
    this._router.navigate(["/login"]);
  }

  register() {
    if (
      !this.registerForm.valid ||
      this.registerForm.controls.password.value !=
        this.registerForm.controls.cpass.value
    ) {
      console.log("Invalid Form");
      this.formError = true;
      this.logInError = null;

      return;
    }

    this._userService
      .register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data => {
          console.log(data);
          this._router.navigate(["/login"]);
        },
        error => {
          this.formError = false;
          this.logInError = error.error.message;

          console.error(error);
        }
      );
    console.log(this.registerForm.value);
  }
}
