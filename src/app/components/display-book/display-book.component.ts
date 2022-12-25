import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  //data sharing parent to child
  @Input()  bookList:any;
  totalbooks:any;
  sortBy:any='Sort by relevance';

  constructor(private book:BookService, private router: Router ){}

  ngOnInit(): void {
    
  
    
  }
  quickView(bookId:any){
    localStorage.setItem('bookId',bookId)
    console.log(bookId);
    //this.router.navigateByUrl("/dashboard/quick-view");
  }
}
