import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpServiceModule } from 'app/http/http.module';
import { AppRoutingModule } from 'app/app-routing';
import { SharedModule } from 'app/shared/shared.module';
import { AuthService } from "app/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpServiceModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
