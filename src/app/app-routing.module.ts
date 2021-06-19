import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogedInGuard } from './guard/loged-in.guard';
import { UserGuard } from './guard/user.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [LogedInGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [UserGuard],
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
