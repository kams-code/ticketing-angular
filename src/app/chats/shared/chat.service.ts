import { Injectable } from '@angular/core';
import { Chat } from './chat.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class ChatService {

  formData  : Chat;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postChat(formData : Chat){
   return this.http.post(this.rootURL+'/Chat',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Chat')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putChat(formData : Chat){
    return this.http.put(this.rootURL+'/Chat/'+formData.id,formData);
     
   }

   deleteChat(id : number){
    console.log(this.http.delete(this.rootURL+'/Chat/'+id));
    return this.http.delete(this.rootURL+'/Chat/'+id);
   }
}
