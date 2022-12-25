import { Component } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent {
  bookId:any;
  book:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    //this.bookId = this.activate.snapshot.paramMap.get('bookId');
    this.bookId = localStorage.getItem('bookId')
    this.getBookById(this.bookId);
    
  }

  getBookById(bookId:any){
    this.bookService.getBookById(bookId).subscribe((response: any) => {
      console.log("Got All Books", response.data);
      this.book = response.data;
    });
  }
}
