import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  usersList: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      gender: ['', [Validators.required]],
      title: ['', [Validators.required]],
      first: ['', [Validators.required]],
      last: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem('userList');
    this.usersList = JSON.parse(data);
  }
  get f() {
    return this.userForm.controls;
  }
  addUser() {
    let data = {
      user: {
        dob: this.userForm.value.dob,
        email: this.userForm.value.email,
        gender: this.userForm.value.gender,
        name: {
          title: this.userForm.value.title,
          first: this.userForm.value.first,
          last: this.userForm.value.last,
        },
        password: this.userForm.value.email,
        phone: this.userForm.value.password,
        username: this.userForm.value.username,
      },
    };
    console.log(data);
    this.usersList.push(data);
    this.setItem();
  }
  setItem() {
    localStorage.setItem('userList', JSON.stringify(this.usersList));
  }
}
