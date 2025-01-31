import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:"",component:LoginComponent},{path:"dashboard",  canActivate:[AuthGuard]  ,component:DashboardComponent,children:[{
  path:'home',canActivate:[AuthGuard],component:HomeComponent},{path:'employees',canActivate:[AuthGuard],component:EmployeesComponent},{path:"employee/:id",canActivate:[AuthGuard],component:EmployeeDetailsComponent},
  {path:"createEmployee",canActivate:[AuthGuard],component:CreateEmployeeComponent}

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
