import { LiveAnnouncer } from '@angular/cdk/a11y';
import { OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesService } from '../employees.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  employees: any[] = [];
  term: string = "";
  limit:number=0;
  page:number=0;
  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = [
    'index',
    'name',
    'company',
    'role',
    'package',
    'email',
    'dob',
    'address',
    'hikes',
    'workMode',
    'gender',
    'type',
    'wifibill',
    'delete',
    'veiw',
  ];
  constructor(
    private _employeesService: EmployeesService) {}
  dataSource = new MatTableDataSource<any>(this.employees);
 
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getEmployees();
  
  }

  getEmployees() {
    this._employeesService.getEmployees().subscribe((data: any) => {
      this.employees = data;
      this.dataSource.data = this.employees;
      console.log(this.employees);
    }),
      (err: any) => {
        alert('internal error');
      };
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  delete(id: number) {
    this._employeesService.deleteEmployee(id).subscribe((data: any) => {
      console.log(data.id);
      this.getEmployees();
    });
  }
  filter() {
    this._employeesService
      .getFilteredEmployee(this.term)
      .subscribe((data: any) => {
        // this.employees = data;
        this.dataSource.data=data;
        console.log(data);
        
      }),
      (err: any) => {
        alert('Internal server error');
      };
  }
  pagination(){
    this._employeesService.getPaginatedEmployees(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        // this.employees=data;
        this.dataSource.data = data;
      },(err:any)=>{
        alert('internal error');
      }
    ) 
  }
}

