import { Injectable } from '@angular/core';
import { Discussion } from './discussion.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class DiscussionService {

  formData  : Discussion;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postDiscussion(formData : Discussion){
   return this.http.post(this.rootURL+'/chatter_discussion',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/chatter_discussion')
    .toPromise().then(res =>this.list= (res as any).data);
    
  }

  putDiscussion(formData : Discussion){
    return this.http.put(this.rootURL+'/chatter_discussion/'+formData.id,formData);
     
   }

   deleteDiscussion(id : number){
    console.log(this.http.delete(this.rootURL+'/chatter_discussion/'+id));
    return this.http.delete(this.rootURL+'/chatter_discussion/'+id);
   }
}
