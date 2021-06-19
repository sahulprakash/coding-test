import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeModule { }
