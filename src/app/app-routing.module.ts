import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
     redirectTo: '/login'
  },
  {
    path: "users/:id",
    component: UserdetailsComponent,
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
