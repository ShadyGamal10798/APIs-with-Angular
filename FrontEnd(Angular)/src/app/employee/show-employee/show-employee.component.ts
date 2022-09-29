import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeApiService } from '../../employee-api.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employeeList$!:Observable<any[]>;
  deptsList$!:Observable<any[]>;
  deptsList:any=[];


  //Map to display depts
  mapDepts:Map<number,string> = new Map();

  constructor(private service:EmployeeApiService) { }

  ngOnInit(): void {
    this.employeeList$=this.service.getAllEmployee();
    this.deptsList$=this.service.getAllDept();
    this.refreshDepts();
  }

  //vars

  Modaltitle:string="";
  activateAddEditEmployeeComponent:boolean=false;
  employee:any;

  modalAdd(){
    this.employee={
      id:0,
      name:null,
      age:null,
      address:null,
      deptId:null
    }
    this.Modaltitle="Add Employee";
    this.activateAddEditEmployeeComponent=true
  }

  modalEdit(item:any){
    this.employee=item;
    this.Modaltitle="Edit Employee";
    this.activateAddEditEmployeeComponent=true;

  }

  delete(item:any){
    if(confirm(`Are You Sure you want to delete employee ${item.id}`)){
      this.service.deleteEmployee(item.id).subscribe(res =>{
        var closeModalButton= document.getElementById("closeModal-add-edit");
        if(closeModalButton){
          closeModalButton.click();
        }

        var deleteSuccess= document.getElementById("delete-success-alert");
        if(deleteSuccess){
          deleteSuccess.style.display="block";
        }

        setTimeout(function(){
                     
                if(deleteSuccess){
                  deleteSuccess.style.display="none";
                }
        },5000);
        this.employeeList$=this.service.getAllEmployee();
      })
    }
  }

  modalClose(){
    this.activateAddEditEmployeeComponent=false;
    this.employeeList$ = this.service.getAllEmployee();
  }

  refreshDepts(){
    this.service.getAllDept().subscribe(data=>{
      this.deptsList=data;

      for(let i=0 ; i<data.length ; i++){
        this.mapDepts.set(this.deptsList[i].deptId , this.deptsList[i].deptName);
      }

    })
  }


}


