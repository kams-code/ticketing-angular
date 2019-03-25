import { Injectable } from '@angular/core';
import { Role } from './role.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class RoleService {

  formData  : Role;
  list : [];
  listuser : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postRole(formData : Role){
   return this.http.post(this.rootURL+'/role',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/role')
    .toPromise().then(res =>this.list= (res as any).data);
    console.log(this.list);
  }
  userList(){
    this.http.get(this.rootURL+'/role/user/'+localStorage.getItem('iduser'))
    .toPromise().then(res =>this.listuser= (res as any).data[0]);
    
  }

  putRole(formData : Role){
    return this.http.put(this.rootURL+'/role/'+formData.id,formData);
     
   }

   deletePost(id : number){
    console.log(this.http.delete(this.rootURL+'/role/'+id));
    return this.http.delete(this.rootURL+'/role/'+id);
   }
}
