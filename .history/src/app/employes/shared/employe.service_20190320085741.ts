import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})
export class ClientService {

  formData: Client;
  list: [];
  readonly rootURL = 'http://localhost:8000/api';

  constructor(private : HttpClient) { }

  postClient(formData : Client){
   return this.http.post(this.rootURL+'/employe',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/employe')
    .toPromise().then(res =>this.list= (res as any).data);

  }

  putClient(formData : Client){
    return this.http.put(this.rootURL+'/client/'+formData.id,formData);

   }

   deleteClient(id : number){
    console.log(this.http.delete(this.rootURL+'/client/'+id));
    return this.http.delete(this.rootURL+'/client/'+id);
   }
}
