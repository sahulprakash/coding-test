import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  usersList: any;
  keyParam: any;
  constructor(private userService: UserService, private router: Router,private modalService:NgbModal) {
    this.getAllUsers();
  }

  ngOnInit(): void {
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
      this.getListFromLocalStorage();
    } catch (error) {
      console.log('error while getting users', error);
    }
  }
  logout() {
    localStorage.clear()
    this.router.navigate(['/login']);
  } 

  createNew(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content, {
      size: "xl",
      scrollable: true,
      centered: true,
      windowClass: "modal-holder",
    });
  }
}
