import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeApiService } from '../../employee-api.service';

@Component({
  selector: 'app-add-editemployee',
  templateUrl: './add-editemployee.component.html',
  styleUrls: ['./add-editemployee.component.css']
})
export class AddEditemployeeComponent implements OnInit {

  employeeList$!:Observable<any[]>;
  deptsList$!:Observable<any[]>;

  constructor(private service:EmployeeApiService) { }


  @Input() employee:any;
  id:number=0;
  name:string="";
  age!:number;
  address:string="";
  deptId!:number ;

  ngOnInit(): void {
    this.id=this.employee.id;
    this.name=this.employee.name;
    this.age=this.employee.age;
    this.address=this.employee.address;
    this.deptId=this.employee.deptId;
    this.employeeList$=this.service.getAllEmployee();
    this.deptsList$=this.service.getAllDept();
  }

  addEmployee(){

    var employee={
      name:this.name,
      age:this.age,
      address:this.address,
      deptId:this.deptId
    }
    this.service.addEmployee(employee).subscribe(res=>
      {
        var closeModalButton= document.getElementById("closeModal-add-edit");
        if(closeModalButton){
          closeModalButton.click();
        }

        var addSuccess= document.getElementById("add-success-alert");
        if(addSuccess){
          addSuccess.style.display="block";
        }

        setTimeout(function(){
                     
                if(addSuccess){
                  addSuccess.style.display="none";
                }
        },5000);
      });



  }




  updateEmployee(){
    var employee={
      id:this.id,
      name:this.name,
      age:this.age,
      address:this.address,
      deptId:this.deptId
    }

    var id:number=this.id;

    this.service.editEmployee(id,employee).subscribe(res=>
      {
        var closeModalButton= document.getElementById("closeModal-add-edit");
        if(closeModalButton){
          closeModalButton.click();
        }

        var updateSuccess= document.getElementById("update-success-alert");
        if(updateSuccess){
          updateSuccess.style.display="block";
        }

        setTimeout(function(){
                     
                if(updateSuccess){
                  updateSuccess.style.display="none";
                }
        },5000);
      });



  }

}
