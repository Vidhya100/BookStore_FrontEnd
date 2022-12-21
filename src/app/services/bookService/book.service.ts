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
}
