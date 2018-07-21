import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private _userService: UserService) {}
}
