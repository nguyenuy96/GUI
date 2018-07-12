import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginComponent } from './user/login/login.component';
import { AppService } from './service/app.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { BookService } from './book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './home/home.component.html',
  styleUrls: ['./home/home.component.css'],
  providers: [BookService]
})
export class AppComponent {
  user: any;
  subscription: Subscription;
  constructor(private appService: AppService, private cookieService: CookieService) {
    this.user = this.cookieService.getObject('user');
  }
  ngOnInit() {
    this.user = this.cookieService.getObject('user');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
