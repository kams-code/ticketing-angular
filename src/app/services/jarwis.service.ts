import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
login1: any;
var: [];
userid:number;
  login(data) {
    this.login1= this.http.post(`${this.baseUrl}/login`, data).toPromise().then( res => localStorage.setItem('iduser', (res as any).user.id));
   // console.log(this.login1.toPromise().then(res =>this.var= res))
   // console.log(this.var);
this.userid =parseInt(localStorage.getItem('iduser'));
    console.log(localStorage.getItem('userid'));
    console.log(localStorage.getItem('iduser'));
    console.log(this.userid);
    return  this.http.post(`${this.baseUrl}/login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

}
