import { Injectable } from '@angular/core';
import { Categorie } from './categorie.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class CategorieService {

  formData  : Categorie;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postCategorie(formData : Categorie){
   return this.http.post(this.rootURL+'/Categorie',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Categorie')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putCategorie(formData : Categorie){
    return this.http.put(this.rootURL+'/Categorie/'+formData.id,formData);
     
   }

   deletePost(id : number){
    console.log(this.http.delete(this.rootURL+'/Categorie/'+id));
    return this.http.delete(this.rootURL+'/Categorie/'+id);
   }
}
