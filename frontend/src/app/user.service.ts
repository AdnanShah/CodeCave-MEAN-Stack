import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

  logoutError: boolean = false;
  isLogIn: boolean = false;

  register(body: any) {
    return this._http.post("http://127.0.0.1:4201/api/users/register", body, {
      observe: "body",
      // withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
      // responseType: "text"
    });
  }

  posts() {
    return this._http.get("http://127.0.0.1:4201/api/questions/posts", {
      observe: "body",
      // withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  askQuestion(body: any) {
    return this._http.post(
      "http://127.0.0.1:4201/api/questions/questions",
      body,
      {
        observe: "body",
        // withCredentials: true,
        headers: new HttpHeaders().append("Content-Type", "application/json")
        // responseType: "text"
      }
    );
  }
  voteDown(body: any) {
    return this._http.post("http://127.0.0.1:4201/api/questions/voteDown", body, {
      observe: "body",
      // withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
      // responseType: "text"
    });
  }
  voteUp(body: any) {
    return this._http.post("http://127.0.0.1:4201/api/questions/voteUp", body, {
      observe: "body",
      // withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
      // responseType: "text"
    });
  }
  ansQuestion(body: any) {
    return this._http.post("http://127.0.0.1:4201/api/questions/answer", body, {
      observe: "body",
      // withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
      // responseType: "text"
    });
  }

  login(body: any) {
    return this._http.post("http://127.0.0.1:4201/api/users/signin", body, {
      observe: "body",
      // withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  user() {
    return this._http.get("http://127.0.0.1:4201/api/users/all", {
      observe: "body",
      // withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  logout() {
    localStorage.removeItem("currentUser");
  }

  isLoggedIn() {
    if (localStorage.getItem("currentUser") == null) {
      this.isLogIn = false;
      return this.isLogIn;
    } else {
      return true;
    }
  }
}
