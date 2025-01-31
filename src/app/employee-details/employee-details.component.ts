import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:any=[]
  constructor(private _employeesService:EmployeesService,private _activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this._employeesService.getEmployee(data.id).subscribe(
          (data:any)=>{
            this.employee=data;
            console.log("data",data);
          }
        )
      }
    )
  }

 }

