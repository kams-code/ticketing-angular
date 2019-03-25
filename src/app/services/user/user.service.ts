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

  

  refreshList(){
    this.http.get(this.rootURL+'/me')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  
}
