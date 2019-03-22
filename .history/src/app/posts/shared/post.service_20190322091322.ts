import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class PostService {

  formData  : Post;
  list : [];
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  postPost(formData : Post){
   return this.http.post(this.rootURL+'/chatter_post',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/chatter_post')
    .toPromise().then(res =>this.list= (res as any).data);

  }

  putPost(formData : Post){
    return this.http.put(this.rootURL+'/chatter_post/'+formData.id,formData);

   }

   deletePost(id : number){
    console.log(this.http.delete(this.rootURL+'/chatter_post/'+id));
    return this.http.delete(this.rootURL+'/chatter_post/'+id);
   }

   getuser()
}
