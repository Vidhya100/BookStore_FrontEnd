import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  @Input() bookList:any;
  totalbooks:any;
  sortBy:any='Sort by relevance';

  constructor(private book:BookService){}

  ngOnInit(): void {
    
  
    
  }
  
}
