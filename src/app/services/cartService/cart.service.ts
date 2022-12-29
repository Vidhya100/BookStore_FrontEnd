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

  
  getCartItems() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.getService('/Cart/Getcartitem', true, header);
  }

  addToCart(reqData: any,bookId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.postService('/Cart/AddToCart?bookId='+bookId, reqData, true, header);
  }

  updateCart(cartId: any, bookQty: any) {
    console.log(cartId,bookQty);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.putService('/Cart/Updatecart?cartId='+cartId+'&bookQty='+bookQty,cartId,true,header);
  }

  removeFromCart(cartId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.deleteService('/Cart/Removefromcart?cartId='+cartId, true, header);
  }
}
