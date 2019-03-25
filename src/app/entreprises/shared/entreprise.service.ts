import { Injectable } from '@angular/core';
import { Entreprise } from './entreprise.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class EntrepriseService {

  formData  : Entreprise;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postEntreprise(formData : Entreprise){
   return this.http.post(this.rootURL+'/Entreprise',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Entreprise')
    .toPromise().then(res =>this.list= (res as any).data);
    console.log(this.http.get(this.rootURL+'/Entreprise')
    .toPromise().then(res =>this.list= (res as any).data));
  }

  putEntreprise(formData : Entreprise){
    return this.http.put(this.rootURL+'/Entreprise/'+formData.id,formData);
     
   }

   deleteEntreprise(id : number){
    console.log(this.http.delete(this.rootURL+'/Entreprise/'+id));
    return this.http.delete(this.rootURL+'/Entreprise/'+id);
   }
}
