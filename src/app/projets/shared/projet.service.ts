import { Injectable } from '@angular/core';
import { Projet } from './projet.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class ProjetService {

  formData  : Projet;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postProjet(formData : Projet){
   return this.http.post(this.rootURL+'/Projet',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Projet')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putProjet(formData : Projet){
    return this.http.put(this.rootURL+'/Projet/'+formData.id,formData);
     
   }

   deleteProjet(id : number){
    console.log(this.http.delete(this.rootURL+'/Projet/'+id));
    return this.http.delete(this.rootURL+'/Projet/'+id);
   }
}
