import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token:any;

  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token');
  }

  getWishList(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('/Wishlist/GetFromWishlist',true,header)
  }

  addToWishlist(reqData:any ,bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('/Wishlist/AddToWishlist?bookId='+bookId, reqData, true, header);
  }

  removeFromWishlist(wishlistId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.deleteService('/Wishlist/DeleteFromWishlist?wishlistId='+wishlistId,true,header)
  }
}
