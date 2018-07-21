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
      var a = user.answers;
      a = JSON.parse(a);
      console.log("array", a);
      this.questions.push({
        title: user.title,
        question: user.question,
        answers: a
      });
    });
  }
  ansQuestion() {
    if (!this.ansForm.valid) {
      console.log("Invalid Form");
      return;
    }
    this.ansForm.value.email = this.email;

    this._userService.ansQuestion(this.ansForm.value).subscribe(
      data => {
        console.log(data);
        // this._router.navigate(["/dashboard"]);
      },
      error => console.error(error)
    );
    console.log(this.ansForm.value);
  }

  ngOnInit() {
    console.log("questions", this.questions);
  }
}
