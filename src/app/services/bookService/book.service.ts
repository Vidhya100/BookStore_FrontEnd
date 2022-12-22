import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token: any;

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem('token')
  }


  getAllbooks(){
    let header = {
      headers: new HttpHeaders({
      
        'Content-Type' : 'application/json' ,
        'Authorization' :'Bearer '+this.token 
      })
    }
    return this.httpService.getService('/Book/GetAllBooks', true, header)
  }
}
