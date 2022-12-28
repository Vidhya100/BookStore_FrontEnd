import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit{
  bookId = localStorage.getItem('bookId');
 // bookId:any;
  book:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    //this.bookId = this.activate.snapshot.paramMap.get('bookId');
    this.bookId = localStorage.getItem('bookId')
    console.log(this.bookId);
    this.getBookById(this.bookId);
    
  }

  getBookById(bookId:any){
    this.bookService.getBookById(bookId).subscribe((response: any) => {
      this.book = response.data;
    });
  }
}
