import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private _router: Router, private _userService: UserService) {
    this._userService.posts().subscribe(
      data => {
        // console.log("data", data);
        this.displayData(data);
        // error => this._router.navigate(["/login"]);
      },
      error => console.error(error)
    );
  }
  questions: Array<any> = [];

  displayData(data) {
    data.data.map((user, id) => {
      // console.log(user);
      // console.log(user.Questions);
      // let obj = Object.assign({}, user.Questions);
      return this.questions.push(user);
    });
  }
  ngOnInit() {
    console.log("questions", this.questions);
  }
}
