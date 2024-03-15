import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.restful-api.dev/objects'
  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get("https://api.restful-api.dev/objects");
  }

  pushdata(product:any):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`,product)
  }
}
