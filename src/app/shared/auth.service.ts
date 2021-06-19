import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public async login(data: any) {
    try {
      const userData: any = await this.http
        .get('./assets/cred/users.json')
        .toPromise();

      let list: Array<any> = userData.list;
      let find = list.find((el) => el?.userName == data?.userName);
      let response = {
        data: {},
        status: '',
        message: '',
      };
      if (find?.password === data?.password) {
        response.data = find;
        response.message = 'Success';
        response.status = '200';
        return response;
      } else {
        response.status = '401';
        response.message = 'Invalid data';
        return response;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  public loggedIn() {
    return !!localStorage.getItem("userData");
  }
}
