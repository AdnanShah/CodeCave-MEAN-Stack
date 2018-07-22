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
        console.log(data);
        this.displayData(data);
      },
      error => console.error(error)
    );
  }
  questions: Array<any> = [];

  displayData(data) {
    data.data.map((user, id) => {
      let result = user.answers.substring(1, user.answers.length - 1);
      let final = `[{${result}}]`;
      console.log("final", JSON.parse(final));

      this.questions.push({
        title: user.title,
        question: user.question,
        answers: JSON.parse(final)
      });
    });
  }
  ngOnInit() {
    console.log("questions", this.questions);
  }
}
