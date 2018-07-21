import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // currentUser: any;
  title = "app";
  showButton: boolean;

  constructor(private _userService: UserService) {
    // console.log("currentUser", this.currentUser,this._userService.logoutError);
    this.showButton = this._userService.logoutError;
  }
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // showButton = this.currentUser === null ? false : true;
  showButtonFun() {
    console.log("currentUser", this.currentUser, this._userService.logoutError);
    this.showButton = !this._userService.logoutError;
  }
}
