import { Injectable } from '@angular/core';
import { HttpService } from 'app/http/http.service';

@Injectable()
export class ProjectService {

  constructor(private httpService:HttpService) { }
  getProjects(){
    return this.httpService.get('project');
  }
}
