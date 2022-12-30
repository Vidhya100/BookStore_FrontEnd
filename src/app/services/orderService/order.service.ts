import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  token:any;

  constructor(private http : HttpService) {
    this.token = localStorage.getItem('token');
   }

  getOrders(){
    console.log("Getting wishlist");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('/Order/Getorders',true,header)
  }

  placeOrder(data:any){
    console.log("Placing order");
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('/Order/Placeorder',data,true,header)
  }
}
