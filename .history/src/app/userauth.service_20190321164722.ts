import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  url = 
  constructor(private http: HttpClient ) {
  }

  get() {
    this.http.get(this.url + '/')
  }
}
