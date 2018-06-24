import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../user.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  questions: Array<any> = [];
  constructor(private _router: Router, private _userService: UserService) {
    this._userService.posts().subscribe(
      data => {
        console.log("data", data);
        this.displayData(data);
      },
      error => console.error(error)
    );
  }

  displayData(data) {
    console.log("questions", this.questions, data);

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
