import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnChanges {
  usersList: any;
  keyParam: any;
  constructor(private userService: UserService, private router: Router) {
    this.getAllUsers();
  }

  ngOnInit(): void {
    this.getListFromLocalStorage();
  }
  ngOnChanges() {
    this.getListFromLocalStorage();
  }
  getListFromLocalStorage() {
    let data: any = localStorage.getItem('userList');
    this.usersList = JSON.parse(data);
    console.log(this.usersList);
  }
  async getAllUsers() {
    try {
      const response: any = await this.userService.getUsers();
      let userList = response.results;
      localStorage.setItem('userList', JSON.stringify(userList));
    } catch (error) {
      console.log('error while getting users', error);
    }
  }
  createNew() {
    this.router.navigate(['/home/create']);
  }
  search() {
    
  }
}
