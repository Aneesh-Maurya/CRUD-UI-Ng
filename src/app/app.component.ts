import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curd';
  constructor(private dialog:MatDialog){}
   addEmpForm(){
    this.dialog.open(EmployeeComponent,{
      width:'450px',
       height:'400px'
    })
   }
   displayedColumns: string[] = ['id', 'firstname','lastname', 'email', 'mobile','salary','action'];
   dataSource=[{id: 10, firstname: 'Neon', lastname:'sdfgafg',email:'sdhsghd',mobile:9648307910, salary: 20.1797},
   {id: 10, firstname: 'Neon', lastname:'sdfgafg',email:'sdhshdshbfhsbdfvcsghd',mobile:9648307910, salary: 20.1797},
   {id: 10, firstname: 'Negdsgsdgson', lastname:'sdffsdfsdgdsgsgafg',email:'sdhfdsfdfssghd',mobile:9648307910, salary: 20.1797},
   {id: 10, firstname: 'Neon', lastname:'sdfgafg',email:'sdhsghd',mobile:9648307910, salary: 20.1797},
   {id: 10, firstname: 'Neon', lastname:'sdfgafg',email:'sdhsghd',mobile:9648307910, salary: 20.1797},
   {id: 10, firstname: 'Neon', lastname:'sdfgafg',email:'sdhsghd',mobile:9648307910, salary: 20.1797},
   {id: 10, firstname: 'Neon', lastname:'sdfgafg',email:'sdhsghd',mobile:9648307910, salary: 20.1797}
               ]
}
