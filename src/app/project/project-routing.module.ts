import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from 'app/project/project.component';
const routes: Routes = [{
  path: "",
  children: [{
    path: "list",
    component: ProjectComponent
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
export class ProjectRoutingModule { }
