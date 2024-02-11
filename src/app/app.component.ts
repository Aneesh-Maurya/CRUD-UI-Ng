import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EmployeeServiceService} from './service/employee-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curd';
  data:any
   empForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required])
   })

   
  constructor(private dialog:MatDialog,private empService:EmployeeServiceService){}
  ngOnInit(): void {
   this.get_Employee_data()
  }
   // update employee data in database
   edit_Emp_Form(user:any){
   const dialogRef= this.dialog.open(EmployeeComponent,{
      width:'450px',
      //  height:'400px'
      data:user
    })
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this.get_Employee_data()
      }
    })

   }
   // Add employee data in database
   add_Emp_Form(){
    if(this.empForm.invalid){
      this.empForm.controls['firstname'].markAsTouched()
      this.empForm.controls['lastname'].markAsTouched()
      this.empForm.controls['email'].markAsTouched()
      this.empForm.controls['mobile'].markAsTouched()
      this.empForm.controls['salary'].markAsTouched()
    }else{
      const data=this.empForm.value
      this.empService.insertEmployeeData(data).subscribe(res=>{
        alert("Employee added")
        this.get_Employee_data()
        
      })
    }
    
   }
   // get employee data from database
   get_Employee_data(){
    this.empService.getEmployeeData().subscribe(res=>{
      this.data=res
    })
   }
   
   // delete Employee data
   delete_Emp_Data(id:any){
    this.empService.deleteEmployeeData(id).subscribe(res=>{
      if(res){
        alert('employee deleted successfully')
        this.get_Employee_data()
      }
    })
   }






   displayedColumns: string[] = ['id', 'firstname','lastname', 'email', 'mobile','salary','action'];

  
}
