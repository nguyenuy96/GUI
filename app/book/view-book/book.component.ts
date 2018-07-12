import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element, by } from 'protractor';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { BookService, BooksResponse } from '../book.service';

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent {
  constructor(private rout: ActivatedRoute, private bookService: BookService, private cookieSerice: CookieService){}

  headers: string[];
  books: BooksResponse[];
  user: any;
  ngOnInit() {
    this.user = this.cookieSerice.getObject('user');
    this.showAllBook();
  }

  showAllBook() {
    this.bookService.getAllBooks().subscribe(
      data => {
        this.books = data;
      },
      (res: HttpResponse<BooksResponse[]>) => {
        if(res.status == 302) {
          this.books = res.body;
        }
      }
    )
  }
}
