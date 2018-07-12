import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface User {
    username: string;
    password: string;
}
const httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
})
@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) { }
    loginUrl = "http://localhost:8888/user/login";
    registerUrl = "http://localhost:8888/user/register";
    login(user: User): Observable<HttpResponse<User>> {
        return this.httpClient.post<User>(this.loginUrl, user, { headers: httpHeader, observe: 'response' });
    }
    
    register(user: User): Observable<HttpResponse<User>> {
        return this.httpClient.post<User>(this.registerUrl, user, { headers: httpHeader, observe: 'response' });
    }
}