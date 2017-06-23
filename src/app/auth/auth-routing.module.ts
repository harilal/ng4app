import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/auth/login/login.component";
const routes: Routes = [{
  path: "",
  children: [{
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: 'list'

  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
