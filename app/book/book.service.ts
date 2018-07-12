import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { User } from "../user/app.user.service";

export interface BooksResponse {
    bookid: number;
    bookname: string;
    bookauthor: string;
    bookdescription: string;
    datepost: string;
    userid: number;
    image: string;
}


const httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
})
@Injectable()
export class BookService {
    constructor(private httpClient: HttpClient) { }
    private subject = new Subject<any>();
    bookUrl = 'http://localhost:8888/book/all';
    myBookUrl = 'http://localhost:8888/book/personalbooks';

    getAllBooks(): Observable<BooksResponse[]> {
        return this.httpClient.get<BooksResponse[]>(this.bookUrl);
    }

    getMyBooks(user: User): Observable<HttpResponse<User>> {
        return this.httpClient.post<User>(this.myBookUrl, user, { headers: httpHeader, observe: 'response' });
    }

    sendData(books: BooksResponse) {
        this.subject.next(books);
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}
