import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserhomeComponent } from "./userhome/userhome.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserService } from "./user.service";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { PostsComponent } from "./posts/posts.component";
import { QuestionsComponent } from "./questions/questions.component";

import { AuthGuard } from "./auth/auth.guard";

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    DashboardComponent,
    PostsComponent,
    QuestionsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    TagInputModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
