import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
//import { HttpService } from 'app/http/http-service.service'
import { HttpService } from 'app/http/http.service';
@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [HttpService]
})
export class HttpServiceModule { }
