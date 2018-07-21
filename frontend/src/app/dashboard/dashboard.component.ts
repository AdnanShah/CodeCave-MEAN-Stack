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
  hueGroups = [
    {
      name: "group 1",
      lights: [
        {
          name: "light 1"
        },
        {
          name: "light 2"
        }
      ]
    },
    {
      name: "group 2",
      lights: [
        {
          name: "light 3"
        },
        {
          name: "light 4"
        }
      ]
    }
  ];

  displayData(data) {
    data.data.map((user, id) => {
      var a = user.answers;
      // a = a.replace(/'/g, '"');
      a = JSON.parse(a);

      console.log("array", a);

      // console.log("array", array);
      // var array = user.answers.js;

      this.questions.push(
        // user
        {
          title: user.title,
          question: user.question,
          // answers: [1,2,3,4],
          // answers: user.answers,
          answers: a
        }
      );
    });
  }
  ngOnInit() {
    console.log("questions", this.questions);
    // console.log("answers", this.answers);
  }
}
