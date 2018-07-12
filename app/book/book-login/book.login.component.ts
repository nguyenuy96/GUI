import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppComponent } from "../../app.component";
import { Subscription } from "rxjs";
import { AppService } from "../../service/app.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "../../user/app.user.service";
import { BookService, BooksResponse } from "../book.service";

@Component({
    selector: 'book-login',
    templateUrl: './book.login.component.html',
    styleUrls: ['./book.login.component.css'],
    providers: [BookService, AppComponent, UserService]
})
export class BookLoginComponent {
    subscription: Subscription;
    constructor(private bookService: BookService, private appService: AppService, private cookieService: CookieService, private userService: UserService) { }

    books: BooksResponse[];
    mybooks: BooksResponse[];
    user: any;
    ngOnInit() {
        this.user = this.cookieService.getObject('user');
        this.mybooks = this.user.books;
        this.showAllBooks();
    }

    showAllBooks() {
        this.bookService.getAllBooks().subscribe(
            data => {
                this.books = data;
            }
        )
    }

}