import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName: any = '';
  search: any;
  value:any;
  constructor(private route:Router,private datas:DataService) { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('name');
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem('bookId');
    localStorage.removeItem('mobile')
    console.log('Logout success');
    this.route.navigateByUrl('login');
  }
  home(){
    this.route.navigateByUrl("/dashboard/getAllBooks");
  }
  searchTitle(event: any) {
    console.log("input in search field===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.datas.ChangeDataMessage(Ddata)
  }
  
}
