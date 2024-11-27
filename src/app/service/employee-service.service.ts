import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
    
    url= 'https://curdapi-vo3v.onrender.com'; 
   
  constructor(public http:HttpClient) { }
  getEmployeeData(){
    return this.http.get(this.url+'/get');

  }
  insertEmployeeData(data:any){
    return this.http.post(this.url+'/insert',data)
  }
  updateEmployeeData(id:any,data:any){
    return this.http.put(this.url+'/update/'+id,data)
  }
  deleteEmployeeData(id:any){
    return this.http.delete(this.url+'/delete/'+id )
  }

}
