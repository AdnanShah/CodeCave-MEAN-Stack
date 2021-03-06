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
        console.log("data", data);
        this.displayData(data);
      },
      error => console.error(error)
    );
  }
  questions: Array<any> = [];

  displayData(data) {
    data.data.map((user, id) => {
      let result =
        user.answers != null
          ? user.answers[0] !== ","
            ? user.answers.substring(1, user.answers.length - 1)
            : user.answers.substring(2, user.answers.length - 1)
          : null;

      let final = result === null ? null : `[{${result}}]`;
      // console.log("final", JSON.parse(final));

      let s = final.replace(/[\u0000-\u0019]+/g, "");
      let answers = JSON.parse(s);
      let tags = user.tags != null ? user.tags : "non";

      this.questions.push({
        title: user.title,
        question: user.question,
        vote: user.vote,
        answers: answers,
        tags: JSON.parse(tags)
      });
    });
  }
  ngOnInit() {
    console.log("questions", this.questions);
  }
}
