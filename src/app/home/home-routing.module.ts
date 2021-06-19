import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'create', component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
