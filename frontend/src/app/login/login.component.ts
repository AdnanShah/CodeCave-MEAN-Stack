import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });
  constructor(private _router: Router, private _user: UserService) {}
  logInError: any = null;
  formError: boolean = false;
  ngOnInit() {}

  moveToRegister() {
    this._router.navigate(["/register"]);
  }

  login() {
    if (!this.loginForm.valid) {
      this.formError=true
      this.logInError=null

      console.log("Invalid", this.loginForm);
      return;
    } else {
      // console.log(JSON.stringify(this.loginForm.value));
      this._user.login(JSON.stringify(this.loginForm.value)).subscribe(
        data => {
          console.log(data);
          localStorage.setItem("currentUser", JSON.stringify(data));

          this._router.navigate(["/user"]);
        },
        error => {
          this.formError = false;
          this.logInError = error.error.message;
          console.error("error", error);
        }
      );
    }
  }
}
