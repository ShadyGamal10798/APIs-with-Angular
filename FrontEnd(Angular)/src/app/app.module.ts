import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './Employee/show-employee/show-employee.component';
import { AddEditemployeeComponent } from './Employee/add-editemployee/add-editemployee.component';

import { EmployeeApiService } from './employee-api.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    AddEditemployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
