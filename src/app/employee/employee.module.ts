import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeService } from 'app/employee/employee.service';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeComponent],
  providers: [EmployeeService]
})
export class EmployeeModule { }
