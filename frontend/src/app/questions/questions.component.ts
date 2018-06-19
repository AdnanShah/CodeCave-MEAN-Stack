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
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    question: new FormControl(null, Validators.required)
  });
  constructor(private _router: Router, private _userService: UserService) {}

  ngOnInit() {}

  moveToLogin() {
    this._router.navigate(["/login"]);
  }

  askQuestion() {
    if (!this.askForm.valid) {
      console.log("Invalid Form");
      return;
    }

    this._userService.askQuestion(JSON.stringify(this.askForm.value)).subscribe(
      data => {
        console.log(data);
        this._router.navigate(["/login"]);
      },
      error => console.error(error)
    );
    console.log(this.askForm.value);
  }
}
