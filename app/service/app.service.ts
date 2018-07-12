import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { User } from "../user/app.user.service";




@Injectable()
export class AppService {
    private subject = new Subject<any>();


    sendUser(user: User) {
        this.subject.next({
            user: user
        });
    }

    getUser(): Observable<any> {
        return this.subject.asObservable();
    }

    sendBookId(bookId: string) {
        this.subject.next({
            bookId: bookId
        });
    }

    getBookId(): Observable<any> {
        return this.subject.asObservable();
    }
}