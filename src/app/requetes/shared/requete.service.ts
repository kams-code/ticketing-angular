import { Injectable } from '@angular/core';
import { Requete } from './requete.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class RequeteService {

  formData  : Requete;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postRequete(formData : Requete){
   return this.http.post(this.rootURL+'/requete',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/requete')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putRequete(formData : Requete){
    return this.http.put(this.rootURL+'/requete/'+formData.id,formData);
     
   }

   deleteRequete(id : number){
    console.log(this.http.delete(this.rootURL+'/requete/'+id));
    return this.http.delete(this.rootURL+'/requete/'+id);
   }
}
