import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class UserService {

  formData  : User;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postUser(formData : User){
   return this.http.post(this.rootURL+'/user',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/user')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putUser(formData : User){
    return this.http.put(this.rootURL+'/user/'+formData.id,formData);
     
   }

   deleteUser(id : number){
    console.log(this.http.delete(this.rootURL+'/user/'+id));
    return this.http.delete(this.rootURL+'/user/'+id);
   }
}
