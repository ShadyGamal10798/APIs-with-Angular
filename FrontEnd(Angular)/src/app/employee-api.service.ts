import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  readonly employeeApiUrl="https://localhost:7275/api";
  constructor(private http:HttpClient) { }

  //employee

  getAllEmployee():Observable<any[]> {
    return this.http.get<any>(this.employeeApiUrl + "/Employees");
  }

  getEmployeeById(id:number|string){
    return this.http.get(this.employeeApiUrl + "/Employees/" + id);
  }

  addEmployee(data:any){
    return this.http.post(this.employeeApiUrl + "/Employees", data);
  }

  editEmployee(id:number|string, data:any){
    return this.http.put(this.employeeApiUrl + `/Employees/${id}` , data);
  }

  deleteEmployee(id:number|string){
    return this.http.delete(this.employeeApiUrl + `/Employees/${id}`);
  }


  //depts


  getAllDept():Observable<any[]> {
    return this.http.get<any>(this.employeeApiUrl + "/Depts");
  }

  getDeptById(id:number|string){
    return this.http.get(this.employeeApiUrl + "/Depts/" + id);
  }

  addDept(data:any){
    return this.http.post(this.employeeApiUrl + "/Depts", data);
  }

  editDept(id:number|string, data:any){
    return this.http.put(this.employeeApiUrl + `/Depts/${id}` , data);
  }

  deleteDept(id:number|string){
    return this.http.delete(this.employeeApiUrl + `/Depts/${id}`);
  }



}
