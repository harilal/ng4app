import { Component, OnInit } from '@angular/core';
import {EmployeeService} from 'app/employee/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(data=>{
      console.log(data);
    })
  }
  ngOnInit() {
    this.getEmployees();
  }

}
