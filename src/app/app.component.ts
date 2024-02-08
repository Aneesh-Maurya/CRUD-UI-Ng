import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curd';

   empForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required])
   })

   
  constructor(private dialog:MatDialog){}
   
   addEmpForm(){
    this.dialog.open(EmployeeComponent,{
      width:'450px',
       height:'400px'
    })

   }
   
   empData(){
    if(this.empForm.invalid){
      this.empForm.controls['firstname'].markAsTouched()
      this.empForm.controls['lastname'].markAsTouched()
      this.empForm.controls['email'].markAsTouched()
      this.empForm.controls['mobile'].markAsTouched()
      this.empForm.controls['salary'].markAsTouched()
    }else{
      console.log(this.empForm.value)
    }
    
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
