import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 constructor(private empService:EmployeeServiceService, private _dialog:MatDialogRef<EmployeeComponent>,
  @Inject(MAT_DIALOG_DATA) private user:any
  ){}


  empForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    mobile:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required])
   })
  ngOnInit(): void {
   return this.empForm.patchValue(this.user)
  }
  updateData(){
    if(this.empForm.invalid){
      this.empForm.controls['firstname'].markAsTouched()
      this.empForm.controls['lastname'].markAsTouched()
      this.empForm.controls['email'].markAsTouched()
      this.empForm.controls['mobile'].markAsTouched()
      this.empForm.controls['salary'].markAsTouched()
    }else{
      const data=this.empForm.value
      this.empService.updateEmployeeData(this.user.id,data).subscribe(res=>{
        alert('Employee data update successfully')
        this._dialog.close(true)
      })
     
    }
  }

}
