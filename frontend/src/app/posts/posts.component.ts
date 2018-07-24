import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  ansForm: FormGroup = new FormGroup({
    // email: new FormControl(null, [Validators.email, Validators.required]),
    ans: new FormControl(null, Validators.required)
    // question: new FormControl(null, Validators.required)
  });

  email: any = "";
  currentUser: any;
  questions: Array<any> = [];

  constructor(private _router: Router, private _userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.email = this.currentUser.data[0].email;
    this._userService.posts().subscribe(
      data => {
        console.log("data", data);
        this.displayData(data);
      },
      error => console.error(error)
    );
  }
  displayData(data) {
    data.data.map((user, id) => {
      let result =
        user.answers != null
          ? user.answers[0] !== ","
            ? user.answers.substring(1, user.answers.length - 1)
            : user.answers.substring(2, user.answers.length - 1)
          : null;

      let final = result === null ? null : `[{${result}}]`;

      this.questions.push({
        title: user.title,
        vote: user.vote,
        question: user.question,
        answers: JSON.parse(final),
        questionsID: user.questionsID == null ? -1 : user.questionsID
      });
    });
  }

  voteDown(id) {
    console.log(id);
    this._userService.voteDown({ id }).subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error)
    );
    location.reload();
  }
  voteUp(id) {
    console.log(id);
    this._userService.voteUp({ id }).subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error)
    );
    location.reload();
  }

  ansQuestion(id) {
    console.log(id);
    if (!this.ansForm.valid) {
      console.log("Invalid Form");
      return;
    }
    this.ansForm.value.email = this.email;
    this.ansForm.value.questionsID = id;
    this.ansForm.value.ans = this.ansForm.value.ans.trim();

    this._userService.ansQuestion(this.ansForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error)
    );
    console.log(this.ansForm.value);

    location.reload();
  }

  ngOnInit() {
    console.log("questions", this.questions);
  }
}
