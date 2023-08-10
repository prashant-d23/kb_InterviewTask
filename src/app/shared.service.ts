import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { };

  baseUrl:string = 'https://www.postman.com/collections/';

  getDataFromServer(endPoint:string){
    let url = this.baseUrl + endPoint;
    return this.http.get(url);
  }

  isLoggedInValue = false;

  isLoggedIn(){
    return this.isLoggedInValue;
  }
  login(): void {
    this.isLoggedInValue = true;
  }

  logout(){
    this.isLoggedInValue = false;
  }



  // baseUrl:string = 'http://hmaapi.kilobytetech.com'

  // getDataFromServer(endPoint: string) {
  //   const url = `${this.baseUrl}/${endPoint}`;
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVmNGYxMzIxZWNmYzY0MTQ2Yjc5OGYiLCJkYXRlIjoiMjAyMS0wNS0wNFQwNzo1NDowNy43NTZaIiwiaWF0IjoxNjIwMTE0ODQ3fQ.7bH4ltgLBNmlKPbJ-WWwhbnaqHcAIPr6SDUlhY965D0';
  //   const headers = new HttpHeaders({
  //     'Authorization': token
  //   });

  //   return this.http.get(url, { headers });
  // }
}
