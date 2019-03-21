import { Injectable } from '@angular/core';
import { Privilege } from './privilege.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class PrivilegeService {

  formData  : Privilege;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postPrivilege(formData : Privilege){
   return this.http.post(this.rootURL+'/Privilege',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Privilege')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putPrivilege(formData : Privilege){
    return this.http.put(this.rootURL+'/Privilege/'+formData.id,formData);
     
   }

   deletePrivilege(id : number){
    console.log(this.http.delete(this.rootURL+'/Privilege/'+id));
    return this.http.delete(this.rootURL+'/Privilege/'+id);
   }
}
