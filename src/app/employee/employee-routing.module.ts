import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from 'app/employee/employee.component';
const routes: Routes = [{
  path: "",
  children: [{
    path: "list",
    component: EmployeeComponent
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
export class EmployeeRoutingModule { }
