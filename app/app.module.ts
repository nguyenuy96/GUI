import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/view-book/book.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/signup/signup.component';
import { ChangePasswordComponent } from './user/changepassword/changepassword.component';

import { HttpClientModule } from '@angular/common/http';
import { BookLoginComponent } from './book/book-login/book.login.component';
import { AppService } from './service/app.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

const appRoutes: Routes = [
  { path: '', component: BookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    BookLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    )
  ],

  providers: [AppService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
