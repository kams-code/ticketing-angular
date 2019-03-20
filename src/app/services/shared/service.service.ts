import { Injectable } from '@angular/core';
import { Service } from './service.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class ServiceService {

  formData  : Service;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postService(formData : Service){
   return this.http.post(this.rootURL+'/service',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/service')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putService(formData : Service){
    return this.http.put(this.rootURL+'/service/'+formData.id,formData);
     
   }

   deleteService(id : number){
    console.log(this.http.delete(this.rootURL+'/service/'+id));
    return this.http.delete(this.rootURL+'/service/'+id);
   }
}
