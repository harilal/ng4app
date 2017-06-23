import { Component, OnInit } from '@angular/core';
import { ProjectService } from "app/project/project.service";
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectService) { }

  getProjects(){
    this.projectService.getProjects().subscribe(data=>{
      console.log(data);
    })
  }
  ngOnInit() {
    this.getProjects();
  }

}
