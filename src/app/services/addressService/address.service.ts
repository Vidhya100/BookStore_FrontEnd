import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  token: any;
  constructor(private http:HttpService) { 
    this.token = localStorage.getItem('token');
  }

  getAllAddress() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('/Address/Getalladdress', true, header);
  }
  addAddress(reqdata:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('/Addres/AddAddress', reqdata, true, header);
  }

  updateAddress(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.putService('/Address/UpdateAddress', reqData, true, header);
  }

  getUserData() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('/User/GetUserDetails', true, header);
  }

}
