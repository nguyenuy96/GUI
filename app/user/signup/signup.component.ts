import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../app.user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserService]
})
export class SignUpComponent {
  constructor(private rout: ActivatedRoute, private userService: UserService) { }

  user: any;

  signup(username: string, password: string, cpassword: string) {
    if (password === cpassword) {
      this.user = { username: username, password: password };
      this.userService.register(this.user).subscribe(
        response => {
          console.log(response.status);
        },
        (err: HttpErrorResponse) => {
          alert(err.error.message);
        }
      )
    } else {
      alert("password is different from confirm password");
    }

  }

}