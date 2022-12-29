import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token: any;
  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token');
  }

  

  addToCart(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.postService('/Cart/AddToCart', reqData, true, header);
  }
}
