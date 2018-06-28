import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

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
    return !!localStorage.getItem("currentUser");
  }
}
