import { Injectable } from '@angular/core';
import { ApiBaseService } from "./api-base.service";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, retry } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiBaseService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/auth';
  }

  public signUp(item: any): Observable<any> {
    return this.http.post<any>(`${this.resourcePath()}/register`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  public signIn(item: any): Observable<any> {
    return this.http.post<any>(`${this.resourcePath()}/login`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  public getAuthToken(): string | null {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
  public logout(): void {
    localStorage.removeItem('token');
  }
}
