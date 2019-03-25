import { Injectable } from '@angular/core';
import { Sla } from './sla.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class SlaService {

  formData  : Sla;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postSla(formData : Sla){
   return this.http.post(this.rootURL+'/ElementSLA',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/ElementSLA')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putSla(formData : Sla){
    return this.http.put(this.rootURL+'/ElementSLA/'+formData.id,formData);
     
   }

   deleteSla(id : number){
    console.log(this.http.delete(this.rootURL+'/ElementSLA/'+id));
    return this.http.delete(this.rootURL+'/ElementSLA/'+id);
   }
}
