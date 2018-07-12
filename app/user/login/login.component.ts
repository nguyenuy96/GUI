import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../../service/app.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UserService } from '../app.user.service';

@Component({
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent {
  constructor(private rout: ActivatedRoute, private userService: UserService, private router: Router, private appService: AppService, private cookieService: CookieService) { }
  user: any;

  login(username: string, password: string) {
    this.user = { username: username, password: password };
    this.userService.login(this.user).subscribe(
      response => {
        this.router.navigate(['']);
        this.appService.sendUser(response.body);
        this.cookieService.putObject('user', response.body);
      },
      (err: HttpErrorResponse) => {
        alert(err.error.message)
      }
    );
  }
}