import { Injectable } from '@angular/core';
import { Employe } from './employe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})
export class EmployeService {

  formData: Employe;
  list: [];
  readonly rootURL = 'http://localhost:8000/api';

  constructor(private: HttpClient) { }

  postEmploye(formData: Employe) {
   return this.http.post(this.rootURL + '/employe', formData);

  }

  refreshList() {
    this.http.get(this.rootURL + '/employe')
    .toPromise().then(res => this.list = (res as any).data);

  }

  putEmploye(formData: Employe) {
    return this.http.put(this.rootURL + '/client/' + formData.id, formData);

   }

   deleteEmploye(id: number) {
    console.log(this.http.delete(this.rootURL + '/client/' + id));
    return this.http.delete(this.rootURL +'/client/'+id);
   }
}
