import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  askForm: FormGroup = new FormGroup({
    // email: new FormControl(null, [Validators.email, Validators.required]),
    title: new FormControl(null, Validators.required),
    question: new FormControl(null, Validators.required)
  });
  email: any = "";
  currentUser: any;

  constructor(private _router: Router, private _userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("currentUser", this.currentUser);
    this.email = this.currentUser.data[0].email;
  }

  ngOnInit() {}

  moveToLogin() {
    this._router.navigate(["/login"]);
  }

  askQuestion() {
    if (!this.askForm.valid) {
      console.log("Invalid Form");
      return;
    }
    this.askForm.value.email = this.email;

    this._userService.askQuestion(this.askForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error)
    );
    console.log(this.askForm.value);
    this._router.navigate(["/dashboard"]);
    location.reload();
  }
}
