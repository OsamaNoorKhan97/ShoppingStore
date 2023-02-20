import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  getData(){
  return this.http.get('https://dummyjson.com/products');
  }
  getProductData(){
   return this.http.get('https://dummyjson.com/products/search?q=phone');
  }
  login(email:string, passsword:string){
    return this.http.post('',JSON.stringify({
      username:email,
      passsword:passsword
    }))
  }
}
