import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateEmployeeService } from '../create-employee.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  public employeeForm: FormGroup=new FormGroup(
    {
        name:new FormControl(''),
        company:new FormControl(''),
        role:new FormControl(''),
        package:new FormControl(''),
        email:new FormControl(''),
        dob:new FormControl(''),
        address:new FormGroup(
          {
            addressLine:new FormControl(''),
            city:new FormControl(''),
            state:new FormControl(''),
            pincode:new FormControl('')
          }
        ),
        type:new FormControl(''),
        hikes:new FormArray([]),
        workMode:new FormControl('')
    }
  )
  hikesFormArray(){
    return this.employeeForm.get('hikes') as FormArray;
  }

  addHike(){
    this.hikesFormArray().push(
      new FormGroup(
        {
          year: new FormControl(),
          percentage: new FormControl()
        }
      )
    )
  }
  delete(i:number){
    this.hikesFormArray().removeAt(i);
  }

  constructor( private _createEmployeeService:CreateEmployeeService, private _router:Router){
    this.employeeForm.get('workMode')?.valueChanges.subscribe((data: any) => {
      if (data === 'workfromhome') {
        this.employeeForm.addControl('wifibill', new FormControl());
        this.employeeForm.removeControl('travelbill');
      } else if (data === 'Workfromoffice') {
        this.employeeForm.addControl('travelbill', new FormControl());
        this.employeeForm.removeControl('wifibill');
      }
    });
  }

  create(){
    this._createEmployeeService.creatEmployee(this.employeeForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert('employee created')
        this._router.navigateByUrl('/employees');
      },(err:any)=>{
        alert("Internal error");
      }
    )
  }
  }

 

