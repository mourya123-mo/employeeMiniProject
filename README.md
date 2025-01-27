<h1>Employees</h1>
<mat-paginator  [length]="10"
              [pageSize]="100"
              [pageSizeOptions]="[5, 10, 25, 100]"
              aria-label="Select page">

</mat-paginator>
<table class="table table-dark">
    <thead>
        <tr>
            <td>Name</td>
            <td>Company</td>
            <td>Role</td>
            <td>Package</td>
            <td>Email</td>
            <td>DoB</td>
            <td>Adress</td>
            <td>Hikes</td>
            <td>WorkMode</td>
            <td>Gender</td>
            <td>Type</td>
            <td>Wifi Bill</td>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let employee of employees">
            <td>{{employee.name}}</td>
            <td>{{employee.company}}</td>
            <td>{{employee.role}}</td>
            <td>{{employee.package}}</td>
            <td>{{employee.email}}</td>
            <td>{{employee.dob}}</td>
            <td><div>
                {{ employee.address?.addressLine|| 'N/A'  }}
                <td>{{employee.address?.city}}</td>
                <td>{{employee.address?.state}}</td>
                <td>{{employee.address?.pincode}}</td>
            </div></td>
            <td *ngFor="let hike of employee.hikes">
                year:{{hike.year}} 
                percent:{{hike.percentage}} <br>
            </td>
            <td>{{employee.workMode}}</td>
            <td>{{employee.gender}}</td>
            <td>{{employee.type}}</td>
            <td>{{employee.wifibill}}</td>
        </tr>

    </tbody>

</table>