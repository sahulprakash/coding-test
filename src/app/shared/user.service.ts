import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http
      .get(`https://randomuser.me/api/0.8/?results=20`)
      .toPromise();
  }
}
