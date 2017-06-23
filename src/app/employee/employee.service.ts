import { Injectable } from '@angular/core';
import { HttpService } from 'app/http/http.service';
@Injectable()
export class EmployeeService {

  constructor(private httpService:HttpService) { }
  getEmployees(){
    //return this.httpService.get('qb/services')
    return this.httpService.get('employee');
  }
}
