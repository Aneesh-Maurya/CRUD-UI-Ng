import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
    url='https://curdapi-vo3v.onrender.com'; 
   
  constructor(public http:HttpClient) { }
  getData(){
    return this.http.get(this.url+'/get');

  }
  insertData(data:any){
    return this.http.post(this.url+'/insert',data)
  }

}
