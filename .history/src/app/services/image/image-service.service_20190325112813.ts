import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'})
export class ImageService {

  nom : any;
  readonly rootURL ="http://localhost:8000/api"

  constructor(private http : HttpClient) { }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);
    this.http.post(this.rootURL+'/image', formData).toPromise().then( res =>localStorage.setItem('image', (res as any).nom));

    console.log(localStorage.getItem('image'));
    //this.nom= this.http.post(this.rootURL+'/image', formData);
    return this.http.post(this.rootURL+'/image', formData);
  }



}
