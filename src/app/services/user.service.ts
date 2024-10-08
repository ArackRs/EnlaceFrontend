import { Injectable } from '@angular/core';
import {ApiBaseService} from "./api-base.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiBaseService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/users'
  }

  public getUserByUsername(username: string | null): Observable<any> {
    return this.http.get<any>(`${this.resourcePath()}/${username}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  public getUsername(): string {
    return localStorage.getItem('username') || 'No hay pipipi';
  }
}
