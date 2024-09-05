import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiBaseService} from "./api-base.service";

@Injectable({
  providedIn: 'root'
})
export class FollowService extends ApiBaseService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/follows'
  }
}