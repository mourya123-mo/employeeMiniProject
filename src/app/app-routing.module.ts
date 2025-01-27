import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [{path:"",component:DashboardComponent,children:[{
  path:'home',component:HomeComponent},{path:'employees',component:EmployeesComponent},{path:"employee/:id",component:EmployeeDetailsComponent},
  {path:"createEmployee",component:CreateEmployeeComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
